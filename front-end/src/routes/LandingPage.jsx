import React from "react";
import flute from "../assets/images/flute.png"

export const LandingPage = () => {
  return (
    <div className='landing-page'>
      <h1>Landing Page here. All the sword fighting.</h1>
      {/* <img src={flute} className="App-logo" alt="logo" /> */}
      <img src={flute} className="" alt="logo" />
      <hr />
      <button onClick={() => (window.location.href = 'http://localhost:3000/login')}>
        Login Page
      </button>
    </div>
    )
}