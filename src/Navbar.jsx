import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { IoSkullOutline } from "react-icons/io5";
import { GoBook } from "react-icons/go";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoHeartOutline } from "react-icons/io5";
import { IoGiftOutline } from "react-icons/io5";

import "./styling/navBar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav>
        <div id="hamMenuContainer" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`menuButtonBurger ${menuOpen ? "open" : ""}`}></div>
        </div>
        <NavLink to="/">
          <img
            id="navLogo"
            src="https://res.cloudinary.com/dzpne110u/image/upload/v1717377135/wildWindSite/WWT_Green_kc8y1n.png"
            alt="shop logo"
          />
        </NavLink>
        <NavLink id="faqContainer" to="/faqs">
          <TbMessageCircleQuestion id="faqIcon" />
        </NavLink>
      </nav>
      <div id="menuContainer">
        <menu className={`menu ${menuOpen ? "active" : ""}`}>
          <li className="navItem">
            <NavLink className="navContainer" to="/tattoos">
              <IoSkullOutline className="linkIcon" />
              <h4 className="link">TATTOOS</h4>
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink className="navContainer" to="/shop">
              <GoBook className="linkIcon" />
              <h4 className="link">ABOUT US</h4>
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
