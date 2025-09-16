import { useContext, useState } from 'react';
import { AppContext } from '../../context';
import { ConfirmButton, FilterButton, Input, ResetButton } from './';
import { SERVER_URL } from '../../utils';
import styles from './search.module.scss';

const Search = () => {
    const { data, functions } = useContext(AppContext);
    const [inputValue, setInputValue] = useState(data.options.searchPhrase);
    const hasFilters = data.options.isSorted || inputValue.trim().length > 0;

    return (
        <form className={styles.form}>
            <Input inputValue={inputValue} setInputValue={setInputValue} />
            {hasFilters && (
                <ResetButton handleClick={() => {
                    functions.setIsSorted(false);
                    functions.setSearchPhrase("");
                    setInputValue("");
                    functions.getFilteredTodos(SERVER_URL, false, "");
                }} />
            )}
            <FilterButton handleClick={() => {
                const newValue = !data.options.isSorted;
                functions.setIsSorted(newValue);
                functions.getFilteredTodos(SERVER_URL, newValue, inputValue);
            }}>{data.options.isSorted ? "Отключить сортировку" : "Отсортировать"}</FilterButton>
            <ConfirmButton disabled={inputValue} handleClick={() =>
                functions.getFilteredTodos(SERVER_URL, data.options.isSorted, inputValue)
            } />
        </form>
    )
};


export { Search };