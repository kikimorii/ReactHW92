import { SERVER_URL } from '../../utils'

export const addNewTodo = (data) => {
    return (dispatch) => {
        fetch(SERVER_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
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
                payload: loadedData,
            }));
    };
};

export const setTodos = (isSorted = false, searchPhrase = "") => {
    return (dispatch) => {
        if (!isSorted && !searchPhrase.trim()) {
            fetch(SERVER_URL)
                .then((response) => response.json())
                .then((loadedData) => dispatch({
                    type: "SET_TODOS",
                    payload: loadedData,
                }));
        } else {
            const params = new URLSearchParams();

            const trimmed = searchPhrase.trim();
            if (trimmed) {
                params.set("title_like", trimmed);
            }

            if (isSorted) {
                params.set("_sort", "title");
                params.set("_order", "asc");
            }

            const queryString = params.toString();
            fetch(`${SERVER_URL}?${queryString}`)
                .then((response) => response.json())
                .then((loadedData) => dispatch({
                    type: "SET_TODOS",
                    payload: loadedData,
                }));
        };
    };
};

export const setSearchPhrase = (value) => ({
    type: "SET_SEARCH_PHRASE",
    payload: value,
});

export const setIsSorted = (value) => ({
    type: "SET_IS_SORTED",
    payload: value,
});