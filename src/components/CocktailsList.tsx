import { FC } from 'react';
import styles from '../styles/components/CocktailsList.module.sass';
import { NavLink, useLocation } from 'react-router-dom';
import firstLetterToUpper from '../lib/firstLetterToUpper';

const CocktailsList: FC<{ cocktails: string[] }> = ({ cocktails }) => {
  const location = useLocation();
  
  return (
    <ul className={styles.list}>
      { cocktails.map((cocktail, inx) => {
        return (
          <li key={'cocktails-list-' + inx} className={decodeURI(location.pathname) === `/${cocktail}` ? styles.current : ''}>
            <NavLink className={styles.navigation_item} to={'/' + cocktail}>
              {firstLetterToUpper(cocktail)}
            </NavLink>
          </li>
        );
      }) }
    </ul>
  );
}

export default CocktailsList;