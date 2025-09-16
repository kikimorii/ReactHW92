import { AppContext } from './context';
import { useEffect } from 'react';
import { useInitialValues } from './hooks/useInitialValues';
import { TodoList } from './components/todoList';
import { NewTodoItem } from './components/newTodoItem';
import { Search } from './components/search';
import { SERVER_URL } from './utils';
import styles from './App.module.scss';

export const App = () => {
    const initialValues = useInitialValues();
    const { functions } = initialValues;

    useEffect(() => {
        functions.setTodos(SERVER_URL);
    }, []);

    return (
        <AppContext value={initialValues}>
            <div className={styles.app}>
                <Search />
                <NewTodoItem />
                <TodoList />
            </div>
        </AppContext>
    )
};