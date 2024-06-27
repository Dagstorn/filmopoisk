import styles from './SearchBar.module.css';

export default function SearchBar() {
    return (
        <div className={styles.searchBar}>
            <input
                type="text"
                placeholder="Название фильма"
                className={styles.input}
            />
        </div>
    )
}
