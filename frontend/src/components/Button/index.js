import React from 'react'

import "./style.css"

export default function Button({action}) {
  return (
    <div>
      <button className="sign-in-button">{action}</button>
    </div>
  )
}
