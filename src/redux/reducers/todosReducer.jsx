const initialTodosState = [];

export const todosReducer = (state = initialTodosState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "SET_TODOS": {
            return [
                ...payload,
            ];
        };
        
        case "ADD_NEW_TODO": {
            return [
                ...state,
                payload,
            ];
        };

        case "REMOVE_TODO": {
            return state.filter((element) => element.id !== payload);
        };

        case "RENAME_TODO": {
            return state.map((element) => {
                if (element.id === payload.id) {
                    return {
                        ...element,
                        ...payload
                    }
                } else {
                    return element
                };
            });
        };

        default: {
            return state;
        };
    }
}