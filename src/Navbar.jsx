import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { IoSkullOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoHeartOutline } from "react-icons/io5";
import { IoGiftOutline } from "react-icons/io5";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav>
      <div>
        <div id="hamMenu" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`menuButtonBurger ${menuOpen ? "open" : ""}`}></div>
          <menu className={`menu ${menuOpen ? "active" : ""}`}>
            <li className="navItem">
              <NavLink className="navContainer" to="/tattoos">
                <IoSkullOutline />
                TATTOOS
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink className="navContainer" to="/shop">
                <AiOutlineHome />
                SHOP
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink className="navContainer" to="/contact">
                <HiOutlineEnvelope />
                CONTACT
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink className="navContainer" to="/aftercare">
                <IoHeartOutline />
                AFTERCARE
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink className="navContainer" to="/giftcards">
                <IoGiftOutline />
                GIFTCARDS
              </NavLink>
            </li>
          </menu>
          <div className={`overlay ${menuOpen ? "active" : ""}`}></div>
        </div>
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
  );
}
