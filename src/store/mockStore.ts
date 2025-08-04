import { configureStore } from '@reduxjs/toolkit';
import { mockApiSlice } from '@/api/mocks/mockCocktailsApiSlice';
;
export const mockStore = configureStore({
  reducer: {
    [mockApiSlice.reducerPath]: mockApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mockApiSlice.middleware),
});