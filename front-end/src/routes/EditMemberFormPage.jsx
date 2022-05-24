import React from "react";
import { useNavigate } from "react-router-dom";
import { EditMemberForm } from "../components/index";
import { getAuthStatus } from "../utils/api";
import hamburger from "../assets/images/hamburger-1-lg.jpg"


export const EditMemberPage = () => {
  let navigate = useNavigate();
  const [loading, setLoading] = React.useState(true)
  const [user, setUser] = React.useState()
  // const userData = React.useRef()
 // Might have a problem returning the correct user here when multiple users are logged in. 

  React.useEffect(() => {
      getAuthStatus()  // api call and returns current user status
      .then(({data}) => {  
        setUser(data)
        setTimeout(() => setLoading(false), 750)  
      })
      .catch((err) => {
        navigate('../login');
        setLoading(false);
      })  
      // eslint-disable-next-line
  },[])

  let display = (
    <div className="edit-member-form">
      <div> <EditMemberForm user={user}/></div>
      <h1>New Member Form </h1>
    </div>    
    )

  // Display if getAuthStatus is still verifying  
  if (loading) {
    display = (
    <div className="edit-member-form-page-loading">
      <h1>Loading poste...</h1>
      <img src={hamburger} style={{width: "25%"}} className="" alt="logo" />
    </div>
    )
  }

  return display
};