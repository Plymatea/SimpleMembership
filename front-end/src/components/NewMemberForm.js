import React from "react";
import { putRequestMember } from "../utils/api";

const onSubmit = (e) => {
  e.preventDefault();
console.log(typeof e.target)
  // putRequestMember({
  //   _id: e.target._id.value,

  // })
}

export const NewMemberForm = (props) => {
  return (
    <div className="new-member-form">
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email:</label>
        <input id="_id" name="_id" type="hidden" defaultValue={props?.user._id}/>

        <input id="email" name="email" type="email" defaultValue={props?.user.email}/>
        <br/>
        <label htmlFor="first-name">First Name:</label>
        <input id="first-name" name="first-name" defaultValue={props?.user.firstName} type="text"/>
        <br/>
        <label htmlFor="last-name">Last Name:</label>
        <input id="last-name" name="last-name" defaultValue={props?.user.lastName} type="text"/>
        <br/>
        <label htmlFor="home-phone">Home Phone Number:</label>
        <input id="home-phone" name="home-phone" defaultValue={props?.user.homePhoneNumber} type="tel"/>
        <br/>
        <label htmlFor="mobile-phone">Mobile Phone Number:</label>
        <input id="mobile-phone" name="mobile-phone" defaultValue={props?.user.mobilePhoneNumber} type="tel"/>
        <br/>
        <label htmlFor="address-line1">Mailing Address 1:</label>
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
        <br/>
        <label htmlFor="heamaa-date">HEMAA Membership Exp Date:</label>
        <input id="heamaa-date" name="heamaa-date" defaultValue={props?.user.hemaExpirationDate} type="date"/>
        <br/>
        <label htmlFor="membership-type">Membership Enrollment:</label>
        <br />
        <input id="trial-membership" name="membership-type" value="trial" type="radio" defaultChecked/>
        <label htmlFor="trial-membership">Trial Membership:</label>
        <br />
        <input id="part-time-membership" name="membership-type" value="part-time" type="radio"/>
        <label htmlFor="part-time-membership">Part Time Membership:</label>
        <br />
        <input id="unlimited-membership" name="membership-type" value="unlimited" type="radio"/>
        <label htmlFor="unlimited-membership">Unlimited Membership:</label>
        <br/>
        <button className="btn btn-danger" type="submit">En Garde!!!</button>
      </form>
    </div>
  )
}
