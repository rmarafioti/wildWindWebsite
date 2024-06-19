import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
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

          form.current.reset(); // Directly reset the form
        },
        (error) => {
          console.log("MESSAGE FAILED", error.text);
          setMessageStatus("error"); // Set state to indicate error
        }
      );
  };

  return (
    <form
      id="contactForm"
      ref={form}
      onSubmit={sendEmail}
      encType="multipart/form-data"
      method="post"
    >
      <h3>Contact Form</h3>
      <p className="headerTagline">
        Please specify size & location of your desired tattoo as well as days of
        the week you are available to get tattooed in your message.
      </p>
      <label className="label">Name*</label>
      <input className="form" type="text" name="user_name" />
      <label className="label">Email*</label>
      <input className="form" type="email" name="user_email" />
      <label className="label">Phone</label>
      <input className="form" type="text" name="user_phone" />
      <label className="label">Size and location of your tattoo</label>
      <input
        className="form"
        type="text"
        name="user_specifics"
        placeholder="Ex. palm size on my right bicep"
      />
      <label className="label">
        Days and times you are availble to get tattooed
      </label>
      <input
        className="form"
        type="text"
        name="user_times"
        placeholder="Ex. weekends after 2pm work best for me"
      />
      <label>Attach file:</label>
      <input type="file" name="my_file" />
      <label className="label">Message*</label>
      <textarea id="messageForm" name="message" placeholder="" />

      <p id="required">*Required</p>
      <input id="formSubmit" type="submit" value="Send" />
      {messageStatus === "success" && <p id="messageSent">Message Sent!</p>}
      {messageStatus === "error" && (
        <p id="errorMessage">Message failed to send. Please try again.</p>
      )}
    </form>
  );
}
