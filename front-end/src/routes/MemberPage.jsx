import React from "react";
import { useNavigate } from "react-router-dom";
import { Header, Sidebar, MemberControl, EditMemberForm } from "../components/index";
import { getAuthStatus, getAllMembers } from "../utils/api";
import hamburger from "../assets/images/hamburger-1-lg.jpg"

export const MemberPage = () => {
  let navigate = useNavigate();
  const [loading, setLoading] = React.useState(true)
  const [user, setUser] = React.useState()
  const [editingUser, setEditingUser] = React.useState()
  const [memberList, setMemberList] = React.useState()

  async function apiCall() {
    try {
      await Promise.all([
        getAuthStatus(),
        getAllMembers()
      ])
      .then(res => {
        setUser(res[0].data)    // currentUser
        setMemberList(res[1].data)  // allMembersList]
        setTimeout(() => setLoading(false), 750)
      })
    } catch (err)  {
      console.log(err)
      navigate('../login');
      setLoading(false);
    }  
  }
  React.useEffect( () => {
    apiCall();
    // eslint-disable-next-line
  },[])

  
  let display = (
    <div className="member-page">
      <div> <Header user={user}/></div>
      <hr />
      <div className='sidebar'><Sidebar /></div>
      <hr />
      <div className='member-control'><MemberControl memberList={memberList} setEditingUser={setEditingUser}/></div>

    </div>    
    )
  
  if (editingUser) {
    display = (
    <div className="member-page">
      <div> <Header user={user}/></div>
      <hr />
      <div className='sidebar'><Sidebar /></div>
      <hr />
      <div className="edit-member-form">
        <EditMemberForm user={editingUser}/>
      </div> 
    </div> 
      
      
    )
  }
  if (loading) {
    display = (
    <div className="member-page-loading">
      <h1>Loading poste...</h1>
      <img src={hamburger} style={{width: "25%"}} className="" alt="logo" />
    </div>
    )
  }

  return display
};