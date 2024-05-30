import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Home() {
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
    <>
      <h1>HOME</h1>
      <h2>Contact Form</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </>
  );
}
