const initialOptionsState = {
    isSorted: false,
    searchPhrase: "",
}

export const optionsReducer = (state = initialOptionsState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "SET_IS_SORTED": {
            return {
                ...state,
                isSorted: !state.isSorted,
            };
        };
        case "SET_SEARCH_PHRASE": {
            return {
                ...state,
                searchPhrase: payload,
            };
        };

        default: {
            return state;
        };
    };
};