import React from "react";
import { useNavigate } from "react-router-dom";
import { EditMemberForm } from "../components/index";
import { getAuthStatus } from "../utils/api";


export const EditMemberPage = () => {
  let navigate = useNavigate();
  const [loading, setLoading] = React.useState(true)

  const userData = React.useRef()
 // Might have a problem returning the correct user here when multiple users are logged in. 

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
      <div> <EditMemberForm user={userData.current}/></div>
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