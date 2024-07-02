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

/**
 * @component navigation bar featuring a functional hamburger menu and drop down menu to route to each component in the application
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const location = useLocation();

  //reset menu and dropdown to closed on state change
  useEffect(() => {
    setMenuOpen(false);
    setDropDown(false);
  }, [location.pathname]);

  /**
   * @toggleMenu open and close hamburger menu && close drop down menu
   */
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setDropDown(false);
  };

  /**
   * @toggleDropDown open and close drop down menu
   */
  const toggleDropDown = () => {
    setDropDown(!dropDown);
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
      {/*hamburger menu open*/}
      <div id="menuContainer">
        <menu className={`menu ${menuOpen ? "active" : ""}`}>
          <li id="aboutItem">
            <NavLink className="navContainer" to="/aboutus">
              <GoBook className="linkIcon" />
              <h4 className="link" id="aboutUs">
                ABOUT US
              </h4>
            </NavLink>
            {/*drop down menu togglebutton*/}
            <IoIosArrowDown
              className="aboutLink"
              id="dropIcon"
              onClick={toggleDropDown}
            />
          </li>
          <li id="tattooItem">
            <NavLink className="navContainer" to="/tattoos">
              <IoSkullOutline className="linkIcon" />
              <h4 className="link" id="tats">
                TATTOOS
              </h4>
            </NavLink>
            {/*drop down menu togglebutton*/}
            <IoIosArrowDown
              className="aboutLink"
              id="dropIcon"
              onClick={toggleDropDown}
            />
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
        {/*drop down menu open*/}
        <div id="dropDownContainer">
          <menu className={`drop ${dropDown ? "active" : ""}`}>
            <NavLink className="dropLink" id="dropLinkTop" to="/reviews">
              <h4 className="dropLinkName">REVIEWS</h4>
              <FaPlus />
            </NavLink>
            <NavLink className="dropLink" id="dropLinkMiddle" to="/media">
              <h4 className="dropLinkName">MEDIA</h4>
              <FaPlus />
            </NavLink>
            <NavLink className="dropLink" to="/faqs">
              <h4 className="dropLinkName">FAQs</h4>
              <FaPlus />
            </NavLink>
          </menu>
        </div>
        {/*drop down menu open*/}
        <div id="dropDownContainer">
          <menu className={`droptats ${dropDown ? "active" : ""}`}>
            <NavLink className="dropLink" id="dropLinkTop" to="/rich">
              <h4 className="dropLinkName">Rich Marafioti</h4>
              <FaPlus />
            </NavLink>
            <NavLink className="dropLink" to="/mercedes">
              <h4 className="dropLinkName">Mercedes Wright</h4>
              <FaPlus />
            </NavLink>
          </menu>
        </div>
      </div>
    </>
  );
}
