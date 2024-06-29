import { ReactNode } from "react";
import { createPortal } from "react-dom";
import styles from "./CustomModal.module.css";

export default function CustomModal({ children }: { children: ReactNode }) {
    return createPortal(
        <>
            <div className={styles.modalContainer}>
                <div className={styles.modal}>
                    {children}
                </div>
            </div>,
        </>,

        document.body
    )
}
