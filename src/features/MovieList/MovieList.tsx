import { useGetMoviesQuery } from "../api/moviesApi";
import MovieCard from "@/entities/movie/ui/MovieCard/MovieCard";
import styles from "./MovieList.module.css"
import { useSelector } from "react-redux";
import { RootState } from "@/app/providers/store";
import Spinner from "@/shared/components/Spinner/Spinner";
import { useEffect, useState } from "react";

import ArrowBtn from "@/shared/components/ArrowBtn/ArrowBtn";
import { useSearchParams } from "react-router-dom";
export default function MoviesList() {
    const genreFilter = useSelector((state: RootState) => state.movies.genreFilter);
    const yearFilter = useSelector((state: RootState) => state.movies.yearFilter);
    const searchQuery = useSelector((state: RootState) => state.movies.searchQuery);
    const [page, setPage] = useState(1);

    const { data: data, error, isLoading } = useGetMoviesQuery({ genre: genreFilter, release_year: yearFilter, title: searchQuery, page });

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const page = searchParams.get('page') || '';
        if (page !== '') {
            if (Number(page) > 0) {
                setPage(Number(page));
            }
        }
    }, [searchParams]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [page]);


    const handlePageChange = (newPage: number) => {
        setPage(page);
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set('page', String(newPage));
        setSearchParams(newSearchParams);

    };


    if (isLoading) return <Spinner />
    if (error) return <div className={styles.errorContainer}>
        <span className={styles.errorTop}>Фильмы не найдены</span>
        <span className={styles.errorDetails}>Измените запрос и попробуйте снова</span>
    </div>

    if (data?.search_result && data?.search_result.length === 0) return <div className={styles.errorContainer}>
        <span className={styles.errorTop}>Фильмы не найдены</span>
        <span className={styles.errorDetails}>Измените запрос и попробуйте снова</span>
    </div>
    return (
        <>
            <div className={styles.movieList}>
                {data?.search_result && data.search_result.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
            <div className={styles.pagination}>
                <ArrowBtn disabled={page === 1} direction="left" onClick={() => handlePageChange(page - 1)} />
                <span>{page}</span>
                <ArrowBtn disabled={data && page === data.total_pages} direction="right" onClick={() => handlePageChange(page + 1)} />
            </div>
        </>

    );
}
