import React from "react";
import InputField from "./../../components/InputField";
import Button from "../../components/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {updateUsername}  from "./../../store/actions/updateUserName";


function EditUsername() {

    const [username, setUsername] = useState('');
    const dispatch = useDispatch();
  
    const handleInputChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(updateUsername(username));
    };

  return (
<main className="main bg-dark">
    <section className="sign-in-content">
        <i className="fa fa-user-circle edit-profile-icon sign-in-icon"></i>
        <h1>Edit Profile</h1>
        <form>
            <InputField
                divClass="input-wrapper"
                labelFor="Username"
                typeInput="text"
                idInput="Username"
                text="Username"
                onChange={handleInputChange}
            />

            <Button
                container=""
                action="Edit"
                buttonStyle=""
                onClick={handleSubmit}
            />
        </form>
    </section>
</main>
  );
}

export default EditUsername;