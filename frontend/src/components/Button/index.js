import React from 'react'

import "./style.css"

export default function Button({container, action, buttonStyle}) {
  return (
    <div className={container}>
      <button className={buttonStyle}>{action}</button>
    </div>
  )
}
