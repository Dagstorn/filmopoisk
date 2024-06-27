import styles from "./styles.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <span className={styles.logo}>Фильмопоиск</span>
            <button className={styles.action}>Войти</button>
        </header>
    );
}


export default Header;
