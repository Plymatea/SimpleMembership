const stripe = require ('stripe')('sk_test_51M9FkHLmxGS25FUi1Vj5tUZSfTkvoRBCNr8kTEONrxzrccvaDZ1m7an1loCbE2PefMCDrclmKflcKV3ZLGl7ZITM00sO3XxiJt')
const asyncHandler = require ('express-async-handler')
const MY_DOMAIN = 'http://localhost:3000/payment'

const createCheckoutSession = asyncHandler(async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: req.body.stripePriceId,
        quantity: 1,
      },
    ],
    //if any of the line_items are subscriptions this must be "subscription"
    mode: req.body.stripePaymentMode, 
    success_url: `${MY_DOMAIN}?success=true`,
    cancel_url: `${MY_DOMAIN}?canceled=true`,
  });
  res.status(303).json({link: session.url});
})

module.exports = createCheckoutSession