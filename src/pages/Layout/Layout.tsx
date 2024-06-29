import { Outlet } from 'react-router-dom';
import Header from "@/widgets/Header/Header";
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
