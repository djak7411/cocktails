import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '@/api/cocktailsApiSlice';
import { mockApiSlice } from '@/api/mocks/mockCocktailsApiSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [mockApiSlice.reducerPath]: mockApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware).concat(mockApiSlice.middleware),
});