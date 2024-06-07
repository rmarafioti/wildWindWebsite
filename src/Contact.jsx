import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5she545", "template_rblhmku", form.current, {
        publicKey: "N8iJs0OwqbPvxYuRo",
      })
      .then(
        () => {
          console.log("MESSAGE SENT!");
          e.target.reset();
        },
        (error) => {
          console.log("MESSAGE FAILED", error.text);
        }
      );
  };
  return (
    <main id="contact">
      <h2 id="contactHeader">
        Reach out to us with your questions and inquiries
      </h2>
      <h3 id="headerTagline">review our faqs first</h3>
      <form id="contactForm" ref={form} onSubmit={sendEmail}>
        <h2 id="formHeader">Contact Form</h2>
        <label className="label">Name</label>
        <input className="form" type="text" name="user_name" />
        <label className="label">Email</label>
        <input className="form" type="email" name="user_email" />
        <label className="label">Message</label>
        <textarea id="messageForm" name="message" />
        <input id="formSubmit" type="submit" value="Send" />
      </form>
      <p>
        ADDRESS:
        <a href="https://www.google.com/maps/place/Wild+Wind+Tattoo/@41.9082731,-87.6874096,15z/data=!4m6!3m5!1s0x880fd2bad280228b:0x926cef0a3fd6c3cf!8m2!3d41.9082731!4d-87.6874096!16s%2Fg%2F11bw5xqdp7?entry=ttu">
          {" "}
          1452 N. Western Ave. Chicago, IL 60622
        </a>
      </p>
      <p>
        PHONE:<a href="tel:+7732272027"> 773.227.2027</a>
      </p>
      <h1>
        <a href="mailto:wildwindtattoo@gmail.com">
          <MdOutlineMailOutline />
        </a>
      </h1>
      <div>
        <h1>
          <a href="https://www.instagram.com/wildwindtattoo/?hl=en">
            <FaInstagram />
          </a>
        </h1>
        <h1>
          <a href="https://www.facebook.com/wildwindtattoo/">
            <FaFacebookSquare />
          </a>
        </h1>
      </div>
    </main>
  );
}
