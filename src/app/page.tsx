import Filters from "@/features/filters/Filters";
import styles from "./page.module.css";
import SearchBar from "@/features/movieSearch/ui/SearchBar/SearchBar";
import MoviesList from "@/features/MovieList/MovieList";

export default function Home() {
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
  );
}
