import React from "react";



export const Header = (props) => {
  return (
    <div className="header">
      <h4> Header component</h4>
      <h6>Simple Membership</h6>
      <h4>NW Armizare (Fior di Battaglia)</h4>
      <h6>{props.user.email}</h6>
    </div>
  )
}
