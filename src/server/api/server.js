require("dotenv").config();
require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
});
require("ignore-styles");

const express = require("express");
const path = require("path");
const fs = require("fs");
const React = require("react");
const { renderToString } = require("react-dom/server");
const { StaticRouter } = require("react-router-dom/server");
const { HelmetProvider } = require("react-helmet-async");
const stripePackage = require("stripe");
const App = require("../../client/App").default;

const app = express();
const stripe = stripePackage(process.env.STRIPE_SECRET_KEY);

app.use(express.json());

app.use(
  express.static(path.resolve(__dirname, "../../../../public")),
  (req, res, next) => {
    console.log(`Serving static file: ${req.path}`);
    next();
  }
);

const YOUR_DOMAIN = "http://localhost:3000";

app.post("/create-checkout-session", async (req, res) => {
  try {
    console.log("Creating checkout session...");
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
    console.log("Retrieving session status...");
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

app.get("/", (req, res) => {
  console.log("Root route accessed...");
  res.send("Server is running and handling requests.");
});

app.get("*", (req, res) => {
  console.log("SSR route accessed...");
  const context = {};
  const helmetContext = {};

  const appString = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;

  const indexFile = path.resolve("./public/index.html");
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }

    const html = data
      .replace('<div id="root"></div>', `<div id="root">${appString}</div>`)
      .replace("<title>Wild Wind Tattoo</title>", helmet.title.toString())
      .replace(
        '<meta name="description" content="This is the home page of wildwindtattoo.com." data-rh="true" />',
        helmet.meta.toString()
      );

    console.log("Helmet Title:", helmet.title.toString());
    console.log("Helmet Meta:", helmet.meta.toString());
    console.log("Original HTML:", data);
    console.log("Final HTML:", html);

    return res.send(html);
  });
});

app.listen(4242, () => console.log("Running on port 4242"));
