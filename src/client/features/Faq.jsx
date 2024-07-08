import React from "react";
import { Helmet } from "react-helmet-async";
import { FaPlus } from "react-icons/fa6";
import { PopUp, usePopUp } from "../hooks/popUp";

import { faqs } from "../content/faqs";

import "./styles/faqs.css";
import "./styles/popup.css";

/**
 * @component Faq features a functional pop up for frequently asked tattoo questions
 */
export default function Faq() {
  const { popUp, popUpContent, openFaqPopUp, closePopUp } = usePopUp();

  /**
   * @function FaqCard holds frequently asked tattoo questions and answers listed in faqs.js && pop up functionality handled by way of popUp.js
   *
   */
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
      <Helmet>
        <title>FAQs Page - wildwindtattoo.com</title>
        <meta
          name="description"
          content="This is the FAQs page of wildwindtattoo.com."
        />
        <link rel="canonical" href="/faqs" />
      </Helmet>
      <h1 id="headerFaqs">FAQs</h1>
      <h3 id="faqTagline">
        General questions before you fill out our contact form
      </h3>
      <ul id="questions">
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
