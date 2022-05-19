import React from "react";
import { Member } from "./Member";


export const MemberControl = (props) => {
  return (
    <div className="member-list">
      <h4>Member Control component</h4>
      <hr />
      {props.memberList.map((member) =>
        <Member 
          email={member.email}
          key={member._id}
          _id={member._id}
        />
      )}
      
    </div>
  )
}
