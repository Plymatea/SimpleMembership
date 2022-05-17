import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { getAuthStatus } from "../utils/api";


export const MemberPage = () => {
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
    <div className="member-page">
      <div> <Header user={userData.current}/></div>
      <div className='sidebar'><Sidebar /></div>
      <h1>Member Page</h1>
    </div>    
    )

  // Display is getAuthStatus is still verifying  
  if (loading) {
    display = (
    <div className="member-page-loading">
      <h1>Loading poste...</h1>
    </div>
    )
  }

  return display
};