import styles from './App.module.scss';
import { Search } from './components/search';
import { NewTodoItem } from './components/newTodoItem';
import { TodoList } from './components/todoList';
import { setTodos } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getIsSorted, getSearchPhrase } from './redux/selects';

export const App = () => {
    const dispatch = useDispatch();
    dispatch(setTodos());
    const isSorted = useSelector(getIsSorted);
    const searchPhrase = useSelector(getSearchPhrase);
    const hasFiltered = isSorted || searchPhrase.trim().length > 0;

    return (
        <div className={styles.app}>
            <Search />
            {!hasFiltered ? <NewTodoItem /> : ""}
            <TodoList />
        </div >
    )
};