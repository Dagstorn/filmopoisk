import Button from "../Button/Button";
import styles from "./styles.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <span className={styles.logo}>Фильмопоиск</span>
            <Button>Войти</Button>
        </header>
    );
}


export default Header;
