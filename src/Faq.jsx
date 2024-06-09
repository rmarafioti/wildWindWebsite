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
    <article id="faqs">
      <h1>FAQs</h1>
      <h3 id="faqTagline">
        general questions before you fill out our contact form.
      </h3>
      <section id="faqSection">
        <div className="faqContainer">
          <h2 className="faq">Does Wild Wind Tattoo accept walk-ins?</h2>
          <button onClick={() => openPopUp(questionOne)}>
            <FaPlus />
          </button>
        </div>
        <div className="faqContainer">
          <h2 className="faq">What is the shop minimum?</h2>
          <button onClick={() => openPopUp(questionTwo)}>
            <FaPlus />
          </button>
        </div>
        <div className="faqContainer">
          <h2 className="faq">Is the shop cash only?</h2>
          <button onClick={() => openPopUp(questionThree)}>
            <FaPlus />
          </button>
        </div>
        <div className="faqContainer">
          <h2 className="faq">Do you give price quotes via email or phone?</h2>
          <button onClick={() => openPopUp(questionFour)}>
            <FaPlus />
          </button>
        </div>
        <div className="faqContainer">
          <h2 className="faq">
            What is the wait time for getting an appointment?
          </h2>
          <button onClick={() => openPopUp(questionFive)}>
            <FaPlus />
          </button>
        </div>
        <div className="faqContainer">
          <h2 className="faq">How can I make an appointment?</h2>
          <button onClick={() => openPopUp(questionSix)}>
            <FaPlus />
          </button>
        </div>
        <div className="faqContainer">
          <h2 className="faq">
            Do I have to leave a deposit to make an appointment?"
          </h2>
          <button onClick={() => openPopUp(questionSeven)}>
            <FaPlus />
          </button>
        </div>
        <div className="faqContainer">
          <h2 className="faq">
            Can I see my tattoo design before my appointment?
          </h2>
          <button onClick={() => openPopUp(questionEight)}>
            <FaPlus />
          </button>
        </div>
        <div className="faqContainer">
          <h2 className="faq">What is your cancellation policy?</h2>
          <button onClick={() => openPopUp(questionNine)}>
            <FaPlus />
          </button>
        </div>
      </section>
      <PopUp isOpen={popUp} closePopUp={closePopUp}>
        {popUpContent}
      </PopUp>
    </article>
  );
}
