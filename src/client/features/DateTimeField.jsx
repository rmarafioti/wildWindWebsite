import React, { useState } from "react";
import { IoClose, IoAdd } from "react-icons/io5";

/**
 * @component DateTimeField features functionality for a user to select available days and times and add them or delete them. DateTimeField component is imported and set in Form.jsx
 */
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
    "Weekdays",
    "Weekends",
    "Mondays",
    "Tuesdays",
    "Wednesdays",
    "Thursdays",
    "Fridays",
    "Saturdays",
    "Sundays",
  ];

  const times = [
    "12 pm",
    "12:30 pm",
    "1 pm",
    "1:30 pm",
    "2 pm",
    "2:30 pm",
    "3 pm",
    "3:30 pm",
    "4 pm",
    "4:30 pm",
    "5 pm",
    "5:30 pm",
    "6 pm",
    "6:30 pm",
    "7 pm",
  ];

  /**
   * @function handleAddTime if a selected day && selected are chosen add them to an array of strings called selected times
   */
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

  /**
   * @function handleRemoveTime functionality to remove a selected time from the selected times array
   * @param index of the selected time in the array
   */
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
    <div>
      <label className="label">
        Days and times you are available to get tattooed{" "}
        {validationError && (
          <p className="error">*Please provide your availability.</p>
        )}
      </label>
      <div className="selectTimeContainer">
        <select
          className="timeForm"
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
          className="timeForm"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
        >
          <option className="selectValue" value="">
            Select a time
          </option>
          {times.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
        <p id="addTime">{selectedTimes.length > 0 ? "Add More" : "Add Time"}</p>
        <div id="addMoreButton" onClick={handleAddTime}>
          <IoAdd id="addSymbol" />
        </div>
      </div>

      <div className="selectedTimesContainer">
        {selectedTimes.map((time, index) => (
          <div key={index} className="timeEntry">
            {time}{" "}
            <div id="removeButton" onClick={() => handleRemoveTime(index)}>
              <IoClose />
            </div>
          </div>
        ))}
      </div>
      <input type="hidden" name={name} value={value} />
    </div>
  );
}
