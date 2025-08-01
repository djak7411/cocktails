import { useGetCocktailQuery } from "../api/apiSlice"

export default function Cocktail({cocktailCode}){
  const { 
    data: cocktails, 
    isLoading, 
    isError 
  } = useGetCocktailQuery(cocktailCode)

  function getIngredientsWithMeasures(cocktail) {
    return Object.entries(cocktail)
      .filter(([key, value]) => 
        key.startsWith('strIngredient') && value
      )
      .map(([key, ingredient], inx) => {
        const num = key.replace('strIngredient', '');
        const measureKey = `strMeasure${num}`;

        return <div key={ingredient + inx}>
          <span>{ingredient}</span>
          &nbsp;
          <span>{cocktail[measureKey]}</span>
        </div>
      });
  }

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading cocktail</div>;

  return (
    cocktails.drinks.map((cocktail, inx) => {
      return <div key={cocktail.strDrink + inx}>
        strDrink: {cocktail.strDrink}
        strCategory: {cocktail.strCategory}
        strGlass: {cocktail.strGlass}
        strInstructions: {cocktail.strInstructions}
        strDrinkThumb: {cocktail.strDrinkThumb}
        List of ingredients: {getIngredientsWithMeasures(cocktail)}
      </div>
    })
  )

}