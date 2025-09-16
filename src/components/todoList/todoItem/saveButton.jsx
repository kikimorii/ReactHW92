import styles from './saveButton.module.scss';

const SaveButton = ({handleClick}) => {
    return (
        <button className={styles.button} onClick={handleClick} type="button">
            Сохранить
        </button>
    )
};

export { SaveButton };