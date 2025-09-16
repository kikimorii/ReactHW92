import styles from './input.module.scss';

const Input = ({ inputValue, setInputValue }) => {
    return (
        <input
            className={styles.input}
            type="text"
            value={inputValue}
            onChange={({ target }) => setInputValue(target.value)}
            placeholder='Текст для поиска'
        />
    )
}

export { Input };