const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = (app) => {
  app.post("/api/stripe/add-account", (req, res) => {
    /* stripe.charges.create({
            amount: 5000,
            currency: 'usd',
            description: "Add employee account",
            source: req.body.id
        }) */
    // do something with this charge
    //find out about the subscription
  });

  app.get(
    "/api/stripe",

    // create the customer
    (req, res, next) => {
      const token = req.body.id;

      stripe.customers.create({
        name: req.user.familyName,
      });

      next();
    }
  );

  // create a subscription
  app.post("/api/create-checkout-session", (req, res) => {
    const { priceId } = req.body;

    // See https://stripe.com/docs/api/checkout/sessions/create
    // for additional parameters to pass.
    const session = stripe.checkout.sessions
      .create({
        mode: "subscription",
        customer: req.user.cust_Id,
        payment_method_types: ["card"],
        line_items: [
          {
            price: priceId,
            // For metered billing, do not pass quantity
            quantity: 1,
          },
        ],
        // {CHECKOUT_SESSION_ID} is a string literal; do not change it!
        // the actual Session ID is returned in the query parameter when your customer
        // is redirected to the success page.
        success_url:
          "http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}",
        cancel_url: "http://localhost:3000/failure",
      })
      .then((response) => res.send({ sessionId: response.id }));
  });

  app.get("/api/customer-portal", requireLogin, (req, res) => {
    const returnUrl = "http://localhost:3000/dashboard";
    console.log(returnUrl);
    console.log("user", req.user.cust_Id);
    const portalsession = stripe.billingPortal.sessions
      .create({
        customer: req.user.cust_Id,
        return_url: returnUrl,
      })
      .then((portalPromise) => {
        res.redirect(portalPromise.url);
      });
  });
};
