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

const PopUp = ({ isOpen, close, children, closePopUp }) => {
  if (!isOpen) return null;

  return (
    <div className="popUpOverlay" onClick={close}>
      <div className="popUpContent" onClick={(e) => e.stopPropagation()}>
        <div className="buttonSection">
          <button>
            <SlClose onClick={closePopUp} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export { usePopUp, PopUp };
