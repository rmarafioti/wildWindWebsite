import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";

import "./styling/form.css";

export default function Form() {
  const form = useRef();
  const navigate = useNavigate();
  const [messageStatus, setMessageStatus] = useState(null);
  const [validationError, setValidationError] = useState(false);
  const [fileSizeError, setFileSizeError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
    setFileSizeError(false); // Reset file size error on input change
    setEmailError(false); // Reset email error on input change
    setPhoneError(false); // Reset phone error on input change
    setIsLoading(false);
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

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone) => {
    const phoneDigits = phone.replace(/\D/g, ""); // Remove all non-digit characters
    return phoneDigits.length === 10;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    let formValid = true;

    /*if (!isFormValid()) {
      setValidationError(true);
      formValid = false;
    }

    if (!isValidEmail(formValues.user_email)) {
      setEmailError(true);
      formValid = false;
    }

    if (!isValidPhone(formValues.user_phone)) {
      setPhoneError(true);
      formValid = false;
    }

    if (!formValid) {
      return;
    }*/

    setIsLoading(true);

    emailjs
      .sendForm("service_5she545", "template_rblhmku", form.current, {
        publicKey: "N8iJs0OwqbPvxYuRo",
      })
      .then(
        () => {
          console.log("MESSAGE SENT!");
          setMessageStatus("success");
          setIsLoading(false);
          setValidationError(false);
          setEmailError(false);
          setPhoneError(false);
          setFileSizeError(false);
          form.current.reset();
          setFormValues({
            user_name: "",
            user_email: "",
            user_phone: "",
            user_specifics: "",
            user_times: "",
            my_file: null,
            message: "",
          });

          navigate("/requestsent");
        },
        (error) => {
          console.log("MESSAGE FAILED", error.text);
          if (error.text.includes("Attachments size limit")) {
            setFileSizeError(true);
          } else {
            setMessageStatus("error");
          }
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
      /*{onFocus={handleFocus}}*/
    >
      <label className="label">Name*</label>
      <input
        className="form"
        type="text"
        name="user_name"
        value={formValues.user_name}
        onChange={handleInputChange}
        required
      />
      <label className="label">Email*</label>
      <input
        className="form"
        type="email"
        name="user_email"
        value={formValues.user_email}
        onChange={handleInputChange}
        required
      />
      <label className="label">Phone*</label>
      <InputMask
        className="form"
        type="text"
        name="user_phone"
        mask="(999) 999-9999"
        value={formValues.user_phone}
        onChange={handleInputChange}
        required
      />
      <label className="label">Size and location of your tattoo*</label>
      <input
        className="form"
        type="text"
        name="user_specifics"
        value={formValues.user_specifics}
        onChange={handleInputChange}
        placeholder="Ex. palm size on my right bicep"
        required
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
        required
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
        value={isLoading ? "Sending..." : "Send"}
        disabled-={"true" || isLoading}
      />
      {messageStatus === "success"}
      {validationError && (
        <p id="validationError">Please fill out all required fields.</p>
      )}
      {emailError && <p id="emailError">Please enter a valid email address.</p>}
      {phoneError && <p id="phoneError">Please enter a valid phone number.</p>}
      {fileSizeError && (
        <p id="fileSizeError">
          Attachment file error. The maximum allowed attachments size is 500Kb.
        </p>
      )}
      {messageStatus === "error" && (
        <p id="errorMessage">Message failed to send. Please try again.</p>
      )}
    </form>
  );
}
