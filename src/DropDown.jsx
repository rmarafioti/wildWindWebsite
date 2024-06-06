import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";

const DropDown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  /*const toggleDropDown = () => setIsOpen(!isOpen);*/

  return (
    <>
      <h2
        className="faqTitle"
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: "pointer" }}
      >
        {title} {isOpen ? <IoCloseCircleOutline /> : <IoIosArrowDropdown />}
      </h2>
      {isOpen && <div className="faq">{children}</div>}
    </>
  );
};

export default DropDown;
