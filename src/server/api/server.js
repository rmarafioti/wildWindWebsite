/*WORKING CODE*/
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.json()); // To parse JSON bodies

const YOUR_DOMAIN = "http://localhost:3000";

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      line_items: [
        {
          price: "price_1PLr3XClew7ziQf56qa9QbQM",
          quantity: 1,
        },
      ],
      mode: "payment",
      return_url: `${YOUR_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
    });

    res.json({ clientSecret: session.client_secret });
  } catch (error) {
    console.error("Error creating Stripe checkout session:", error);
    res.status(500).json({ error: error.message });
  }
});

app.get("/session-status", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(
      req.query.session_id
    );
    res.json({
      status: session.status,
      customer_email: session.customer_details.email,
    });
  } catch (error) {
    console.error("Error retrieving Stripe session:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(4242, () => console.log("Running on port 4242"));
