import { useState } from "react"

export const useInitialValues = () => {
    const [initialData, setInitialData] = useState({
        todos: [],
        options: {
            isSorted: false,
            searchPhrase: "",
            isChangedTodos: false,
        },
    });

    const setTodos = async (url) => {
        const response = await fetch(url);
        const loadedData = await response.json();
        setInitialData(prev => ({ ...prev, todos: loadedData}));
    };

    const setNewTodo = async (url, data) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        setInitialData(prev => ({ ...prev, todos: [...prev.todos, data] }));
    };

    const deleteTodo = async (url, id) => {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
        setInitialData(prev => ({ ...prev, todos: prev.todos.filter((todo) => todo.id !== id) }))
    };

    const updateTodo = async (url, id, data) => {
        await fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        setInitialData(prev => ({ ...prev, todos: prev.todos.map(todo => todo.id === id ? { id, ...data } : todo) }))
    };

    const setSearchPhrase = (value) => {
        setInitialData(prev => ({ ...prev, options: { ...prev.options, searchPhrase: value } }))
    }

    const setIsSorted = (value) => {
        setInitialData(prev => ({ ...prev, options: { ...prev.options, isSorted: value } }));
    };

    const setIsChangedTodos = (value) => {
        setInitialData(prev => ({ ...prev, options: { ...prev.options, isChangedTodos: value } }));
    };

    const getFilteredTodos = (url, isSorted, searchPhrase = '') => {
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
        setTodos(queryString ? `${url}?${queryString}` : url);
    }

    const contextFunctions = {
        setTodos, // установка полностью нового todoList'а, например при запросе с сервера
        setNewTodo, // добавление нового todoItem'а
        deleteTodo, // удаление определённого todoItem'а
        updateTodo, // изменение todoItem'а
        setSearchPhrase, // установка поисковой фразы
        setIsSorted, // изменение параметра сортировки
        setIsChangedTodos, // менялся ли лист, установка нового параметра
        getFilteredTodos, // возвращаем отсортированный список
    };

    return {
        data: initialData,
        functions: contextFunctions,
    };
}