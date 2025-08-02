export interface ICocktail {
  strDrink: string,
  strCategory: string,
  strAlcoholic: string,
  strGlass: string,
  strInstructions: string,
  strDrinkThumb: string,
  [key: string]: string | null;
}