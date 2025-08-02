import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICocktail } from '../types/Cocktail';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1/' }),
  tagTypes: ['Cocktail'],
  reducerPath: 'cocktailsApi',
  endpoints: (builder) => ({
    getCocktail: builder.query<{ drinks: ICocktail[] | null}, string>({
      query: (cocktailCode) => `search.php?s=${cocktailCode}`,
      providesTags: [{ type: 'Cocktail' }],
    }),
  }),
});

export const { 
  useGetCocktailQuery, 
} = apiSlice;

