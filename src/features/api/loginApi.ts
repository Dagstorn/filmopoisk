import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface LoginResponse {
    token: string;
}
  
export interface LoginQueryParams { 
    username: string; 
    password: string 
}
export const loginApi = createApi({
    reducerPath: "loginApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3030/api/v1/"}),
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginQueryParams>({
            query: (credentials) => ({
                url: "login",
                method: 'POST',
                body: credentials,
            })
        })
    })
});

export const useLoginMutation = loginApi.useLoginMutation;

