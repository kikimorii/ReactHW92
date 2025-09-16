import { useState } from 'react';
import { ConfirmButton, FilterButton, Input, ResetButton } from './';
import { SERVER_URL } from '../../utils';
import styles from './search.module.scss';
import { getSearchPhrase, getIsSorted } from '../../redux/selects';
import { useDispatch, useSelector } from 'react-redux';
import { setTodos, setSearchPhrase, setIsSorted } from '../../redux/actions';

const Search = () => {
    const searchPhrase = useSelector(getSearchPhrase);
    const isSorted = useSelector(getIsSorted);
    const [inputValue, setInputValue] = useState(searchPhrase);
    const hasFilters = isSorted || inputValue.trim().length > 0;
    const dispatch = useDispatch();

    return (
        <form className={styles.form}>
            <Input inputValue={inputValue} setInputValue={setInputValue} />
            {hasFilters && (
                <ResetButton handleClick={() => {
                    dispatch(setIsSorted(false));
                    dispatch(setSearchPhrase(""));
                    setInputValue("");
                    dispatch(setTodos());
                }} />
            )}
            <FilterButton handleClick={() => {
                const newValue = !isSorted;
                dispatch(setIsSorted(newValue));
                dispatch(setTodos(newValue, inputValue));
            }}>{isSorted ? "Отключить сортировку" : "Отсортировать"}</FilterButton>
            <ConfirmButton disabled={inputValue !== searchPhrase} handleClick={() => {
                dispatch(setTodos(isSorted, inputValue));
                dispatch(setSearchPhrase(inputValue));
            }} />
        </form>
    )
};


export { Search };