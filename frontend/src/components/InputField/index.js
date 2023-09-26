import React from 'react'

import "./style.css"

export default function InputField({
    divClass, 
    labelFor, 
    typeInput, 
    idInput, 
    text,
    value,      
    onChange,
    disabled}) {

  return (
    <div className={divClass}>
        <label htmlFor={labelFor}>{text}</label>
        <input type={typeInput} id={idInput} value={value} onChange={onChange} disabled={disabled} />
    </div>
  )
}