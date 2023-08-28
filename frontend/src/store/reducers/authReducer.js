import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SET_TOKEN,
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
        case SET_TOKEN:
            return {
        ...state,
        token: action.payload,
        isAuthenticated: true // Assumant que la présence d'un token signifie une authentification
    };
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
                username: action.payload.username,
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