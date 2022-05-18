import axios from 'axios'

const CREDENTIALS = {
  withCredentials: true,
};

export const getAuthStatus = () => 
  axios.get('http://localhost:5000/api/auth/status', CREDENTIALS)

export const getAllMembers = () =>
  axios.get('http://localhost:5000/api/user', CREDENTIALS)

export const putRequestMember = (user) =>
  // console.log("axios id:" + id)
  axios.put(`http://localhost:5000/api/user/${user._id}`, user, CREDENTIALS)