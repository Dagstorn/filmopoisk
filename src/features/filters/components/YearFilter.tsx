import { useDispatch, useSelector } from 'react-redux';
import styles from '../Filters.module.css';
import { YEARS } from '@/shared/constants/years';
import { RootState } from '@/app/providers/store';
import { setYearFilter } from '@/entities/movie/model/moviesSlice';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
export default function YearFilter() {
    const dispatch = useDispatch();
    const year = useSelector((state: RootState) => state.movies.yearFilter);

    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        const year = searchParams.get('year') || '';
        dispatch(setYearFilter(year));
    }, [searchParams, dispatch]);

    const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setYearFilter(e.target.value));
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set('year', e.target.value);
        if (e.target.value === "") {
            newSearchParams.delete('year');
        }
        setSearchParams(newSearchParams);
    };

    return (
        <div className={styles.filterGroup}>
            <label className={styles.label}>Год выпуска:</label>
            <select className={styles.select} value={year} onChange={handleYearChange}>
                {Object.entries(YEARS).map(([key, value]) => (
                    <option key={key} value={key === '0' ? '' : key}>
                        {value}
                    </option>
                ))}
            </select>
        </div>
    )
}
