import React from "react";
import { FaPlus } from "react-icons/fa6";
import { PopUp, usePopUp } from "./popUp";

import { faqs } from "./faqs";

import "./styling/faqs.css";

export default function Faq() {
  const { popUp, popUpContent, openFaqPopUp, closePopUp } = usePopUp();

  function FaqCard({ id, question, answer }) {
    return (
      <div className="faqContainer">
        <h2 className="faq">{`${question}`}</h2>
        <div id="iconButton" onClick={() => openFaqPopUp(id, question, answer)}>
          <FaPlus />
        </div>
      </div>
    );
  }

  return (
    <main id="faqs">
      <h1 id="headerFaqs">FAQs</h1>
      <h3 id="faqTagline">
        General questions before you fill out our contact form
      </h3>
      <ul id="faqs">
        {faqs.map((faq) => (
          <FaqCard
            key={faq.id}
            id={faq.id}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </ul>
      <PopUp isOpen={popUp} closePopUp={closePopUp}>
        {popUpContent}
      </PopUp>
    </main>
  );
}
