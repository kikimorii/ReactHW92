import { ConfirmButton, ResetButton, Input } from './';
import { useState } from 'react';
import styles from './newTodoItem.module.scss';
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../../redux/actions';

const NewTodoItem = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");
    
    return (
        <div className={styles.form}>
            <Input inputValue={inputValue} setInputValue={setInputValue} />
            {inputValue !== "" ? <ResetButton handleClick={() => setInputValue("")} /> : ""}
            <ConfirmButton
                handleClick={() => {
                    dispatch(addNewTodo({
                        id: Date.now(),
                        title: inputValue,
                        completed: false,
                    }));
                    setInputValue("");
                }}
                isDisable={!inputValue}
            />
        </div>
    )
};

export { NewTodoItem };