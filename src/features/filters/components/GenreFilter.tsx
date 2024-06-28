import { useDispatch, useSelector } from 'react-redux';
import styles from '../Filters.module.css';
import { GENRES } from "@/shared/constants/genres";
import { RootState } from '@/app/providers/store';
import { setGenreFilter } from '@/entities/movie/model/moviesSlice';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function GenreFilter() {
    const dispatch = useDispatch();
    const genre = useSelector((state: RootState) => state.movies.genreFilter);

    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        const genre = searchParams.get('genre') || '';
        dispatch(setGenreFilter(genre));
    }, [searchParams, dispatch]);

    const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setGenreFilter(e.target.value));
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set('genre', e.target.value);
        if (e.target.value === "") {
            newSearchParams.delete('genre');
        }
        setSearchParams(newSearchParams);
    };



    return (
        <div className={styles.filterGroup}>
            <label className={styles.label}>Жанр:</label>
            <select className={styles.select} value={genre} onChange={handleGenreChange}>
                {Object.entries(GENRES).map(([key, value]) => (
                    <option key={key} value={key === '0' ? '' : key}>
                        {value}
                    </option>
                ))}
            </select>
        </div>
    )
}
