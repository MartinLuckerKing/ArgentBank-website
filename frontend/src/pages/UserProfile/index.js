import React from 'react'
import ButtonEditProfile from "./../../components/Button"
import AccountInformation from '../../containers/AccountInformation'

import "./style.css"

export default function UserProfile() {
  return (
    <main className="main bg-dark">
        <div className="header">
            <h1>Welcome back<br />Tony Jarvis!</h1>
          <ButtonEditProfile buttonStyle="edit-button" action="Edit Name" />
      </div>
      <h2 className="sr-only">Accounts</h2>

      <AccountInformation accountTitle="Argent Bank Checking (x8349)"
                          accountAmount="$2,082.79"
                          accountAmountDescription="Available Balance"/>

      <AccountInformation accountTitle="Argent Bank Savings (x6712)"
                          accountAmount="$$10,928.42"
                          accountAmountDescription="Available Balance"/>  

      <AccountInformation accountTitle="Argent Bank Credit Card (x8349)"
                          accountAmount="$184.30"
                          accountAmountDescription="Current Balance"/>

    </main>
  )
}
