import { useGetCocktailQuery } from '../api/apiSlice';
import styles from '../styles/components/Cocktail.module.sass';

export default function Cocktail({ cocktailCode }){
  const { 
    data: cocktails, 
    isLoading, 
    isError, 
  } = useGetCocktailQuery(cocktailCode);

  function getIngredientsWithMeasures(cocktail) {
    return Object.entries(cocktail)
      .filter(([key, value]) => 
        key.startsWith('strIngredient') && value,
      )
      .map(([key, ingredient], inx) => {
        const num = key.replace('strIngredient', '');
        const measureKey = `strMeasure${num}`;

        return <div key={ingredient + inx}>
          <span>{ingredient}</span>
          &nbsp;
          <span>{cocktail[measureKey]}</span>
        </div>;
      });
  }

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading cocktail</div>;

  return (
    cocktails?.drinks.map((cocktail, inx) => {
      return <div className={styles.cocktail} key={cocktail.strDrink + inx}>
        <div className={styles.cocktail__descriptionContainer}>
          <span className={styles.cocktail__name}>
            {cocktail.strDrink}
          </span>
          <p className={styles.cocktail__features}>
            <span>{cocktail.strCategory}</span>
            <span>{cocktail.strAlcoholic}</span>
            <span>{cocktail.strGlass}</span>
          </p>
          <p>
            Instructions:
            <p>{cocktail.strInstructions}</p>
          </p>
          <div className={styles.cocktail__ingredients}>
            List of ingredients: {getIngredientsWithMeasures(cocktail)}
          </div>
        </div>
        <div className={styles.cocktail__pictureContainer}>
          <img
            src={cocktail.strDrinkThumb}
            loading="lazy"
            width={200}
            height={150}
          />
        </div>
      </div>;
    })
  );

}