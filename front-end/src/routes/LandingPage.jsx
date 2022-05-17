import React from "react";
import logo from '../../src/logo.svg';


export const LandingPage = () => {
  return (
    <div className='landing-page'>
      <h1>Landing Page here. All the sword fighting.</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <hr />
      <button onClick={() => (window.location.href = 'http://localhost:3000/login')}>
        Login Page
      </button>
    </div>
    )
}