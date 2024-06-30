import Avatar from "@/entities/user/ui/Avatar";
import Button from "@/shared/components/Button/Button";
import CustomModal from "@/shared/components/Modal/CustomModal";
import { useEffect, useState } from "react";
import styles from "./LoginForm.module.css";
import CustomInput from "@/shared/components/Input/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { clearToken } from "@/entities/user/model/authSlice";
import { login, selectAuthLoading, selectAuthError, selectIsAuthenticated } from '@/entities/user/model/authSlice';
import { AppDispatch } from '@/providers/store';


export default function LoginForm() {
    const [isVisible, setIsVisible] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [formError, setFormError] = useState<string | null>(null);

    const dispatch = useDispatch<AppDispatch>();

    const loading = useSelector(selectAuthLoading);
    const error = useSelector(selectAuthError);
    const isAuthenticated = useSelector(selectIsAuthenticated);


    useEffect(() => {
        if (isVisible) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isVisible]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setFormError(null);
        if (!username || !password) {
            setFormError('Введите логин и пароль!');
            return;
        }
        const result = await dispatch(login({ username, password }));
        if (login.fulfilled.match(result)) {
            setIsVisible(false);
        }
    };

    const logout = () => {
        dispatch(clearToken());
        localStorage.removeItem('token');
        localStorage.removeItem('userRating');
        setUsername("");
        setPassword("");

    }


    return (
        <div>
            {isAuthenticated ? (
                <div className={styles.row}>
                    <Avatar />
                    <Button variant="outline" onClick={logout}>Выйти</Button>
                </div>
            ) : (
                <Button onClick={() => { setIsVisible(true) }}>Войти</Button>
            )
            }

            {
                isVisible && <CustomModal>
                    <div className={styles.formContainer}>
                        <div className={styles.formHeader}>
                            <span className={styles.title}>Авторизация</span>
                            <svg className={styles.closeBtn} onClick={() => { setIsVisible(false) }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.8537 12.1463C12.9002 12.1927 12.937 12.2479 12.9622 12.3086C12.9873 12.3693 13.0003 12.4343 13.0003 12.5C13.0003 12.5657 12.9873 12.6308 12.9622 12.6915C12.937 12.7521 12.9002 12.8073 12.8537 12.8538C12.8073 12.9002 12.7521 12.9371 12.6914 12.9622C12.6307 12.9873 12.5657 13.0003 12.5 13.0003C12.4343 13.0003 12.3692 12.9873 12.3085 12.9622C12.2478 12.9371 12.1927 12.9002 12.1462 12.8538L7.99997 8.70688L3.85372 12.8538C3.7599 12.9476 3.63265 13.0003 3.49997 13.0003C3.36729 13.0003 3.24004 12.9476 3.14622 12.8538C3.0524 12.7599 2.99969 12.6327 2.99969 12.5C2.99969 12.3673 3.0524 12.2401 3.14622 12.1463L7.2931 8L3.14622 3.85375C3.0524 3.75993 2.99969 3.63269 2.99969 3.5C2.99969 3.36732 3.0524 3.24007 3.14622 3.14625C3.24004 3.05243 3.36729 2.99973 3.49997 2.99973C3.63265 2.99973 3.7599 3.05243 3.85372 3.14625L7.99997 7.29313L12.1462 3.14625C12.24 3.05243 12.3673 2.99973 12.5 2.99973C12.6327 2.99973 12.7599 3.05243 12.8537 3.14625C12.9475 3.24007 13.0003 3.36732 13.0003 3.5C13.0003 3.63269 12.9475 3.75993 12.8537 3.85375L8.70685 8L12.8537 12.1463Z" fill="#ABABAB" />
                            </svg>

                        </div>
                        <form onSubmit={handleSubmit} className={styles.form}>

                            <div className={styles.formBody}>
                                <div className={styles.formRow}>
                                    <div className={styles.label}>
                                        <span>Логин</span>
                                        <span>*</span>
                                    </div>
                                    <CustomInput
                                        className={styles.input}
                                        value={username}
                                        inputType="text"
                                        onChange={(e) => setUsername(e)}
                                        placeholder="Введите логин"
                                    />
                                </div>
                                <div className={styles.formRow}>
                                    <div className={styles.label}>
                                        <span>Пароль</span>
                                        <span>*</span>
                                    </div>
                                    <CustomInput
                                        className={styles.input}
                                        value={password}
                                        inputType="password"
                                        onChange={(e) => setPassword(e)}
                                        placeholder="Введите пароль"
                                    />
                                </div>
                                <div className={styles.formError}>
                                    <p>{error}</p>
                                    <p>{formError}</p>
                                </div>

                            </div>

                            <div className={styles.formAction}>
                                <Button type="submit" disabled={loading} onClick={() => { setIsVisible(true) }}>Войти</Button>
                                <Button variant="outline" onClick={() => { setIsVisible(false) }}>Отменить</Button>
                            </div>
                        </form>
                    </div>
                </CustomModal>
            }
        </div >
    )
}
