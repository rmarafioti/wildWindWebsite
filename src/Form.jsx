import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";

import "./styling/form.css";

export default function Form() {
  const form = useRef();
  const navigate = useNavigate();
  const [messageStatus, setMessageStatus] = useState(null);
  const [validationError, setValidationError] = useState({
    user_name: false,
    user_email: false,
    user_phone: false,
    user_specifics: false,
    user_times: false,
    my_file: false,
  });
  const [fileSizeError, setFileSizeError] = useState(false);
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
    validateField(name, files ? files[0] : value);
    setFileSizeError(false); // Reset file size error on input change
    setIsLoading(false);
  };

  const validateField = (name, value) => {
    let isValid = true;
    switch (name) {
      case "user_name":
        isValid = value.trim() !== "";
        break;
      case "user_email":
        isValid = isValidEmail(value);
        break;
      case "user_phone":
        isValid = isValidPhone(value);
        break;
      case "user_specifics":
        isValid = value.trim() !== "";
        break;
      case "user_times":
        isValid = value.trim() !== "";
        break;
      case "my_file":
        isValid = value && value.size <= 500000; // 500KB limit
        setFileSizeError(!isValid);
        break;
      default:
        break;
    }
    setValidationError((prevErrors) => ({
      ...prevErrors,
      [name]: !isValid,
    }));
  };

  const isFormValid = () => {
    return (
      !validationError.user_name &&
      !validationError.user_email &&
      !validationError.user_phone &&
      !validationError.user_specifics &&
      !validationError.user_times &&
      !fileSizeError
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

    if (!isFormValid()) {
      return;
    }

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
          setValidationError({
            user_name: false,
            user_email: false,
            user_phone: false,
            user_specifics: false,
            user_times: false,
            my_file: false,
          });
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
      {validationError.user_name && (
        <p className="error">Please enter your name.</p>
      )}
      <label className="label">Email*</label>
      <input
        className="form"
        type="email"
        name="user_email"
        value={formValues.user_email}
        onChange={handleInputChange}
        required
      />
      {validationError.user_email && (
        <p className="error">Please enter a valid email address.</p>
      )}
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
      {validationError.user_phone && (
        <p className="error">Please enter a valid phone number.</p>
      )}
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
      {validationError.user_specifics && (
        <p className="error">Please provide specifics of your tattoo.</p>
      )}
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
      {validationError.user_times && (
        <p className="error">Please provide your availability.</p>
      )}
      <label>Attach file:</label>
      <input
        className="form"
        id="file"
        type="file"
        name="my_file"
        onChange={handleInputChange}
      />
      {fileSizeError && (
        <p className="error">
          Attachment file error. The maximum allowed attachments size is 500Kb.
        </p>
      )}
      <label className="label">Additional information</label>
      <textarea
        id="messageForm"
        name="message"
        value={formValues.message}
        onChange={handleInputChange}
        placeholder=""
      />
      <p>*Required</p>
      <input
        id="formSubmit"
        type="submit"
        value={isLoading ? "Sending..." : "Send"}
        disabled-={"true" || isLoading || !isFormValid()}
      />
      {messageStatus === "error" && (
        <p id="errorMessage">Message failed to send. Please try again.</p>
      )}
    </form>
  );
}
