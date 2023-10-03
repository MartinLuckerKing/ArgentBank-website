import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import ButtonSignIn from "./../../components/Button";
import InputField from "./../../components/InputField";
import { loginUser } from "../../store/actions/authActions";

import "./style.css";

export default function SignInPage() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials));
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          
          <InputField
            divClass="input-wrapper"
            labelFor="email"
            typeInput="text"
            idInput="email"
            text="Email"
            value={credentials.email}
            onChange={handleChange}
          />

          <InputField
            divClass="input-wrapper"
            labelFor="password"
            typeInput="password"
            idInput="password"
            text="Password"
            value={credentials.password}
            onChange={handleChange}
          />

          <InputField
            divClass="input-remember"
            labelFor="remember-me"
            typeInput="checkbox"
            idInput="remember-me"
            text="Remember me"
          />

          <ButtonSignIn
            container=""
            buttonStyle="sign-in-button"
            action="Sign In"
            onClick={handleSubmit}
          />
          
        </form>
      </section>
    </main>
  );
}
