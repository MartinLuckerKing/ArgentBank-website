import React from 'react'

import "./style.css"

export default function InputField({
    divClass, 
    labelFor, 
    typeInput, 
    idInput, 
    text}) {

  return (
    <div className={divClass}>
        <label htmlFor={labelFor}>{text}</label>
        <input type={typeInput} id={idInput} />
    </div>
  )
}
