import React from 'react'

import "./style.css"

export default function TrustIcon({image, altText, subTitle, paragraph}) {
  return (
    <div className="feature-item">
        <img src={image} alt={altText} className="feature-icon" />
        <h3 className="feature-item-title">{subTitle}</h3>
        <p>
        {paragraph}
        </p>
    </div>
  )
}
