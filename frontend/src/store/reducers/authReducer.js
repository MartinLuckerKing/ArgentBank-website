import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from './../actions/actionTypes';

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
    loading: false,
    error: null
};

function authReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token,
                loading: false
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
}

export default authReducer;