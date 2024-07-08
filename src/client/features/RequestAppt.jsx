import React from "react";
import { Helmet } from "react-helmet-async";
import Form from "./Form";

import "./styles/contact.css";

/**
 *
 * @component RequestAppt features a functional form by way of Form.jsx for a client to request an appointmmet via email
 */
export default function RequestAppt() {
  return (
    <main id="requestContact">
      <Helmet>
        <title>Request Appointmnet Page - wildwindtattoo.com</title>
        <meta
          name="description"
          content="This is the request appointmnet page of wildwindtattoo.com."
        />
        <link rel="canonical" href="/requestappt" />
      </Helmet>
      <h1 id="requestHeader">Request An Appointment</h1>
      <Form />
    </main>
  );
}
