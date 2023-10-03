import React from 'react'
import { Link } from 'react-router-dom';


import "./style.css"

export default function Button({container, action, buttonStyle, onClick, link}) {
  
  const ButtonElement = (
    <button className={buttonStyle} onClick={onClick}>{action}</button>
  );

  return (
    <div className={container}>
      {link ? <Link to={link}>{ButtonElement}</Link> : ButtonElement}
    </div>
  );
}