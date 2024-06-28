import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import moviesReducer from "../../entities/movie/model/moviesSlice";
import { moviesApi } from '../../features/api/moviesApi';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware),
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

