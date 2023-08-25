import React from 'react'
import ButtonTransaction from "../../components/Button"

import "./style.css"

export default function AccountInformation(
    {accountTitle, 
    accountAmount, 
    accountAmountDescription}
    ) {
  return (
    <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{accountTitle}</h3>
          <p className="account-amount">{accountAmount}</p>
          <p className="account-amount-description">{accountAmountDescription}</p>
        </div>
        <ButtonTransaction  container="account-content-wrapper cta"
                            action="View transactions" 
                            buttonStyle ="transaction-button"/>
    </section>
  )
}
