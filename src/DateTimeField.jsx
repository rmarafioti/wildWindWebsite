import React, { useState } from "react";

export default function DateTimeField({
  name,
  value,
  onChange,
  validationError,
}) {
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedTimes, setSelectedTimes] = useState([]);

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Weekdays",
    "Weekends",
  ];
  const times = [
    "12 pm",
    "1 pm",
    "2 pm",
    "3 pm",
    "4 pm",
    "5 pm",
    "6 pm",
    "7 pm",
  ];

  const handleAddTime = () => {
    if (selectedDay && selectedTime) {
      const newTime = `${selectedDay} at ${selectedTime}`;
      setSelectedTimes((prevTimes) => [...prevTimes, newTime]);
      onChange({
        target: {
          name: name,
          value: [...selectedTimes, newTime].join(", "),
        },
      });
      setSelectedDay("");
      setSelectedTime("");
    }
  };

  const handleRemoveTime = (index) => {
    const newSelectedTimes = selectedTimes.filter((_, i) => i !== index);
    setSelectedTimes(newSelectedTimes);
    onChange({
      target: {
        name: name,
        value: newSelectedTimes.join(", "),
      },
    });
  };

  return (
    <div className="form-group">
      <label className="label">
        Days and times you are available to get tattooed{" "}
        {validationError && (
          <p className="error">*Please provide your availability.</p>
        )}
      </label>
      <div className="selector-container">
        <select
          className="form"
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
        >
          <option value="">Select a day</option>
          {days.map((day, index) => (
            <option key={index} value={day}>
              {day}
            </option>
          ))}
        </select>
        <select
          className="form"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
        >
          <option value="">Select a time</option>
          {times.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
        <button type="button" onClick={handleAddTime}>
          {selectedTimes.length > 0 ? "Add More" : "Add"}
        </button>
      </div>
      <div className="selected-times">
        {selectedTimes.map((time, index) => (
          <div key={index} className="time-entry">
            {time}{" "}
            <button type="button" onClick={() => handleRemoveTime(index)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <input type="hidden" name={name} value={value} />
    </div>
  );
}
