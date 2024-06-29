'use client'
import styles from "./Filters.module.css";
import GenreFilter from "./components/GenreFilter";
import YearFilter from "./components/YearFilter";

export default function Filters() {
    return (
        <div className={styles.filtersContainer}>
            <span className={styles.header}>Фильтр</span>
            <GenreFilter />
            <YearFilter />
        </div>
    )
}
