import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
        <h1 id="successHeader">Payment Recieved!</h1>
        <p className="successTag">
          We appreciate your business! A confirmation email will be sent to:{" "}
          <b id="custEmail">{customerEmail}</b>.{" "}
        </p>
        <p className="successTag" id="bottomTag">
          If you have any questions, please email{" "}
          <a href="mailto:wildwindtattoo@gmail.com">wildwindtattoo@gmail.com</a>
          .
        </p>
        <Link id="returnLink" to="/">
          <h4 id="returnHome">Return Home</h4>
        </Link>
      </section>
    );
  }

  return null;
}
