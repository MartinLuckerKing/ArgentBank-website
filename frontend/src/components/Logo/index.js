import React from 'react'
import logo from "./../../img/argentBankLogo.png"

import "./style.css"

export default function Logo() {
  return (
    <div>
        <a className="main-nav-logo" href="./index.html">
            <img
                className="main-nav-logo-image"
                src={logo}
                alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
        </a>
    </div>
  )
}
