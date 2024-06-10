import React from "react";
import { FaPlus } from "react-icons/fa6";
import { PopUp, usePopUp } from "./popUp";

import { aftercareInstructions } from "./aftercareInstructions";

import "./styling/aftercare.css";

export default function AfterCare() {
  const { popUp, popUpContent, openAftercarePopUp, closePopUp } = usePopUp();

  function AftercareCard({
    id,
    title,
    headerOne,
    instructionsOne,
    headerTwo,
    instructionsTwo,
    instructionsTag,
  }) {
    return (
      <div className="careContainer">
        <h2 className="instructions">{`${title}`}</h2>
        <div
          id="iconButton"
          onClick={() =>
            openAftercarePopUp(
              id,
              headerOne,
              instructionsOne,
              headerTwo,
              instructionsTwo,
              instructionsTag
            )
          }
        >
          <FaPlus />
        </div>
      </div>
    );
  }

  return (
    <main id="afterCare">
      <h1 id="afterHeader">Aftercare</h1>
      <h3 id="afterTagline">
        everything you need to know about taking care of your tattoo.
      </h3>
      <ul>
        {aftercareInstructions.map((aftercareInstructions) => (
          <AftercareCard
            key={aftercare.id}
            id={aftercare.id}
            headerOne={aftercare.headerOne}
            instructionsOne={aftercare.instructionsOne}
            headerTwo={aftercare.headerTwo}
            instructionsTwo={aftercare.instructionsTwo}
            instructionsTag={aftercare.instructionsTag}
          />
        ))}
      </ul>
      {/*<div className="careContainer">
        <h2 className="instructions">Drylock Bandage Instructions </h2>
        <div
          id="iconButton"
          onClick={() => openAftercarePopUp(dryLockInstructions)}
        >
          <FaPlus />
        </div>
      </div>
      <div className="careContainerBottom">
        <h2 className="instructions">Tegaderm Bandage Instructions </h2>
        <div
          id="iconButton"
          onClick={() => openAftercarePopUp(tegadermInstructions)}
        >
          <FaPlus />
        </div>
      </div>*/}

      <PopUp isOpen={popUp} closePopUp={closePopUp}>
        {popUpContent}
      </PopUp>
    </main>
  );
}
