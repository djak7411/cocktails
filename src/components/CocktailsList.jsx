import styles from '../styles/components/CocktailsList.module.sass'
export default function CocktailsList({cocktails}){

  return (
    <ul className={styles.list}>
      {cocktails.map((cocktail, inx) => {
        return <li key={'cocktails-list-' + inx}><a href={'/' + cocktail}>{cocktail}</a></li>
      })}
    </ul>
  )

}