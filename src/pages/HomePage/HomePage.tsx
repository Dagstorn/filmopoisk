import Filters from '../../features/filters/Filters';
import MoviesList from '@/features/MovieList/MovieList';
import SearchBar from '../../features/movieSearch/ui/SearchBar/SearchBar';
import styles from './HomePage.module.css';

export default function MoviesPage() {
    return (
        <div className={styles.moviesPage}>
            <div className={styles.filters}>
                <Filters />
            </div>
            <div className={styles.mainContent}>
                <SearchBar />
                <MoviesList />
            </div>
        </div>
    )
}
