import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";

const DropDown = ({ title, children, isOpen, onClick }) => {
  return (
    <>
      <h2 className={`faqTitle" ${isOpen ? "open" : ""}`} onClick={onClick}>
        {title} {isOpen ? <IoCloseCircleOutline /> : <IoIosArrowDropdown />}
      </h2>
      {isOpen && <div className="faq">{children}</div>}
    </>
  );
};

export default DropDown;
