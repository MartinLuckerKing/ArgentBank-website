import React from "react";
import Logo from "../../../components/Logo";
import HeaderNavLink from "../../../components/HeaderNavLink";
import { connect } from "react-redux";
import "./style.css";
import { useDispatch } from "react-redux";
import { logout } from "./../../../store/actions/authActions";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

library.add(fab);

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
              icon={faUser}
            />
            <HeaderNavLink
              onClick={handleLogout}
              text="Sign out"
              icon={faRightFromBracket}
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
