import { useSelector } from 'react-redux';
import { getTodos } from '../../redux/selects';
import { TodoItem } from './todoItem';

const TodoList = () => {
    const todos = useSelector(getTodos);
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