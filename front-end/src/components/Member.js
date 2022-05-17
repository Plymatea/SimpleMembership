import React from "react";

export const Member = (props) => {
  return (
    <div className="member">
    {props.email} <br/>
    {props._id}
    <hr />
    </div>
  )
}
