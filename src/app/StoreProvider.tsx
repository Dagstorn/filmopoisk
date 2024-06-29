'use client'
import { Provider } from 'react-redux'
import { store, RootState } from '@/providers/store';
import { useEffect } from 'react';
import { restoreLogin } from '@/entities/user/model/authSlice';

const ReduxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            store.dispatch(restoreLogin(token));
        }
    }, []);
    return <Provider store={store}>{children}</Provider>;
};
export default ReduxProvider;
