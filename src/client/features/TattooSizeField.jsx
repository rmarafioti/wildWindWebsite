import React from "react";

import "./styles/form.css";

/**
 * @component TattooSizeField features functionality for a user to select the desized size of their tattoo via the suggestedSizes array.TattooSizeField component is imported and set in Form.jsx
 */
export default function TattooSizeField({
  name,
  value,
  onChange,
  onFocus,
  validationError,
}) {
  const suggestedSizes = [
    "TINY: I want my tattoo as small as it can be",
    "SMALL: Approx palm size",
    "MEDIUM: Approx hand size",
    "LARGE: Fill the whole area my tattoo is on",
    "GOING BIG!: I want large scale work",
  ];

  return (
    <div id="tattooSizeContainer">
      <label className="label">
        Tattoo size{" "}
        {validationError && (
          <p className="error">*Please select a tattoo size.</p>
        )}
      </label>
      <select
        id="tattooSizeOption"
        className="form"
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        required
      >
        <option value="">Select a size</option>
        {suggestedSizes.map((option, index) => (
          <option id="tattooSizeOption" key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
