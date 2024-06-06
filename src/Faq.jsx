import React, { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

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

export default function Faq() {
  const [popUp, setPopUp] = useState(false);
  const [popUpContent, setPopUpContent] = useState(null);

  const Popup = ({ isOpen, close, children }) => {
    if (!isOpen) return null;

    return (
      <div className="popUpOverlay" onClick={close}>
        <div className="popUpContent" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    );
  };

  const openPopUp = (content) => {
    setPopUpContent(content);
    setPopUp(true);
  };

  const closePopUp = () => {
    setPopUp(false);
    setPopUpContent(null);
  };

  return (
    <article id="faqs">
      <h1>FAQs</h1>
      <h3 id="faqTagline">
        general questions before you fill out our contact form.
      </h3>
      <section id="faqSection">
        <div className="faqContainer">
          <h1 className="faq">Does Wild Wind Tattoo accept walk-ins?</h1>
          <button onClick={() => openPopUp(questionOne)}>
            <IoAddCircleOutline />
          </button>
        </div>
        <div className="faqContainer">
          <h1 className="faq">What is the shop minimum?</h1>
          <button onClick={() => openPopUp(questionTwo)}>
            <IoAddCircleOutline />
          </button>
        </div>
        <div className="faqContainer">
          <h1 className="faq">Is the shop cash only?</h1>
          <button onClick={() => openPopUp(questionThree)}>
            <IoAddCircleOutline />
          </button>
        </div>
        <div className="faqContainer">
          <h1 className="faq">Do you give price quotes via email or phone?</h1>
          <button onClick={() => openPopUp(questionFour)}>
            <IoAddCircleOutline />
          </button>
        </div>
        <div className="faqContainer">
          <h1 className="faq">
            What is the wait time for getting an appointment?
          </h1>
          <button onClick={() => openPopUp(questionFive)}>
            <IoAddCircleOutline />
          </button>
        </div>
        <div className="faqContainer">
          <h1 className="faq">How can I make an appointment?</h1>
          <button onClick={() => openPopUp(questionSix)}>
            <IoAddCircleOutline />
          </button>
        </div>
        <div className="faqContainer">
          <h1 className="faq">
            Do I have to leave a deposit to make an appointment?"
          </h1>
          <button onClick={() => openPopUp(questionSeven)}>
            <IoAddCircleOutline />
          </button>
        </div>
        <div className="faqContainer">
          <h1 className="faq">
            Can I see my tattoo design before my appointment?
          </h1>
          <button onClick={() => openPopUp(questionEight)}>
            <IoAddCircleOutline />
          </button>
        </div>
        <div className="faqContainer">
          <h1 className="faq">What is your cancellation policy?</h1>
          <button onClick={() => openPopUp(questionNine)}>
            <IoAddCircleOutline />
          </button>
        </div>
      </section>
      <Popup isOpen={popUp} close={closePopUp}>
        {popUpContent}
      </Popup>
    </article>
  );
}
