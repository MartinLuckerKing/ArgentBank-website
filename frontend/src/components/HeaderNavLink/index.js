import React from 'react'
import { Link } from 'react-router-dom';

import "./style.css"

export default function HeaderNavLink({text, link, icon}) {
  return (
      <div>
          <Link to={link} className="main-nav-item">
              <i className={icon}></i>
              {text}
          </Link>
      </div>
  )
}