import React from "react";
import Accordion from './Accordion'


export const Sidebar = () => {
  return (
    <Accordion>
      <div data-trigger='Financial' data-trigger-when-open='Financial: Sadly important'>
        <p>Financial Link here</p>
      </div>
      <div data-trigger='Memberships' data-trigger-when-open='Memberships: why ships?'>
        <p>Financial Link here</p>
      </div>
      <div data-trigger='Members' data-trigger-when-open='Members: are friends'>
        <p>Members Link here</p>
      </div>
      <div data-trigger='Reports' data-trigger-when-open='Reports: Knowledge == key'>
        <p>Reports Link here</p>
      </div>
      <div data-trigger='Setup' data-trigger-when-open='Setup: you are control'>
        <p>Setup Link here</p>
      </div>
    </Accordion>
  )
}
