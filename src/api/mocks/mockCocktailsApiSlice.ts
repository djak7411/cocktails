import { createApi } from '@reduxjs/toolkit/query/react';
import { ICocktail } from '@/types/Cocktail';

const MOCK_COCKTAILS: Record<string, { drinks: ICocktail[] | null }> = {
  margarita: {
    drinks: [
      {
        idDrink: "11007",
        strDrink: "Margarita",
        strDrinkAlternate: null,
        strTags: "IBA,ContemporaryClassic",
        strVideo: null,
        strCategory: "Ordinary Drink",
        strIBA: "Contemporary Classics",
        strAlcoholic: "Alcoholic",
        strGlass: "Cocktail glass",
        strInstructions: "Rub the rim of the glass...",
        strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
        strIngredient1: "Tequila",
        strIngredient2: "Triple sec",
        strIngredient3: "Lime juice",
        strIngredient4: "Salt",
        strIngredient5: null,
        strMeasure1: "1 1/2 oz ",
        strMeasure2: "1/2 oz ",
        strMeasure3: "1 oz ",
        strMeasure4: null,
        strMeasure5: null,
        strImageSource: "https://commons.wikimedia.org/wiki/File:Margarita_002.jpg",
        strImageAttribution: "Author Name",
        strCreativeCommonsConfirmed: "Yes",
        dateModified: "2015-08-18 14:42:59"
      }
    ]
  }
};

export const mockApiSlice = createApi({
  reducerPath: 'cocktailsApi',
  baseQuery: async (args) => {
    const cocktailCode = args.split('=')[1];
    const response = MOCK_COCKTAILS[cocktailCode] || { drinks: null };
    
    return { data: response };
  },
  tagTypes: ['Cocktail'],
  endpoints: (builder) => ({
    getCocktail: builder.query<{ drinks: ICocktail[] | null }, string>({
      query: (cocktailCode) => `search.php?s=${cocktailCode}`,
      providesTags: [{ type: 'Cocktail' }],
    }),
  }),
});

export const { useGetCocktailQuery } = mockApiSlice;