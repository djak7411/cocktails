import styles from '../styles/components/CocktailsList.module.sass'
import { NavLink, useLocation } from 'react-router-dom';

export default function CocktailsList({cocktails}){
  const location = useLocation();
  return (
    <ul className={styles.list}>
      { cocktails.map((cocktail, inx) => {
        return (
          <li key={'cocktails-list-' + inx}>
            <NavLink className={({ isActive }) => isActive || (location.pathname === '/' && inx === 0) ? styles.current : ''} to={'/' + cocktail}>{cocktail}</NavLink>
          </li>
        )
      }) }
    </ul>
  )
}