import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {Movie} from "../../../shared/types/index"

export interface MoviesState {
  movies: Movie[];
  loading: boolean;
  error: string | null;
  genreFilter: string;
  yearFilter: string;
  searchQuery: string;
}

const initialState: MoviesState = {
  movies: [],
  loading: false,
  error: null,
  genreFilter: '',
  yearFilter: '0',
  searchQuery: ''
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies(state, action: PayloadAction<Movie[]>) {
      state.movies = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    setGenreFilter(state, action: PayloadAction<string>) {
      state.genreFilter = action.payload;
    },
    setYearFilter(state, action: PayloadAction<string>) {
      state.yearFilter = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  },
});

export const { setMovies, setLoading, setError, setGenreFilter, setYearFilter, setSearchQuery } = moviesSlice.actions;
export default moviesSlice.reducer;
