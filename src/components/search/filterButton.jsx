import styles from './filterButton.module.scss'

const FilterButton = ({handleClick, children}) => {
    return (
        <button className={styles.button} type="button" onClick={handleClick}>
            {children}
        </button>
    )
}

export { FilterButton }