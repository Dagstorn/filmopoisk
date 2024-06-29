'use client'
import DetailedMovieCard from "@/entities/movie/ui/MovieCard/DetailedMovieCard";
import { useGetMovieDetailsQuery } from "@/features/api/moviesApi";
import Spinner from "@/shared/components/Spinner/Spinner";
import styles from "./MoviePage.module.css";
import ActorsList from "@/features/ActorsList/ActorsList";
import { useParams } from 'next/navigation';

export default function MoviePage() {
    const params = useParams();
    const { movieId } = params;
    const { data: movieDetails, error, isLoading, refetch } = useGetMovieDetailsQuery(movieId as string);

    if (isLoading) return <Spinner />;
    if (error) return <div>Error loading movie details.</div>;
    if (!movieDetails) return <div>No movie details found.</div>;

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <DetailedMovieCard refetch={refetch} movie={movieDetails} />
            </div>
            <ActorsList actors={movieDetails.actors} />
        </div>
    )
}
