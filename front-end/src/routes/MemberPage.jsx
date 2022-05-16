import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuthStatus } from "../utils/api";


export const MemberPage = () => {
let navigate = useNavigate()
  React.useEffect(() => {
    getAuthStatus()
      .then(({ data }) => {
      console.log(data);
      })
      .catch((err) => {
        console.log(err);
        navigate('../login');
      })  
  })
  return (
    <div>
      <div>Member Page</div>
    </div>
  )
};