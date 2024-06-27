import styles from '../Filters.module.css';

export default function GenreFilter() {
    return (
        <div className={styles.filterGroup}>
            <label className={styles.label}>Жанр:</label>
            <select className={styles.select}>
                <option value="" >Выберите жанр</option>
                <option value="action">Экшен</option>
                <option value="drama">Драма</option>
                <option value="comedy">Комедия</option>
            </select>
        </div>
    )
}
