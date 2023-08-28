export const persistToken = () => next => action => {
    if (action.type === "LOGIN_SUCCESS") {
        localStorage.setItem('authToken', action.payload.token);
        localStorage.setItem('USERNAME', action.payload.userName);

    }
    return next(action);
};