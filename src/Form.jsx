import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./styling/form.css";

export default function Form() {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState(null);
  const [validationError, setValidationError] = useState(false);
  const [formValues, setFormValues] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    user_specifics: "",
    user_times: "",
    my_file: null,
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormValues({
      ...formValues,
      [name]: files ? files[0] : value,
    });
    setValidationError(false); // Reset validation error on input change
  };

  const isFormValid = () => {
    const { user_name, user_email, user_phone, user_specifics, user_times } =
      formValues;
    return (
      user_name.trim() !== "" &&
      user_email.trim() !== "" &&
      user_phone.trim() !== "" &&
      user_specifics.trim() !== "" &&
      user_times.trim() !== ""
    );
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      setValidationError(true);
      return;
    }

    emailjs
      .sendForm("service_5she545", "template_rblhmku", form.current, {
        publicKey: "N8iJs0OwqbPvxYuRo",
      })
      .then(
        () => {
          console.log("MESSAGE SENT!");
          setMessageStatus("success"); // Set state to indicate success
          setValidationError(false);
          form.current.reset(); // Directly reset the form
          setFormValues({
            user_name: "",
            user_email: "",
            user_phone: "",
            user_specifics: "",
            user_times: "",
            my_file: null,
            message: "",
          });
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
      <label className="label">Name*</label>
      <input
        className="form"
        type="text"
        name="user_name"
        value={formValues.user_name}
        onChange={handleInputChange}
      />
      <label className="label">Email*</label>
      <input
        className="form"
        type="email"
        name="user_email"
        value={formValues.user_email}
        onChange={handleInputChange}
      />
      <label className="label">Phone*</label>
      <input
        className="form"
        type="text"
        name="user_phone"
        value={formValues.user_phone}
        onChange={handleInputChange}
      />
      <label className="label">Size and location of your tattoo*</label>
      <input
        className="form"
        type="text"
        name="user_specifics"
        value={formValues.user_specifics}
        onChange={handleInputChange}
        placeholder="Ex. palm size on my right bicep"
      />
      <label className="label">
        Days and times you are available to get tattooed*
      </label>
      <input
        className="form"
        type="text"
        name="user_times"
        value={formValues.user_times}
        onChange={handleInputChange}
        placeholder="Ex. weekends after 2pm work best for me"
      />
      <label>Attach file:</label>
      <input
        className="form"
        id="file"
        type="file"
        name="my_file"
        onChange={handleInputChange}
      />
      <label className="label">Additional information</label>
      <textarea
        id="messageForm"
        name="message"
        value={formValues.message}
        onChange={handleInputChange}
        placeholder=""
      />
      <p>
        *Required fields must be filled out in order for your request to be sent
      </p>
      <input
        id="formSubmit"
        type="submit"
        value="Send"
        disabled-={!isFormValid()}
      />
      {messageStatus === "success" && <p id="messageSent">Message Sent!</p>}
      {validationError && (
        <p id="validationError">Please fill out all required fields.</p>
      )}
      {messageStatus === "error" && (
        <p id="errorMessage">Message failed to send. Please try again.</p>
      )}
    </form>
  );
}
