import React from 'react'
import Logo from "../../../components/Logo"
import SignIn from "../../../components/SignIn"

import "./style.css"

export default function Header() {
  return (
      <nav className="main-nav">
          <Logo />
          <SignIn />
      </nav>
  )
}
