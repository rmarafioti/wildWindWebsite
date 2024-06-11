import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

import "./styling/contact.css";

export default function Contact() {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5she545", "template_rblhmku", form.current, {
        publicKey: "N8iJs0OwqbPvxYuRo",
      })
      .then(
        () => {
          console.log("MESSAGE SENT!");
          setMessageStatus("success"); // Set state to indicate success

          /*e.target.reset();*/

          form.current.reset(); // Directly reset the form
        },
        (error) => {
          console.log("MESSAGE FAILED", error.text);
          setMessageStatus("error"); // Set state to indicate error
        }
      );
  };
  return (
    <main id="contact">
      <h1 id="header">Contact Us</h1>
      <section id="contactHeader">
        <h3 className="headerTagline">
          Reach out to us with your questions and inquiries
        </h3>

        <Link id="reviewLink" to="/faqs">
          <div id="reviewFaq">review our faqs first</div>
        </Link>
      </section>
      <form id="contactForm" ref={form} onSubmit={sendEmail}>
        <h3>Contact Form</h3>
        <p className="headerTagline">
          Please specify size & location of your desired tattoo as well as days
          of the week you are available to get tattooed in your message.
        </p>
        <label className="label">Name*</label>
        <input className="form" type="text" name="user_name" />
        <label className="label">Email*</label>
        <input className="form" type="email" name="user_email" />
        <label className="label">Message*</label>
        <textarea id="messageForm" name="message" placeholder="" />
        <p id="required">*Required</p>
        <input id="formSubmit" type="submit" value="Send" />
        {messageStatus === "success" && <p id="messageSent">Message Sent!</p>}
        {messageStatus === "error" && (
          <p id="errorMessage">Message failed to send. Please try again.</p>
        )}
      </form>
      <section id="contactInfoContainer">
        <p className="contactInfo">
          ADDRESS:
          <a href="https://www.google.com/maps/place/Wild+Wind+Tattoo/@41.9082731,-87.6874096,15z/data=!4m6!3m5!1s0x880fd2bad280228b:0x926cef0a3fd6c3cf!8m2!3d41.9082731!4d-87.6874096!16s%2Fg%2F11bw5xqdp7?entry=ttu">
            {" "}
            1452 N. Western Ave. Chicago, IL 60622
          </a>
        </p>
        <p className="contactInfo">
          PHONE:<a href="tel:+7732272027"> 773.227.2027</a>
        </p>
        <p className="contactInfo">
          EMAIL:
          <a href="mailto:wildwindtattoo@gmail.com">wildwindtattoo@gmail.com</a>
        </p>
      </section>
    </main>
  );
}
