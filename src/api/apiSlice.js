import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1/' }),
  endpoints: (builder) => ({
    getCocktail: builder.query({
      query: (cocktailCode) => `search.php?s=${cocktailCode}`,
    }),
  }),
});

export const { 
  useGetCocktailQuery, 
} = apiSlice;

