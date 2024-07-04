// Stripe API
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const express = require("express");
const fs = require("fs");
const path = require("path");
const { renderToString } = require("react-dom/server");
const { StaticRouter } = require("react-router-dom/server");
const { HelmetProvider } = require("react-helmet-async");
const React = require("react");
const App = require("./src/client/App").default;

const app = express();
app.use(express.static(path.resolve(__dirname, "public")));

const YOUR_DOMAIN = "http://localhost:3000";

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: "price_1PLr3XClew7ziQf56qa9QbQM",
        quantity: 1,
      },
    ],
    mode: "payment",
    return_url: `${YOUR_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
  });

  res.send({ clientSecret: session.client_secret });
});

app.get("/session-status", async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

  res.send({
    status: session.status,
    customer_email: session.customer_details.email,
  });
});

app.get("/*", (req, res) => {
  const helmetContext = {};
  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;

  const indexFile = path.resolve(__dirname, "public/index.html");
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }

    const html = data
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
      .replace("<title>My App</title>", helmet.title.toString())
      .replace(
        '<meta name="description" content="My App">',
        helmet.meta.toString()
      );

    return res.send(html);
  });
});

app.listen(4242, () => console.log("Running on port 4242"));
