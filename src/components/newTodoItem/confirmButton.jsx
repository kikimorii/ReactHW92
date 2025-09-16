import styles from './confirmButton.module.scss';

const ConfirmButton = ({ handleClick, isDisable }) => {
    return (
        <button className={styles.button} onClick={handleClick} type="button" disabled={isDisable}>
            Добавить
        </button>
    )
}

export { ConfirmButton };