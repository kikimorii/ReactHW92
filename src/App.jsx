import styles from './App.module.scss';
import { Search } from './components/search';
import { NewTodoItem } from './components/newTodoItem';
import { TodoList } from './components/todoList';
import { setTodos } from './redux/actions';
import { useDispatch } from 'react-redux';

export const App = () => {
    const dispatch = useDispatch();
    dispatch(setTodos());
    
    return (
        <div className={styles.app}>
            <Search />
            <NewTodoItem />
            <TodoList />
        </div>
    )
};