import styles from './resetButton.module.scss';

const ResetButton = ({ handleClick }) => {
    return (
        <button className={styles.button} onClick={handleClick} type="button">
            Сбросить
        </button>
    )
}

export { ResetButton };