import React, { useState } from "react";
import { SlClose } from "react-icons/sl";

function usePopUp() {
  const [popUp, setPopUp] = useState(false);
  const [popUpContent, setPopUpContent] = useState(null);

  const openPopUp = (content) => {
    setPopUpContent(content);
    setPopUp(true);
  };

  const closePopUp = () => {
    setPopUp(false);
    setPopUpContent(null);
  };

  return {
    popUp,
    popUpContent,
    openPopUp,
    closePopUp,
  };
}

const PopUp = ({ isOpen, children, closePopUp }) => {
  if (!isOpen) return null;

  const handleClose = () => {
    closePopUp(); // Close the pop-up using the closePopUp function
  };

  return (
    <div className="popUpOverlay">
      <div className="popUpContent" onClick={(e) => e.stopPropagation()}>
        <div className="buttonSection">
          <button onClick={handleClose}>
            <SlClose />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export { usePopUp, PopUp };
