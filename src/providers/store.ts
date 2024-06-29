import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import moviesReducer from "@/entities/movie/model/moviesSlice";
import { moviesApi } from '@/features/api/moviesApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { loginApi } from '@/features/api/loginApi';
import authReducer, { restoreLogin } from "@/entities/user/model/authSlice";
import { ratingApi } from '@/features/api/ratingApi';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [ratingApi.reducerPath]: ratingApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  .concat(moviesApi.middleware)
  .concat(loginApi.middleware)
  .concat(ratingApi.middleware)
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

