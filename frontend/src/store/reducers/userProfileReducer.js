import { FETCH_USER_PROFILE_FAILURE } from "../actions/actionTypes";
import { FETCH_USER_PROFILE_SUCCESS } from "../actions/actionTypes";

const initialState = {
  firstName: null,
  lastName: null,
  error: null,
};

function userProfileReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_PROFILE_SUCCESS:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        error: null,
      };

    case FETCH_USER_PROFILE_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}

export default userProfileReducer;
