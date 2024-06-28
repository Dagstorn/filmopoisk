import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchBar.module.css';
import { RootState } from '@/app/providers/store';
import { setSearchQuery } from '@/entities/movie/model/moviesSlice';
import { useEffect, useState } from 'react';
import useDebounce from '@/shared/hooks/useDebounce';
import { useSearchParams } from 'react-router-dom';

export default function SearchBar() {
    const dispatch = useDispatch();
    const searchQuery = useSelector((state: RootState) => state.movies.searchQuery);

    const [inputValue, setInputValue] = useState(searchQuery);
    const debouncedValue = useDebounce(inputValue, 500);

    const [searchParams, setSearchParams] = useSearchParams();


    useEffect(() => {
        const title = searchParams.get('title') || '';
        dispatch(setSearchQuery(title));
    }, [debouncedValue, dispatch]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set('title', e.target.value);
        if (e.target.value === "") {
            newSearchParams.delete('title');
        }
        setSearchParams(newSearchParams);
    };


    return (
        <div className={styles.searchBar}>
            <input
                type="text"
                placeholder="Название фильма"
                value={inputValue}
                onChange={handleSearchChange}
                className={styles.input}
            />
        </div>
    )
}
