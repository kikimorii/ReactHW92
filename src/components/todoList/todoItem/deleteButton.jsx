import styles from './deleteButton.module.scss';

const DeleteButton = ({handleClick}) => {
    return (
        <button className={styles.button} type="button" onClick={handleClick}>
            Удалить
        </button>
    )
}

export { DeleteButton };