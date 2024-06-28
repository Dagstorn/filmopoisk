import Button from "@/shared/components/Button/Button";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logo}>
                <span >Фильмопоиск</span>
            </Link>

            <Button>Войти</Button>
        </header>
    );
}


export default Header;
