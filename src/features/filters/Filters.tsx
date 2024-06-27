import styles from "./Filters.module.css";
import GenreFilter from "./components/GenreFilter";
import YearFilter from "./components/YearFilter";

export default function Filters() {
    return (
        <div className={styles.filtersContainer}>
            <h2 className={styles.header}>Фильтр</h2>
            <GenreFilter />
            <YearFilter />
        </div>
    )
}
