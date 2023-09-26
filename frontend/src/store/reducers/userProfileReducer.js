import { FETCH_USER_PROFILE_FAILURE } from "../actions/actionTypes";
import { FETCH_USER_PROFILE_SUCCESS } from "../actions/actionTypes";
import {UPDATE_USERNAME_SUCCESS} from "../actions/actionTypes"

const initialState = {
  firstName: null,
  lastName: null,
  userName: null,
  error: null,
};

function userProfileReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USERNAME_SUCCESS:
      return {
        ...state,
        userName: action.payload,
        error: null,
      };
    case FETCH_USER_PROFILE_SUCCESS:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        userName: action.payload.userName,
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
