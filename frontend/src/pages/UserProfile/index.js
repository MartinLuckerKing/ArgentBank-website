import React from "react";
import { useEffect } from "react";
import ButtonEditProfile from "./../../components/Button";
import AccountInformation from "../../containers/AccountInformation";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserProfile } from "./../../store/actions/fetchUserProfile";
import { Link } from "react-router-dom";
import "./style.css";

export default function UserProfile() {
  const firstName = useSelector((state) => state.profile.firstName);
  const lastName = useSelector((state) => state.profile.lastName);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {firstName} {lastName}
        </h1>
        <Link to="/edit">
          <ButtonEditProfile
            to={"/edit"}
            buttonStyle="edit-button"
            action="Edit Name"
          />
        </Link>
      </div>
      <h2 className="sr-only">Accounts</h2>

      <AccountInformation
        accountTitle="Argent Bank Checking (x8349)"
        accountAmount="$2,082.79"
        accountAmountDescription="Available Balance"
      />

      <AccountInformation
        accountTitle="Argent Bank Savings (x6712)"
        accountAmount="$10,928.42"
        accountAmountDescription="Available Balance"
      />

      <AccountInformation
        accountTitle="Argent Bank Credit Card (x8349)"
        accountAmount="$184.30"
        accountAmountDescription="Current Balance"
      />
    </main>
  );
}
