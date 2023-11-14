export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_TODO':
            return [...state, action.payload];
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.title === action.payload.title
                    ? { ...todo, complete: !todo.complete, dateCompleted: !todo.complete ? Date.now() : null }
                    : todo
            );
        case 'DELETE_TODO':
            return state.filter(todo => todo.title !== action.payload.title);
        default:
            return state;
    }
};