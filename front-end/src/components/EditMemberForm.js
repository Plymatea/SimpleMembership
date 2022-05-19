import React from "react";
import { putRequestMember } from "../utils/api";


export const EditMemberForm = (props) => {

  return (
    <div className="new-member-form">
      <form onSubmit={onSubmit} method="POST">
        <label htmlFor="email">Email:</label>
        <input id="_id" name="_id" type="hidden" defaultValue={props?.user._id}/>

        <input id="email" name="email" type="email" defaultValue={props?.user.email}/>
        <br/>
        <label htmlFor="firstName">First Name:</label>
        <input id="firstName" name="firstName" defaultValue={props?.user.firstName} type="text"/>
        <br/>
        <label htmlFor="lastName">Last Name:</label>
        <input id="lastName" name="lastName" defaultValue={props?.user.lastName} type="text"/>
        <br/>
        <label htmlFor="homePhoneNumber">Home Phone Number:</label>
        <input id="homePhoneNumber" name="homePhoneNumber" defaultValue={props?.user.homePhoneNumber} type="tel"/>
        <br/>
        <label htmlFor="mobilePhoneNumber">Mobile Phone Number:</label>
        <input id="mobilePhoneNumber" name="mobilePhoneNumber" defaultValue={props?.user.mobilePhoneNumber} type="tel"/>
        <br/>
        {/* <label htmlFor="address-line1">Mailing Address 1:</label>
        <input id="address-line1" name="address-line1" defaultValue={props?.user.addressLine1} type="text"/>
        <br/>
        <label htmlFor="address-line2">Mailing Address 2:</label>
        <input id="address-line2" name="address-line2" defaultValue={props?.user.addressLine2} type="text"/>
        <br/>
        <label htmlFor="city">City:</label>
        <input id="city" name="city" defaultValue={props?.user.city} type="text"/>
        <br/>
        <label htmlFor="state">State:</label>
        <input id="state" name="state" defaultValue={props?.user.state} type="text"/>
        <br/>
        <label htmlFor="zip-code">Zip Code:</label>
        <input id="zip-code" name="zip-code" defaultValue={props?.user.zipCode} type="text"/>
        <br/>
        <label htmlFor="country">Country:</label>
        <input id="country" name="country" defaultValue={props?.user.country} type="text"/>
        <br/> */}
        <label htmlFor="hemaExpirationDate">HEMAA Membership Exp Date:</label>
        <input id="hemaExpirationDate" name="hemaExpirationDate" defaultValue={props?.user.hemaExpirationDate.slice(0,10)} type="date"/>
        <br/>
        <label htmlFor="membershipStatus">Membership Enrollment:</label>
        <br />
        <input id="trial-membership" name="membershipStatus" value="trial" type="radio" defaultChecked/>
        <label htmlFor="trial-membership">Trial Membership:</label>
        <br />
        <input id="part-time-membership" name="membershipStatus" value="part-time" type="radio"/>
        <label htmlFor="part-time-membership">Part Time Membership:</label>
        <br />
        <input id="unlimited-membership" name="membershipStatus" value="unlimited" type="radio"/>
        <label htmlFor="unlimited-membership">Unlimited Membership:</label>
        <br/>
        <button className="btn btn-danger" type="submit">En Garde!!!</button>
      </form>
    </div>
  )
}

const onSubmit = (e) => {
  e.preventDefault()
  let editedUser = {}
  for (let i=0; i<e.target.length; i++) {
    // Name attributes must match casing of underlying database values
    // firstName => firstName
    // NOT first-name => firstName (no bueno)
    editedUser[(e.target[i].name)] = e.target[i].value
  }
  editedUser.membershipStatus = e.target.membershipStatus.value   // Hacky boo
  putRequestMember(editedUser._id, editedUser)
  window.location.assign("/member");
}

  // The below fetch method works, and I want to save it, but it doesn't make it through the authorization check on the back end. 

  // const URL = "http://localhost:5000/api/user/"
  // const putRequest = async (data) => {
  //   await fetch(URL+data._id, {
  //     // Header for content-type in body must match expected value for data.
  //     headers: { "Content-Type": "application/json" },
  //     method: "PUT",
  //     body: JSON.stringify(data)
  //   })
  //   .then(resp => {
  //     console.log(resp);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }
  // putRequest(editedUser)