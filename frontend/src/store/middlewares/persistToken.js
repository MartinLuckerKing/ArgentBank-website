export const persistToken = store => next => action => {
    if (action.type === "LOGIN_SUCCESS") {
        localStorage.setItem('TOKEN', action.token);
    }
    return next(action);
};