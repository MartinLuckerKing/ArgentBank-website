import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SET_TOKEN,
  LOGOUT,
} from "./../actions/actionTypes";

const initialState = {
  isAuthenticated: false,
  token: null,
  loading: false,
  error: null,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGOUT:
      return initialState;
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        loading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}

export default authReducer;
