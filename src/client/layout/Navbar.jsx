import React, { useEffect, useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { TbMessageCircleQuestion } from "react-icons/tb";
import { IoSkullOutline } from "react-icons/io5";
import { GoBook } from "react-icons/go";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoHeartOutline } from "react-icons/io5";
import { IoGiftOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import useDropdown from "../hooks/dropDown";

import "./navBar.css";

/**
 * @component navigation bar featuring a functional hamburger menu and drop down menu to route to each component in the application
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const aboutDropdown = useDropdown();
  const tattooDropdown = useDropdown();
  const location = useLocation();

  const aboutDropdownRef = useRef(aboutDropdown);
  const tattooDropdownRef = useRef(tattooDropdown);

  //reset menu and dropdown to closed on state change
  // Reset menu and dropdown to closed on state change
  useEffect(() => {
    if (typeof window !== "undefined") {
      setMenuOpen(false);
      aboutDropdownRef.current.closeDropdown();
      tattooDropdownRef.current.closeDropdown();
    }
  }, [location.pathname]);

  /**
   * @toggleMenu open and close hamburger menu && close drop down menu
   */
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    aboutDropdownRef.current.closeDropdown();
    tattooDropdownRef.current.closeDropdown();
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
            <div
              className="aboutLink"
              id="dropIcon"
              onClick={aboutDropdown.toggleDropdown}
            >
              {aboutDropdown.isOpen ? <IoCloseOutline /> : <IoIosArrowDown />}
            </div>
          </li>
          <li id="tattooItem">
            <NavLink className="navContainer" to="/tattoos">
              <IoSkullOutline className="linkIcon" />
              <h4 className="link" id="tats">
                TATTOOS
              </h4>
            </NavLink>
            {/*drop down menu togglebutton*/}
            <div
              className="aboutLink"
              id="dropIcon"
              onClick={tattooDropdown.toggleDropdown}
            >
              {tattooDropdown.isOpen ? <IoCloseOutline /> : <IoIosArrowDown />}
            </div>
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
          <menu className={`drop ${aboutDropdown.isOpen ? "active" : ""}`}>
            <NavLink className="dropLink" id="dropLinkTop" to="/reviews">
              <h4 className="dropLinkName">Reviews</h4>
              <IoIosArrowForward />
            </NavLink>
            <NavLink className="dropLink" id="dropLinkMiddle" to="/media">
              <h4 className="dropLinkName">Media</h4>
              <IoIosArrowForward />
            </NavLink>
            <NavLink className="dropLink" to="/faqs">
              <h4 className="dropLinkName">FAQs</h4>
              <IoIosArrowForward />
            </NavLink>
          </menu>
        </div>
        {/*drop down menu open*/}
        <div id="dropDownContainer">
          <menu className={`droptats ${tattooDropdown.isOpen ? "active" : ""}`}>
            <NavLink className="dropLink" id="dropLinkTop" to="/richtats">
              <h4 className="dropLinkName">Rich Marafioti</h4>
              <IoIosArrowForward />
            </NavLink>
            <NavLink className="dropLink" to="/mercedestats">
              <h4 className="dropLinkName">Mercedes Wright</h4>
              <IoIosArrowForward />
            </NavLink>
          </menu>
        </div>
      </div>
    </>
  );
}
