import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./style.css";

export default function HeaderNavLink({text, link, icon, onClick}) {
  return (
      <div>
          <Link to={link} onClick={onClick} className="main-nav-item">
              <FontAwesomeIcon icon={icon}/>
              {text}
          </Link>
      </div>
  )
}