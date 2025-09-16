const initialOptionsState = {
    isSorted: false,
    searchPhrase: "",
    isChangedTodos: false,
}

export const optionsReducer = (state = initialOptionsState, action) => {
    const { type, payload } = action;
    switch (type) {
        // cases...

        default: {
            return state;
        }
    }
}