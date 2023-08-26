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

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        const { token, user } = data;
        dispatch(loginSuccess({ token, user }));
        localStorage.setItem('authToken', token);
        } catch (error) {
            console.log('non')
        dispatch(loginFailure(error.message));
    }
};
}