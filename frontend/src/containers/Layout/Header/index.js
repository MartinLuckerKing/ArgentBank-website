import React from "react";
import Logo from "../../../components/Logo";
import HeaderNavLink from "../../../components/HeaderNavLink";
import Button from "../../../components/Button";
import { connect } from "react-redux";
import "./style.css";
import { useDispatch } from "react-redux";
import { logout } from "./../../../store/actions/authActions";

function Header({ isAuthenticated }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="main-nav">
      <Logo />
      {isAuthenticated ? (
        <>
          <HeaderNavLink text="Mon Profil" link="/profile" icon="fa fa-user" />
          <Button
            onClick={handleLogout}
            action="Se déconnecter"
            icon="fa fa-out"
          />
        </>
      ) : (
        <>
          <HeaderNavLink
            text="Sign In"
            link="/sign-in"
            icon="fa fa-user-circle"
          />
        </>
      )}
    </nav>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Header);
