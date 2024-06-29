import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

function usePopUp() {
  const [popUp, setPopUp] = useState(false);
  const [popUpContent, setPopUpContent] = useState(null);

  const openAftercarePopUp = (
    id,
    headerOne,
    instructionsOne,
    headerTwo,
    instructionsTwo,
    instructionsTag
  ) => {
    const content = (
      <div>
        <h3 className="popHeader">{headerOne}</h3>
        <p className="popInstructions">{instructionsOne}</p>
        <h3 className="popHeader">{headerTwo}</h3>
        <p className="popInstructions">{instructionsTwo}</p>
        <p className="instructionsTag">{instructionsTag}</p>
      </div>
    );
    setPopUpContent(content);
    setPopUp(true);
  };

  const openFaqPopUp = (id, question, answer) => {
    const content = (
      <div>
        <p className="popQuestion">{question}</p>
        <p className="popAnswer">{answer}</p>
      </div>
    );
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
    openAftercarePopUp,
    openFaqPopUp,
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
          <div id="popUpButton" onClick={handleClose}>
            <IoClose />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export { usePopUp, PopUp };
