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
        setInputValue(title);
        dispatch(setSearchQuery(title));
    }, []);


    useEffect(() => {
        const title = searchParams.get('title') || '';
        dispatch(setSearchQuery(title));
    }, [debouncedValue, dispatch]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set('title', e.target.value);
        newSearchParams.delete('page');
        if (e.target.value === "") {
            newSearchParams.delete('title');
        }
        setSearchParams(newSearchParams);
    };

    const handleClear = () => {
        setInputValue('');
        dispatch(setSearchQuery(''));
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.delete('title');
        setSearchParams(newSearchParams);
    };


    return (
        <div className={styles.searchBar}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.833374 7.66671C0.833374 11.4334 3.90004 14.5 7.66671 14.5C11.4334 14.5 14.5 11.4334 14.5 7.66671C14.5 3.90004 11.4334 0.833374 7.66671 0.833374C3.90004 0.833374 0.833374 3.90004 0.833374 7.66671ZM1.83337 7.66671C1.83337 4.45337 4.44671 1.83337 7.66671 1.83337C10.8867 1.83337 13.5 4.45337 13.5 7.66671C13.5 10.88 10.8867 13.5 7.66671 13.5C4.44671 13.5 1.83337 10.88 1.83337 7.66671ZM14.3134 15.02C14.4134 15.12 14.54 15.1666 14.6667 15.1666C14.7934 15.1666 14.92 15.12 15.02 15.02C15.2134 14.8266 15.2134 14.5066 15.02 14.3133L13.6867 12.98C13.4934 12.7866 13.1734 12.7866 12.98 12.98C12.7867 13.1733 12.7867 13.4933 12.98 13.6866L14.3134 15.02Z" fill="#999FA6" />
            </svg>

            <input
                type="text"
                placeholder="Название фильма"
                value={inputValue}
                onChange={handleSearchChange}
                className={styles.input}
            />

            {inputValue && <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                onClick={handleClear}
                className={styles.clearInput}
                xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.00004 15.1667C4.04671 15.1667 0.833374 11.9534 0.833374 8.00004C0.833374 4.04671 4.04671 0.833374 8.00004 0.833374C11.9534 0.833374 15.1667 4.04671 15.1667 8.00004C15.1667 11.9534 11.9534 15.1667 8.00004 15.1667ZM8.00004 1.83337C4.60004 1.83337 1.83337 4.60004 1.83337 8.00004C1.83337 11.4 4.60004 14.1667 8.00004 14.1667C11.4 14.1667 14.1667 11.4 14.1667 8.00004C14.1667 4.60004 11.4 1.83337 8.00004 1.83337ZM6.11337 10.3867C5.9867 10.3867 5.86004 10.34 5.76004 10.24C5.5667 10.0467 5.5667 9.72666 5.76004 9.53332L7.29337 7.99999L5.76004 6.46666C5.5667 6.27332 5.5667 5.95332 5.76004 5.75999C5.95337 5.56666 6.27337 5.56666 6.4667 5.75999L8.00004 7.29332L9.53337 5.75999C9.7267 5.56666 10.0467 5.56666 10.24 5.75999C10.4334 5.95332 10.4334 6.27332 10.24 6.46666L8.7067 7.99999L10.24 9.53332C10.4334 9.72666 10.4334 10.0467 10.24 10.24C10.14 10.34 10.0134 10.3867 9.8867 10.3867C9.76004 10.3867 9.63337 10.34 9.53337 10.24L8.00004 8.70666L6.4667 10.24C6.37337 10.34 6.24004 10.3867 6.11337 10.3867Z" fill="#999FA6" />
            </svg>
            }
        </div>
    )
}
