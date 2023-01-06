import React from "react";

export const SubscriptionPage = () => {
    
  return (
    <div className = "stripe-pricing-table">
    <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
    <stripe-pricing-table pricing-table-id="prctbl_1MN3aFLmxGS25FUi15R1QteY"
    publishable-key="pk_test_51M9FkHLmxGS25FUibnpWoBnUlT6JxzyD2H68BRIi5DuWK3SqfjjGWvxz0gPhFBL9YPLN3YiNmbjrByZl9mKbpNlY00OhpEoqvI">
    </stripe-pricing-table>
    </div>
    )
} 