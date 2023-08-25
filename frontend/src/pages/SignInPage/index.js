import React from 'react'
import ButtonSignIn from "./../../components/Button"
import InputField from "./../../components/InputField"

import "./style.css"

export default function SignInPage() {
  return (
    <main className="main bg-dark">
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form>

              <InputField divClass="input-wrapper" 
                          labelFor="username"
                          typeInput="text"
                          idInput="username"
                          text="Username" />

              <InputField divClass="input-wrapper" 
                          labelFor="password"
                          typeInput="password"
                          idInput="password"
                          text="Password" />
                          
              <InputField divClass="input-remember" 
                          labelFor="remember-me"
                          typeInput="checkbox"
                          idInput="remember-me"
                          text="Remember me" />
   
              <ButtonSignIn action ="Sign In" />
              
            </form>
        </section>
    </main>
);
}