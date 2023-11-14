export const userReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
            return { user: action.username };
        case 'LOGOUT':
            return { user: null };
        default:
            return state;
    }
};