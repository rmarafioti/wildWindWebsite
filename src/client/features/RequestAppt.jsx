import React from "react";
import Form from "./Form";

import "./styles/contact.css";

/**
 *
 * @component RequestAppt features a functional form by way of Form.jsx for a client to request an appointmmet via email
 */
export default function RequestAppt() {
  return (
    <main id="requestContact">
      <h1 id="requestHeader">Request An Appointment</h1>
      <Form />
    </main>
  );
}
