import { useDispatch, useSelector } from 'react-redux';
import styles from '../Filters.module.css';
import { GENRES } from "@/shared/constants/genres";
import { RootState } from '@/app/providers/store';
import { setGenreFilter } from '@/entities/movie/model/moviesSlice';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import CustomSelect from '@/shared/components/Select/CustomSelect';

export default function GenreFilter() {
    const dispatch = useDispatch();
    const genre = useSelector((state: RootState) => state.movies.genreFilter);

    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        const genre = searchParams.get('genre') || '';
        dispatch(setGenreFilter(genre));
    }, [searchParams, dispatch]);

    const handleGenreChange = (value: string) => {

        dispatch(setGenreFilter(value));
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set('genre', value);
        if (value === "" || value === "0") {
            newSearchParams.delete('genre');
        }
        setSearchParams(newSearchParams);
    };


    const options = Object.entries(GENRES).map(([value, label]) => ({ value, label }));

    return (
        <div className={styles.filterGroup}>
            <label className={styles.label}>Жанр:</label>
            <CustomSelect placeholder="Выберите жанр" value={genre} onChange={handleGenreChange} options={options} />
        </div>
    )
}
