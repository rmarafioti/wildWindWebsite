import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { IoSkullOutline } from "react-icons/io5";
import { GoBook } from "react-icons/go";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoHeartOutline } from "react-icons/io5";
import { IoGiftOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

import "./navBar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [dropDown, setDropDown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      setDropDown(false); // Close dropdown when closing the menu
    }
  };

  const toggleDropDown = () => {
    setDropDown(!dropDown); // Toggle dropDown state
  };

  return (
    <>
      <nav>
        <div id="hamMenuContainer" onClick={toggleMenu}>
          <div className={`menuButtonBurger ${menuOpen ? "open" : ""}`}></div>
        </div>
        <NavLink to="/">
          <img
            id="navLogo"
            src="https://res.cloudinary.com/dzpne110u/image/upload/v1717377135/wildWindSite/WWT_Green_kc8y1n.png"
            alt="shop logo"
          />
        </NavLink>
        <div id="navRight">
          <NavLink id="faqContainer" to="/faqs">
            <TbMessageCircleQuestion id="faqIcon" />
          </NavLink>
          <NavLink id="contactContainer" to="/contact">
            <button id="contactButton">Contact Us</button>
          </NavLink>
        </div>
      </nav>
      <div id="menuContainer">
        <menu className={`menu ${menuOpen ? "active" : ""}`}>
          <li id="aboutItem">
            <NavLink className="navContainer" to="/shop">
              <GoBook className="linkIcon" />
              <h4 className="link" id="aboutUs">
                ABOUT US
              </h4>
            </NavLink>
            <IoIosArrowDown
              className="link"
              id="dropIcon"
              onClick={toggleDropDown}
            />
          </li>
          <div id="dropDownContainer">
            <menu className={`drop ${dropDown ? "active" : ""}`}>
              <NavLink className="dropLink" to="/reviews">
                <h4>REVIEWS</h4>
                <FaPlus />
              </NavLink>

              <NavLink className="dropLink" to="/media">
                <h4>MEDIA</h4>
                <FaPlus />
              </NavLink>
            </menu>
          </div>
          <li className="navItem">
            <NavLink className="navContainer" to="/tattoos">
              <IoSkullOutline className="linkIcon" />
              <h4 className="link">TATTOOS</h4>
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink className="navContainer" to="/contact">
              <HiOutlineEnvelope className="linkIcon" />
              <h4 className="link">CONTACT</h4>
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink className="navContainer" to="/aftercare">
              <IoHeartOutline className="linkIcon" />
              <h4 className="link">AFTERCARE</h4>
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink className="navContainer" to="/giftcards">
              <IoGiftOutline className="linkIcon" />
              <h4 className="link">GIFTCARDS</h4>
            </NavLink>
          </li>
        </menu>
      </div>
    </>
  );
}