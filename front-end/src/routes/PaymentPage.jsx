import React from "react";
import { callStripeCheckoutApi } from "../utils/api";

export const PaymentPage = () => {
    
  return (
      <section>
        <div className="product">
          <img
            src="https://i.imgur.com/EHyR2nP.png"
            alt="The cover of Stubborn Attachments"
          />
          <div className="description">
          <h3>Weekly Participation</h3>
          <h5>$20.00 / Month</h5>
          </div>
          <button type='button' onClick={ () => {callStripeCheckoutApi(
            {
              stripePriceId: 'price_1MKDnALmxGS25FUiwQJrX1hT', 
              stripePaymentMode: 'subscription'
            }
          )}}>
            Checkout
          </button>
        </div>
      </section>
    )
} 