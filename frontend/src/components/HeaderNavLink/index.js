import React from 'react'
import { Link } from 'react-router-dom';

import "./style.css"

export default function HeaderNavLink({text, link, icon, onClick}) {
  return (
      <div>
          <Link to={link} onClick={onClick} className="main-nav-item">
              <i className={icon}></i>
              {text}
          </Link>
      </div>
  )
}