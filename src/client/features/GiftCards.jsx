import React from "react";

import CheckoutForm from "./CheckoutForm";

import "./styles/giftcards.css";

/**
 *
 * @component GiftCards features embedded Stripe form from CheckoutForm.jsx for user to purchase a gift certificate at any value
 */
export default function GiftCards() {
  return (
    <main id="giftCards">
      <h1 id="giftCardHeader">GIFT CARDS</h1>
      <CheckoutForm />
    </main>
  );
}
