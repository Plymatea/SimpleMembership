import React from "react";
import { Accordion } from "./index";
import { NavLink } from "react-router-dom";



export const Sidebar = () => {
  return (
    <React.Fragment>
      <h4> Sidebar component</h4>
      
      <Accordion>
        <div data-trigger='Financial' data-trigger-when-open='Financial: Sadly important'>
          <ul>
            <li>
             <p>Financial Link here</p>
            </li>
          </ul>
        </div>
        <div data-trigger='Memberships' data-trigger-when-open='Memberships: why ships?'>
          <ul>
            <li><NavLink to ="/subscription-new">New Subscriptions</NavLink></li>
            <li><a href="https://billing.stripe.com/p/login/test_14k3fCaqAaut03CeUU" target="_blank" rel="noopener noreferrer">Manage Subscription</a></li>
          </ul>
        </div>
        <div data-trigger='Members' data-trigger-when-open='Members: are friends'>
          <ul>
            <li>
              <p>Members Link here</p>
            </li>
          </ul>
        </div>
        <div data-trigger='Reports' data-trigger-when-open='Reports: Knowledge == key'>
          <ul>
            <li>
              <p>Reports Link here</p>
            </li>
          </ul>
        </div>
        <div data-trigger='Setup' data-trigger-when-open='Setup: you are control'>
          <ul>
            <li>
              <p>Setup Link here</p>
            </li>
          </ul>
        </div>
      </Accordion>
    </React.Fragment>
  )
}
