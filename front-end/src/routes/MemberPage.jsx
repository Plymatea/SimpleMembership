import React from "react";
import { useNavigate } from "react-router-dom";
import { Header, Sidebar, MemberControl } from "../components/index";
import { getAuthStatus, getAllMembers } from "../utils/api";


export const MemberPage = () => {
  let navigate = useNavigate();
  const [loading, setLoading] = React.useState(true)
  const userData = React.useRef()
  const membersList = React.useRef()

  React.useEffect(() => {
      getAuthStatus()  // api call and returns current user status
        .then(({data}) => {  
          userData.current = data
          setTimeout(() => setLoading(false), 750)  
        })
        .then(
            getAllMembers() // api call to return ALL member data from Mongo
              .then(({data}) => {
                membersList.current = data
              })
        )
        .catch((err) => {
          navigate('../login');
          setLoading(false);
        })  
  })

  let display = (
    <div className="member-page">
      <div> <Header user={userData.current}/></div>
      <div className='sidebar'><Sidebar /></div>
      <div className='member-control'><MemberControl memberList={membersList.current}/></div>

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