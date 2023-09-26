import React from "react";
import Logo from "../../../components/Logo";
import HeaderNavLink from "../../../components/HeaderNavLink";
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
        <div className="nav-button">
          <>
            <HeaderNavLink
              text="Mon Profil"
              link="/profile"
              icon="fa fa-user"
            />
            <HeaderNavLink
              onClick={handleLogout}
              text="Sign out"
              icon="fa-solid fa-arrow-right-from-bracket"
            />
          </>
        </div>
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
