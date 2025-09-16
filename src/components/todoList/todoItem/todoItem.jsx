import { DeleteButton, Input, SaveButton, ResetButton } from './';
import { useContext, useState } from 'react';
import { handleResetInputValue } from '../../../utils';
import { AppContext } from '../../../context';
import { SERVER_URL } from '../../../utils';
import styles from './todoItem.module.scss';


const TodoItem = ({ id, title, completed }) => {
    const [checkboxValue, setCheckboxValue] = useState(completed);
    const [inputValue, setInputValue] = useState(title);
    const { functions } = useContext(AppContext);

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
                ? <ResetButton handleClick={() => handleResetInputValue(setInputValue, title)} /> : ""}
            {(inputValue !== title) || (checkboxValue !== completed)
                ? <SaveButton handleClick={() => {
                    if (inputValue === "") functions.deleteTodo(SERVER_URL, id)
                    else functions.updateTodo(SERVER_URL, id, { completed: checkboxValue, title: inputValue })
                }} /> : ""}
            <DeleteButton handleClick={() => functions.deleteTodo(SERVER_URL, id)} />
        </li>
    )
};

export { TodoItem };