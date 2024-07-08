import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import "./styles/giftcards.css";

/**
 *
 * @component Return features a message to the user when the form on CheckoutForm.jsx is successfully sent
 */
export default function Return() {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");

    fetch(`/session-status?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      });
  }, []);

  if (status === "open") {
    return <Navigate to="/checkout" />;
  }

  if (status === "complete") {
    return (
      <section id="success">
        <Helmet>
          <title>Return Page - wildwindtattoo.com</title>
          <meta
            name="description"
            content="This is the return page of wildwindtattoo.com."
          />
          <link rel="canonical" href="/return" />
        </Helmet>
        <h1 id="successHeader">Payment Recieved!</h1>
        <div id="successContainer">
          <h3 className="successTag">
            We appreciate your business! A confirmation email will be sent to:{" "}
            <b id="custEmail">{customerEmail}</b>.{" "}
          </h3>
          <h3 className="successTag" id="bottomTag">
            If you have any questions, please email{" "}
            <a href="mailto:wildwindtattoo@gmail.com">
              wildwindtattoo@gmail.com
            </a>
            .
          </h3>
        </div>
        <Link id="returnLink" to="/">
          <h4 id="returnHome">Return Home</h4>
        </Link>
      </section>
    );
  }

  return null;
}
