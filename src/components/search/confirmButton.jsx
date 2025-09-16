import styles from './confirmButton.module.scss'

const ConfirmButton = ({handleClick, disabled}) => {
    return (
        <button className={styles.button} disabled={!disabled} type="button" onClick={handleClick}>Искать</button>
    )
}

export { ConfirmButton };