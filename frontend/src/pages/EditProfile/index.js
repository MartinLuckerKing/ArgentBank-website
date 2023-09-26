import React, { useEffect } from "react";
import InputField from "./../../components/InputField";
import Button from "../../components/Button";
import { fetchUserProfile } from "../../store/actions/fetchUserProfile";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUsername } from "./../../store/actions/updateUserName";

import "./style.css"

function EditUsername() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const firstNameFromState = useSelector((state) => state.profile.firstName);
  const lastNameFromState = useSelector((state) => state.profile.lastName);
  const userNameFromState = useSelector((state) => state.profile.userName);

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };
  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  const { firstName, lastName } = useSelector((state) => state.profile || {});
  console.log(firstName, lastName);
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
            labelFor="FirstName"
            typeInput="text"
            idInput="FirstName"
            text="Firstname"
            value={firstNameFromState}
            onChange={handleInputChange}
            disabled={true}
          />

          <InputField
            divClass="input-wrapper"
            labelFor="LastName"
            typeInput="text"
            idInput="LastName"
            text="Lastname"
            value={lastNameFromState}
            onChange={handleInputChange}
            disabled={true}
          />

          <InputField
            divClass="input-wrapper"
            labelFor="UserName"
            typeInput="text"
            idInput="UserName"
            text="Current username"
            value={userNameFromState}
            onChange={handleInputChange}
            disabled={true}
          />

          <InputField
            divClass="input-wrapper"
            labelFor="Username"
            typeInput="text"
            idInput="Username"
            text="Username"
            onChange={handleInputChange}
          />
        <div className="flex">
          <Button
            container=""
            action="Edit"
            buttonStyle="edit-button"
            onClick={handleSubmit}
          />
          <Button
            container=""
            action="Cancel"
            buttonStyle="edit-button"
            link="/profile"
          />
        </div>
        </form>
      </section>
    </main>
  );
}

export default EditUsername;
