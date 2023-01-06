import React from "react";
import { getAuthStatus } from "../utils/api";

export const SubscriptionPage = () => {
  const [userEmail, setUserEmail] = React.useState("")
  
  async function currentUser() {
    try {
      await Promise.resolve(getAuthStatus())
      .then(response => (setUserEmail(response.data.email)))
    } catch (err)  {
      console.log(err)
    }  
  }

  React.useEffect( () => {
    currentUser()    // eslint-disable-next-line
  },[])  

  return (
    <div className = "stripe-pricing-table">
    <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
    <stripe-pricing-table 
      pricing-table-id="prctbl_1MN3aFLmxGS25FUi15R1QteY"
      publishable-key="pk_test_51M9FkHLmxGS25FUibnpWoBnUlT6JxzyD2H68BRIi5DuWK3SqfjjGWvxz0gPhFBL9YPLN3YiNmbjrByZl9mKbpNlY00OhpEoqvI"
      customer-email={userEmail}
      client_reference_id="cus_N58d6cGvhTQDnr"
    >
    </stripe-pricing-table>
    </div>
    )
} 