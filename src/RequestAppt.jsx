import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form";

import "./styling/contact.css";

export default function RequestAppt() {
  return (
    <main id="contact">
      <h1 id="header">Request An Appointment</h1>
      <section id="contactHeader">
        <h3 className="headerTagline">
          For general questions please review our{" "}
          <Link id="reviewLink" to="/faqs">
            FAQs
          </Link>{" "}
          first
        </h3>
      </section>
      <Form />
    </main>
  );
}
