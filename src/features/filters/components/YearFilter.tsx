import styles from '../Filters.module.css';

export default function YearFilter() {
    return (
        <div className={styles.filterGroup}>
            <label className={styles.label}>Год выпуска:</label>
            <select className={styles.select}>
                <option value="">Выберите год</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
            </select>
        </div>
    )
}
