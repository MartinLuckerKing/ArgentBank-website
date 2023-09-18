import {
  UPDATE_USERNAME_REQUEST,
  UPDATE_USERNAME_SUCCESS,
  UPDATE_USERNAME_FAILURE,
} from "./actionTypes";

const initialState = {
  userName: "",
  loading: false,
  error: null,
};

const usernameReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERNAME_REQUEST:
      return { ...state, loading: true, error: null };
    case UPDATE_USERNAME_SUCCESS:
      return { ...state, userName: action.payload, loading: false };
    case UPDATE_USERNAME_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default usernameReducer;
