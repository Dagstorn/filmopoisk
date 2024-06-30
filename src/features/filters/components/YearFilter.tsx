import { useDispatch, useSelector } from 'react-redux';
import styles from '../Filters.module.css';
import { YEARS } from '@/shared/constants/years';
import { RootState } from '@/providers/store';
import { setYearFilter } from '@/entities/movie/model/moviesSlice';
import { useEffect, useState } from 'react';
import CustomSelect from '@/shared/components/Select/CustomSelect';
import { useRouter, useSearchParams } from 'next/navigation';


export default function YearFilter() {
    const dispatch = useDispatch();
    const year = useSelector((state: RootState) => state.movies.yearFilter);
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const year = searchParams.get('year') || '';
        dispatch(setYearFilter(year));
    }, [searchParams, dispatch]);

    const handleYearChange = (value: string) => {
        dispatch(setYearFilter(value));

        const newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.set('year', value);

        if (value === "" || value === "0") {
            newSearchParams.delete('year');
        }
        router.push(`${window.location.pathname}?${newSearchParams.toString()}`);
    };

    const options = Object.entries(YEARS).map(([value, label]) => ({ value, label }));

    return (
        <div className={styles.filterGroup}>
            <label className={styles.label}>Год выпуска: </label>
            <CustomSelect placeholder="Выберите год" value={year} onChange={handleYearChange} options={options} />
        </div>
    )
}
