'use client'
import Link from "next/link";
import styles from "./styles.module.css";
import LoginForm from "@/features/Login/LoginForm";

function Header() {

    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <span >Фильмопоиск</span>
            </Link>

            <LoginForm />
        </header>
    );
}


export default Header;
