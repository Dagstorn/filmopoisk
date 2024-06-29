import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import LoginForm from "@/features/Login/LoginForm";

function Header() {

    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logo}>
                <span >Фильмопоиск</span>
            </Link>

            <LoginForm />
        </header>
    );
}


export default Header;
