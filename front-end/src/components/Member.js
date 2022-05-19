import React from "react";

export const Member = (props) => {
  return (
    <div className="member">
      <h5>member component</h5>
    {props.email} <br/>
    {props._id}
    <hr />
    </div>
  )
}
