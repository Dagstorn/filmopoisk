'use client';

import { useDispatch, useSelector } from 'react-redux';
import styles from '../Filters.module.css';
import { GENRES } from "@/shared/constants/genres";
import { RootState } from '@/providers/store';
import { setGenreFilter } from '@/entities/movie/model/moviesSlice';
import { useEffect, useState } from 'react';
import CustomSelect from '@/shared/components/Select/CustomSelect';
import { useRouter, useSearchParams } from 'next/navigation';

export default function GenreFilter() {
    const dispatch = useDispatch();
    const genre = useSelector((state: RootState) => state.movies.genreFilter);
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const genre = searchParams.get('genre') || '';
        dispatch(setGenreFilter(genre));
    }, [searchParams, dispatch]);

    const handleGenreChange = (value: string) => {
        dispatch(setGenreFilter(value));
        const newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.set('genre', value);
        if (value === "" || value === "0") {
            newSearchParams.delete('genre');
        }
        router.push(`${window.location.pathname}?${newSearchParams.toString()}`);
    };


    const options = Object.entries(GENRES).map(([value, label]) => ({ value, label }));

    return (
        <div className={styles.filterGroup}>
            <label className={styles.label}>Жанр:</label>
            <CustomSelect placeholder="Выберите жанр" value={genre} onChange={handleGenreChange} options={options} />
        </div>
    )
}
