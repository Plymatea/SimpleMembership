import React from "react";
import { useNavigate } from "react-router-dom";
import { NewMemberForm } from "../components/index";
import { getAuthStatus } from "../utils/api";


export const NewMemberFormPage = () => {
  let navigate = useNavigate();
  const [loading, setLoading] = React.useState(true)
  const userData = React.useRef()

  React.useEffect(() => {
      getAuthStatus()  // api call and returns current user status
      .then(({data}) => {  
        userData.current = data
        setTimeout(() => setLoading(false), 750)  
      })
      .catch((err) => {
        navigate('../login');
        setLoading(false);
      })  
  })

  let display = (
    <div className="classes-page">
      <div> <NewMemberForm user={userData.current}/></div>
      <h1>New Member Form </h1>
    </div>    
    )

  // Display if getAuthStatus is still verifying  
  if (loading) {
    display = (
    <div className="classes-page-loading">
      <h1>Loading poste...</h1>
    </div>
    )
  }

  return display
};