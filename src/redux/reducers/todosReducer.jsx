const initialTodosState = [];

export const todosReducer = (state = initialTodosState, action) => {
    const { type, payload } = action;

    switch (type) {
        // cases...
        
        default: {
            return state;
        };
    }
}