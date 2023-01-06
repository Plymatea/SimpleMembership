import axios from 'axios'
import { handleError } from './utils';

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

// NOT NEEDED ANY LONGER DUE TO PRICING TABLE. WANT TO KEEP FOR REFERENCE LATER. 
// export function callStripeCheckoutApi(product) {
//     fetch(`http://localhost:5000/api/payment/create-checkout-session`, {
//       method: 'POST',
//       headers: new Headers({
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       }),
//       body: JSON.stringify(product),
//       redirect: 'follow'
//     })
//     .then(handleError)
//     .then((res) => res.json())
//     .then((data) => window.location.assign(`${data.link}`))
//     .catch(console.log)
//   }
