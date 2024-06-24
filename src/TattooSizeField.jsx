import React from "react";

export default function TattooSizeField({
  name,
  value,
  onChange,
  onFocus,
  validationError,
}) {
  const suggestedSizes = [
    "TINY: I want my tattoo as small as it can be",
    "SMALL: I want my tattoo around palm size",
    "MEDIUM: I want my tattoo hand size",
    "LARGE: I want my tattoo to fill a good portion of the area it is on",
    "GOING BIG!: I want large scale work, a backpiece, full sleeve, etc",
  ];

  return (
    <div className="form-group">
      <label className="label">
        Tattoo size{" "}
        {validationError && (
          <p className="error">*Please select a tattoo size.</p>
        )}
      </label>
      <select
        className="form"
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        required
      >
        <option value="">Select a size</option>
        {suggestedSizes.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
