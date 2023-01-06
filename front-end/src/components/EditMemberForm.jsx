import React from "react";
import { putRequestMember } from "../utils/api";


export const EditMemberForm = (props) => {

  const onSubmit = (e) => {
    e.preventDefault()
    let editedUser = {}
    for (let i=0; i<e.target.length; i++) {
      // Name attributes must match casing of underlying database values
      // firstName => firstName
      // NOT first-name => firstName (no bueno)
      editedUser[(e.target[i].name)] = e.target[i].value
    }
    putRequestMember(editedUser._id, editedUser)
    window.location.assign("/member");
  }
  
  return (
    <div className="new-member-form">
      <form onSubmit={onSubmit} method="POST">
        <label htmlFor="email">Email:</label>
        <input id="_id" name="_id" type="hidden" defaultValue={props?.user._id}/>

        <input id="email" name="email" type="email" defaultValue={props?.user.email}/>
        <br/>
        <label htmlFor="firstName">First Name:</label>
        <input id="firstName" name="name.firstName" defaultValue={props?.user.name?.firstName} type="text"/>
        <br/>
        <label htmlFor="lastName">Last Name:</label>
        <input id="lastName" name="name.lastName" defaultValue={props?.user.name?.lastName} type="text"/>
        <br/>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input id="phoneNumber" name="phoneNumber" defaultValue={props?.user.phoneNumber} type="tel"/>
        <br/>
        <label htmlFor="addressLine1">Mailing Address 1:</label>
        <input id="addressLine1" name="mailingAddress.addressLine1" defaultValue={props?.user.mailingAddress?.addressLine1} type="text"/>
        <br/>
        <label htmlFor="addressLine2">Mailing Address 2:</label>
        <input id="addressLine2" name="mailingAddress.addressLine2" defaultValue={props?.user.mailingAddress?.addressLine2} type="text"/>
        <br/>
        <label htmlFor="city">City:</label>
        <input id="city" name="mailingAddress.city" defaultValue={props?.user.mailingAddress?.city} type="text"/>
        <br/>
        <label htmlFor="state">State:</label>
        <input id="state" name="mailingAddress.state" defaultValue={props?.user.mailingAddress?.state} type="text"/>
        <br/>
        <label htmlFor="zipCode">Zip Code:</label>
        <input id="zipCode" name="mailingAddress.zipCode" defaultValue={props?.user.mailingAddress?.zipCode} type="text"/>
        <br/>
        <label htmlFor="country">Country:</label>
        <input id="country" name="mailingAddress.country" defaultValue={props?.user.mailingAddress?.country} type="text"/>
        <br/>
        <label htmlFor="hemaExpirationDate">HEMAA Membership Exp Date:</label>
        <input id="hemaExpirationDate" name="hemaExpirationDate" defaultValue={props?.user.hemaExpirationDate?.slice(0,10)} type="date"/>
        <br/>
        <label htmlFor="subscriptions">Membership Enrollment:</label>
        <select name="subscriptions" id="subscriptions" defaultValue={props?.user.subscriptions}>
          <option value="trial">Trial</option>
          <option value="part-time">Part Time</option>
          <option value="unlimited">Unlimited</option>
        </select>
        <br/>
        <button className="btn btn-danger" type="submit">SAVE</button>
      </form>
    </div>
  )
}
