import React from "react";

export const Member = (props) => {
  return (
    <div className="member">
      <h5>member component</h5>
    {props.member._id} <br />
    {props.member.fullName} <br />
    {props.member.email} <br/>
    <button onClick={() => props.setEditingUser(props.member)}> Edit </button> 
    <hr />
    </div>
  )
}
