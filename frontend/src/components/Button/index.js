import React from 'react'

import "./style.css"

export default function Button({container, action, buttonStyle, onClick}) {
  return (
    <div className={container}>
      <button className={buttonStyle} onClick={onClick}>{action}</button>
    </div>
  )
}
