import { useContext } from 'react';
import { AppContext } from '../../context';
import { TodoItem } from './todoItem';

const TodoList = () => {
    const { data } = useContext(AppContext);
    const { todos } = data;
    return (
        <ul>
            {todos.map(({ id, title, completed }) => (
                <TodoItem
                    key={id}
                    id={id}
                    title={title}
                    completed={completed}
                />
            ))}
        </ul>
    )
}

export { TodoList }