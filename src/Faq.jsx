import React from "react";
import { FaPlus } from "react-icons/fa6";
import { PopUp, usePopUp } from "./popUp";

import {
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
  questionFive,
  questionSix,
  questionSeven,
  questionEight,
  questionNine,
} from "./faqs";

import "./styling/faqs.css";

export default function Faq() {
  const { popUp, popUpContent, openPopUp, closePopUp } = usePopUp();

  return (
    <main id="faqs">
      <h1 id="headerFaqs">FAQs</h1>
      <h3 id="faqTagline">
        General questions before you fill out our contact form
      </h3>
      <section id="faqSection">
        <div className="faqContainer">
          <h2 className="faq">Does Wild Wind Tattoo accept walk-ins?</h2>
          <div id="iconButton" onClick={() => openPopUp(questionOne)}>
            <FaPlus />
          </div>
        </div>
        <div className="faqContainer">
          <h2 className="faq">What is the shop minimum?</h2>
          <div id="iconButton" onClick={() => openPopUp(questionTwo)}>
            <FaPlus />
          </div>
        </div>
        <div className="faqContainer">
          <h2 className="faq">Is the shop cash only?</h2>
          <div id="iconButton" onClick={() => openPopUp(questionThree)}>
            <FaPlus />
          </div>
        </div>
        <div className="faqContainer">
          <h2 className="faq">Do you give price quotes via email or phone?</h2>
          <div id="iconButton" onClick={() => openPopUp(questionFour)}>
            <FaPlus />
          </div>
        </div>
        <div className="faqContainer">
          <h2 className="faq">
            What is the wait time for getting an appointment?
          </h2>
          <div id="iconButton" onClick={() => openPopUp(questionFive)}>
            <FaPlus />
          </div>
        </div>
        <div className="faqContainer">
          <h2 className="faq">How can I make an appointment?</h2>
          <div id="iconButton" onClick={() => openPopUp(questionSix)}>
            <FaPlus />
          </div>
        </div>
        <div className="faqContainer">
          <h2 className="faq">
            Do I have to leave a deposit to make an appointment?"
          </h2>
          <div id="iconButton" onClick={() => openPopUp(questionSeven)}>
            <FaPlus />
          </div>
        </div>
        <div className="faqContainer">
          <h2 className="faq">
            Can I see my tattoo design before my appointment?
          </h2>
          <div id="iconButton" onClick={() => openPopUp(questionEight)}>
            <FaPlus />
          </div>
        </div>
        <div className="faqContainer">
          <h2 className="faq">What is your cancellation policy?</h2>
          <div id="iconButton" onClick={() => openPopUp(questionNine)}>
            <FaPlus />
          </div>
        </div>
      </section>
      <PopUp isOpen={popUp} closePopUp={closePopUp}>
        {popUpContent}
      </PopUp>
    </main>
  );
}
