import React from "react";
import { useNavigate } from "react-router-dom";
import { Header, Sidebar, MemberControl } from "../components/index";
import { getAuthStatus, getAllMembers } from "../utils/api";


export const MemberPage = () => {
  let navigate = useNavigate();
  const [loading, setLoading] = React.useState(true)
  const user = React.useRef()
  const memberList = React.useRef()

  React.useEffect( () => {
    async function apiCall() {
      try {
        const results = await Promise.all([
          getAuthStatus(),
          getAllMembers()
        ]);
        user.current = results[0].data    // currentUser
        memberList.current = results[1].data  // allMembersList]
        setTimeout(() => setLoading(false), 750)
      } catch (err)  {
        console.log(err)
        navigate('../login');
        setLoading(false);
      }  
    }

    apiCall();
  })

  
  let display = (
    <div className="member-page">
      <div> <Header user={user.current}/></div>
      <hr />
      <div className='sidebar'><Sidebar /></div>
      <hr />
      <div className='member-control'><MemberControl memberList={memberList.current}/></div>

    </div>    
    )

  if (loading) {
    display = (
    <div className="member-page-loading">
      <h1>Loading poste...</h1>
    </div>
    )
  }

  return display
};