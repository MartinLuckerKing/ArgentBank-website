import {
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAILURE,
} from "./actionTypes";

export const fetchUserProfile = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      
      const firstName = data.body.firstName;
      const lastName = data.body.lastName;
      const userName = data.body.userName;


      dispatch({
        type: FETCH_USER_PROFILE_SUCCESS,
        payload: {
          firstName: firstName,
          lastName: lastName,
          userName: userName,
        },
      });
    } catch (error) {
      dispatch({ type: FETCH_USER_PROFILE_FAILURE, error: error.toString() });
      
    }
  };
};
