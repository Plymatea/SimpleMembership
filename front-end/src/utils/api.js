import axios from 'axios'

const CREDENTIALS = {
  withCredentials: true,
};

export const getAuthStatus = () => 
  axios.get('http://localhost:5000/api/auth/status', CREDENTIALS)

export const getAllMembers = () =>
  axios.get('http://localhost:5000/api/user', CREDENTIALS)

export const createRequestMember = (id, user) =>
  axios.put(`http://localhost:5000/api/user/${id}`, user, CREDENTIALS)
  
export const putRequestMember = (id, user) =>
  axios.put(`http://localhost:5000/api/user/${id}`, user, CREDENTIALS)

export const deleteRequestMember = (id) =>
  axios.delete(`http://localhost:5000/api/user/${id}`, CREDENTIALS)
