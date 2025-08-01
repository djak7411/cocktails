import styles from '../styles/components/CocktailsList.module.sass'
import { NavLink, useLocation } from 'react-router-dom';

export default function CocktailsList({cocktails}) {
  const location = useLocation();

  return (
    <ul className={styles.list}>
      { cocktails.map((cocktail, inx) => {
        return (
          <li key={'cocktails-list-' + inx} className={location.pathname === `/${cocktail}` ? styles.current : ''}>
          <NavLink className={styles.navigation_item} to={'/' + cocktail}>
            {cocktail}
          </NavLink>
          </li>
        )
      }) }
    </ul>
  )
}