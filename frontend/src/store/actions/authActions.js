import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from './actionTypes';

export function loginRequest() {
    return { type: LOGIN_REQUEST };
}

export function loginSuccess(payload) {
    return { type: LOGIN_SUCCESS, payload };
}

export function loginFailure(error) {
    return { type: LOGIN_FAILURE, error };
    }

export function logout() {
    localStorage.clear();
    return { type: LOGOUT };
}

export function loginUser(credentials) {
    return async dispatch => {
        dispatch(loginRequest());

        try {
            const response = await fetch('http://localhost:3001/api/v1/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials)
            });

            const data = await response.json();
            const { token } = data.body;

            localStorage.setItem('authToken', token);

            dispatch(loginSuccess({ token }));
        } catch (error) {
            dispatch(loginFailure(error.message));
        }
    };
}