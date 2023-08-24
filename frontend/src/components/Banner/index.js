import React from 'react'

import "./style.css"

export default function Banner({
    title, 
    subtitleOne, 
    subtitleTwo, 
    subtitleThree, 
    text })
     {
  return (
    <div className="hero">
        <section className="hero-content">
            <h2 className="sr-only">{title}</h2>
            <p className="subtitle">{subtitleOne}</p>
            <p className="subtitle">{subtitleTwo}</p>
            <p className="subtitle">{subtitleThree}</p>
            <p className="text">{text}</p>
        </section>
      </div>
  )
}
