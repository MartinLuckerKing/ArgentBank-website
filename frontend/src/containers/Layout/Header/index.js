import React from 'react'
import Logo from "../../../components/Logo"
import HeaderNavLink from "../../../components/HeaderNavLink"

import "./style.css"

export default function Header() {
  return (
      <nav className="main-nav">
          <Logo />
          <HeaderNavLink text="Sign In" link="/sign-in" icon="fa fa-user-circle"/>
      </nav>
  )
}
