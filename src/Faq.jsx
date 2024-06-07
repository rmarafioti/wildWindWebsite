import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
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
            <IoAddCircleOutline />
          </button>
        </div>
        <div className="faqContainer">
          <h2 className="faq">What is the shop minimum?</h2>
          <button onClick={() => openPopUp(questionTwo)}>
            <IoAddCircleOutline />
          </button>
        </div>
        <div className="faqContainer">
          <h2 className="faq">Is the shop cash only?</h2>
          <button onClick={() => openPopUp(questionThree)}>
            <IoAddCircleOutline />
          </button>
        </div>
        <div className="faqContainer">
          <h2 className="faq">Do you give price quotes via email or phone?</h2>
          <button onClick={() => openPopUp(questionFour)}>
            <IoAddCircleOutline />
          </button>
        </div>
        <div className="faqContainer">
          <h2 className="faq">
            What is the wait time for getting an appointment?
          </h2>
          <button onClick={() => openPopUp(questionFive)}>
            <IoAddCircleOutline />
          </button>
        </div>
        <div className="faqContainer">
          <h2 className="faq">How can I make an appointment?</h2>
          <button onClick={() => openPopUp(questionSix)}>
            <IoAddCircleOutline />
          </button>
        </div>
        <div className="faqContainer">
          <h2 className="faq">
            Do I have to leave a deposit to make an appointment?"
          </h2>
          <button onClick={() => openPopUp(questionSeven)}>
            <IoAddCircleOutline />
          </button>
        </div>
        <div className="faqContainer">
          <h2 className="faq">
            Can I see my tattoo design before my appointment?
          </h2>
          <button onClick={() => openPopUp(questionEight)}>
            <IoAddCircleOutline />
          </button>
        </div>
        <div className="faqContainer">
          <h2 className="faq">What is your cancellation policy?</h2>
          <button onClick={() => openPopUp(questionNine)}>
            <IoAddCircleOutline />
          </button>
        </div>
      </section>
      <PopUp isOpen={popUp} closePopUp={closePopUp}>
        {popUpContent}
      </PopUp>
    </article>
  );
}
