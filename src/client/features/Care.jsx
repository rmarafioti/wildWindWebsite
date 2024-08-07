import React from "react";
import { Helmet } from "react-helmet-async";
import { FaPlus } from "react-icons/fa6";
import { PopUp, usePopUp } from "../hooks/popUp";

import { aftercare } from "../content/aftercareInstructions";

import "./styles/aftercare.css";
import "./styles/popup.css";

/**
 * @component Care features a functional pop up for tattoo care instructions
 */
export default function Care() {
  const { popUp, popUpContent, openAftercarePopUp, closePopUp } = usePopUp();

  /**
   * @function AftercareCard holds care instructions listed in aftercareinstructions.js && pop up functionality handled by way of popUp.js
   *
   */
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
      <Helmet>
        <title>Aftercare Page - wildwindtattoo.com</title>
        <meta
          name="description"
          content="This is the aftercare page of wildwindtattoo.com."
        />
        <link rel="canonical" href="/aftercare" />
      </Helmet>
      <h1 id="afterHeader">Aftercare</h1>
      <h3 id="afterTagline">
        everything you need to know about taking care of your tattoo.
      </h3>
      <ul id="aftercaresContainer">
        {aftercare.map((aftercareInstructions) => (
          <AftercareCard
            key={aftercareInstructions.id}
            id={aftercareInstructions.id}
            title={aftercareInstructions.title}
            headerOne={aftercareInstructions.headerOne}
            instructionsOne={aftercareInstructions.instructionsOne}
            headerTwo={aftercareInstructions.headerTwo}
            instructionsTwo={aftercareInstructions.instructionsTwo}
            instructionsTag={aftercareInstructions.instructionsTag}
          />
        ))}
      </ul>
      <PopUp isOpen={popUp} closePopUp={closePopUp}>
        {popUpContent}
      </PopUp>
    </main>
  );
}
