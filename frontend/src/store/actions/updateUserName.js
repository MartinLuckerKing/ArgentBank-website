import {
  UPDATE_USERNAME_REQUEST,
  UPDATE_USERNAME_SUCCESS,
  UPDATE_USERNAME_FAILURE,
} from "./actionTypes";

export const updateUsernameRequest = () => ({
  type: UPDATE_USERNAME_REQUEST,
});

export const updateUsernameSuccess = (username) => ({
  type: UPDATE_USERNAME_SUCCESS,
  payload: username,
});

export const updateUsernameFailure = (error) => ({
  type: UPDATE_USERNAME_FAILURE,
  error,
});

export const updateUsername = (newUsername) => {
  return async (dispatch) => {
    dispatch(updateUsernameRequest());
    console.log(JSON.stringify({ userName: newUsername }));
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userName: newUsername }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const currentUser = data.body.userName;
      localStorage.setItem("USERNAME", currentUser);
      console.log("Dispatching update with username:", data.body.userName);
      console.log(dispatch(updateUsernameSuccess(data.body.userName)));
    } catch (error) {
      dispatch(updateUsernameFailure(error.toString()));
    }
  };
};
