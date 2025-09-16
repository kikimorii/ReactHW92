import { ConfirmButton, ResetButton, Input } from './';
import { useState } from 'react';
import { AppContext } from '../../context';
import { useContext } from 'react';
import { SERVER_URL } from '../../utils';
import styles from './newTodoItem.module.scss';

const NewTodoItem = () => {
    const [inputValue, setInputValue] = useState("");
    const { functions } = useContext(AppContext);
    const { setNewTodo } = functions;
    return (
        <div className={styles.form}>
            <Input inputValue={inputValue} setInputValue={setInputValue} />
            {inputValue !== "" ? <ResetButton handleClick={() => setInputValue("")} /> : ""}
            <ConfirmButton
                handleClick={() => {
                    setNewTodo(SERVER_URL, {
                        id: Date.now(),
                        title: inputValue,
                        completed: false,
                    });
                    setInputValue("");
                }}
                isDisable={!inputValue}
            />
        </div>
    )
};

export { NewTodoItem };