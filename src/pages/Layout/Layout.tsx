import { Outlet } from 'react-router-dom';
import Header from "@/features/Header/Header";
import styles from "./styles.module.css";

function Layout() {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.main}>
                <Outlet />
            </main>
        </div >
    );
}


export default Layout;
