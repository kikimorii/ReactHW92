import { DeleteButton, Input, SaveButton, ResetButton } from './';
import { useState } from 'react';
import styles from './todoItem.module.scss';
import { removeTodo } from '../../../redux/actions';
import { renameTodo } from '../../../redux/actions';
import { useDispatch } from 'react-redux';


const TodoItem = ({ id, title, completed }) => {
    const [checkboxValue, setCheckboxValue] = useState(completed);
    const [inputValue, setInputValue] = useState(title);
    const dispatch = useDispatch();

    return (
        <li className={styles.item}>
            <input
                type="checkbox"
                checked={checkboxValue}
                onChange={({ target }) => setCheckboxValue(target.checked)}
            />
            <Input
                initialInputValue={title}
                inputValue={inputValue}
                setInputValue={setInputValue}
            />
            {(inputValue !== title) || (checkboxValue !== completed)
                ? <ResetButton handleClick={() => {
                    setCheckboxValue(completed);
                    setInputValue(title);
                }} /> : ""}
            {(inputValue !== title) || (checkboxValue !== completed)
                ? <SaveButton handleClick={() => {
                    if (inputValue === "") dispatch(removeTodo(id))
                    else dispatch(renameTodo(id, {completed: checkboxValue, title: inputValue}))
                }} /> : ""}
            <DeleteButton handleClick={() => dispatch(removeTodo(id))} />
        </li>
    )
};

export { TodoItem };