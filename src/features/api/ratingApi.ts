import { RootState } from '@/app/providers/store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface RatingResponse {
    movieId: string;
    newAverageRate: string;
    newTotalRatesCount: string;
}
  
export interface RatingQueryParams { 
    movieId: string; 
    user_rate: number 
}
export const ratingApi = createApi({
    reducerPath: "ratingApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3030/api/v1/",
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token;
            if (token) {
              headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        rateMovie: builder.mutation<RatingResponse, RatingQueryParams>({
            query: (rating) => ({
                url: "rateMovie",
                method: 'POST',
                body: rating,
            })
        })
    })
});

export const useRateMovieMutation = ratingApi.useRateMovieMutation;

