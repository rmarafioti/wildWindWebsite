import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form";

import "./contact.css";

export default function RequestAppt() {
  return (
    <main id="requestContact">
      <h1 id="requestHeader">Request An Appointment</h1>
      <Form />
    </main>
  );
}
