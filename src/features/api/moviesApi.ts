import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Movie, MovieDetailed } from '../../shared/types';


export interface MoviesResponse {
    search_result: Movie[];
    total_pages: number;
}

export interface MovieDetailsResponse extends MovieDetailed {}
  
export interface MoviesQueryParams {
    genre?: string;
    release_year?: string;
    title?: string;
    page?: number;
}
export const moviesApi = createApi({
    reducerPath: "moviesApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3030/api/v1/"}),
    endpoints: (builder) => ({
        getMovies: builder.query<MoviesResponse, MoviesQueryParams>({
            query: ({ genre, release_year, title, page }) => {
                let query = "search?";
                
                if (title) {
                    query += `title=${title}&`;
                }

                if (genre && genre != '0') {
                    query += `genre=${genre}&`;
                }
                if (page) query += `page=${page}&`;

                if (release_year && release_year != "0") {
                    query += `&release_year=${release_year}&`;
                }
                return  query.slice(0, -1);
            }
        }),
        getMovieDetails: builder.query<MovieDetailsResponse, string>({
            query: ( id ) => `/movie/${id}`,
        })
        
    })
});

export const useGetMoviesQuery = moviesApi.useGetMoviesQuery;
export const useGetMovieDetailsQuery = moviesApi.useGetMovieDetailsQuery;

