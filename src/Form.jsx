import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";

import "./styling/form.css";

export default function Form() {
  const inputValidationError = {
    user_name: false,
    user_email: false,
    user_phone: false,
    user_size: false,
    user_location: false,
    user_times: false,
    my_file: false,
  };

  const inputForm = {
    user_name: "",
    user_email: "",
    user_phone: "",
    user_size: "",
    user_location: "",
    user_times: "",
    my_file: null,
    message: "",
  };

  const form = useRef();
  const navigate = useNavigate();
  const [messageStatus, setMessageStatus] = useState(null);
  const [validationError, setValidationError] = useState(inputValidationError);
  const [fileSizeError, setFileSizeError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState(inputForm);

  const suggestedSizes = [
    "TINY: I want my tattoo as small as it can be",
    "SMALL: I want my tattoo around palm size",
    "MEDIUM: I want my tattoo hand size",
    "LARGE: I want my tattoo to fill a good portion of the area it is on",
    "GOING BIG!: I want large scale work, a backpiece, full sleeve, etc",
  ];

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    const newValue = files ? files[0] : value;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: newValue,
    }));

    validateField(name, newValue);
    setFileSizeError(false); // Reset file size error on input change
    setIsLoading(false);
  };

  const validateField = (field, value) => {
    let isValid = true;
    switch (field) {
      case "user_name":
        isValid = value.trim() !== "";
        break;
      case "user_email":
        isValid = isValidEmail(value);
        break;
      case "user_phone":
        isValid = isValidPhone(value);
        break;
      case "user_size":
        isValid = value.trim() !== "";
        break;
      case "user_location":
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
      [field]: !isValid,
    }));

    return isValid;
  };

  const handleInputFocus = (currentField) => {
    const fields = Object.keys(inputForm);
    const currentIndex = fields.indexOf(currentField);
    if (currentIndex < fields.length - 1) {
      const nextField = fields[currentIndex + 1];
      validateField(nextField, formValues[nextField]);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone) => {
    const phoneDigits = phone.replace(/\D/g, ""); // Remove all non-digit characters
    return phoneDigits.length === 10;
  };

  const isFormValid = () => {
    return (
      Object.values(validationError).every((error) => !error) && !fileSizeError
    );
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
          setValidationError(inputValidationError);
          form.current.reset();
          setFormValues(inputForm);

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
        onFocus={() => handleInputFocus("user_name")}
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
        onFocus={() => handleInputFocus("user_email")}
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
        onFocus={() => handleInputFocus("user_phone")}
        required
      />
      {validationError.user_phone && (
        <p className="error">Please enter a valid phone number.</p>
      )}
      <label className="label">Tattoo size*</label>
      <select
        className="form"
        name="user_size"
        value={formValues.user_size}
        onChange={handleInputChange}
        onFocus={() => handleInputFocus("user_size")}
        required
      >
        <option value="">Select a size</option>
        {suggestedSizes.map((size, index) => (
          <option key={index} value={size}>
            {size}
          </option>
        ))}
      </select>
      {validationError.user_size && (
        <p className="error">Please select a tattoo size.</p>
      )}
      <label className="label">Specify your desired tattoo location*</label>
      <input
        className="form"
        type="text"
        name="user_location"
        value={formValues.user_location}
        placeholder="Ex. Right arm bicep"
        onChange={handleInputChange}
        onFocus={() => handleInputFocus("user_location")}
        required
      />
      {validationError.user_location && (
        <p className="error">
          Please enter the desired location of your tattoo.
        </p>
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
        onFocus={() => handleInputFocus("user_times")}
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
        onFocus={() => handleInputFocus("my_file")}
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
        disabled={isLoading || !isFormValid()}
      />
      {messageStatus === "error" && (
        <p id="errorMessage">Message failed to send. Please try again.</p>
      )}
    </form>
  );
}
