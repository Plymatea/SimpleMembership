import React from "react";

export const LoginPage = () => {
  return (
    <div>
      <div>Login Page</div>
      <button onClick={() => (window.location.href = 'http://localhost:5000/api/auth/discord')}>
        Login with Discord
      </button>
    </div>
  )
};