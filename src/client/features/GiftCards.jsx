import React from "react";
import { Helmet } from "react-helmet-async";
import CheckoutForm from "./CheckoutForm";

import "./styles/giftcards.css";

/**
 *
 * @component GiftCards features embedded Stripe form from CheckoutForm.jsx for user to purchase a gift certificate at any value
 */
export default function GiftCards() {
  return (
    <main id="giftCards">
      <Helmet>
        <title>Gift Cards Page - wildwindtattoo.com</title>
        <meta
          name="description"
          content="This is the gift cards page of wildwindtattoo.com."
        />
      </Helmet>
      <h1 id="giftCardHeader">GIFT CARDS</h1>
      <CheckoutForm />
    </main>
  );
}
