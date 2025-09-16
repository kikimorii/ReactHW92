import { SERVER_URL } from '../../utils'

export const setTodos = () => {
    return (dispatch) => {
        fetch(SERVER_URL)
            .then((response) => response.json())
            .then((loadedData) => dispatch({
                type: "SET_TODOS",
                payload: loadedData,
            }));
    };
};

export const addNewTodo = (title) => {
    return (dispatch) => {
        fetch(SERVER_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                completed: false
            })
        }).then((response) => response.json())
            .then((loadedNewTodo) => dispatch({
                type: "ADD_NEW_TODO",
                payload: loadedNewTodo
            }));
    };
};

export const removeTodo = (id) => {
    return (dispatch) => {
        fetch(`${SERVER_URL}/${id}`, {
            method: "DELETE",
        }).then(() => dispatch({
            type: "REMOVE_TODO",
            payload: id,
        }));
    };
};

export const renameTodo = (id, data) => {
    return (dispatch) => {
        fetch(`${SERVER_URL}/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((response) => response.json())
            .then((loadedData) => dispatch({
                type: "RENAME_TODO",
                payload: {
                    id: id,
                    newData: loadedData,
                },
            }));
    }
}