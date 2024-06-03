import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { TbMessageCircleQuestion } from "react-icons/tb";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav>
      <div id="hamMenu" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`menuButtonBurger ${menuOpen ? "open" : ""}`}></div>
        <menu className={`menu ${menuOpen ? "active" : ""}`}>
          <li className="navItem">
            <NavLink to="/tattoos">TATTOOS</NavLink>
          </li>
          <li className="navItem">
            <NavLink to="/shop">SHOP</NavLink>
          </li>
          <li className="navItem">
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
          <li className="navItem">
            <NavLink to="/aftercare">AFTERCARE</NavLink>
          </li>
          <li className="navItem">
            <NavLink to="/giftcards">GIFTCARDS</NavLink>
          </li>
        </menu>
        <div className={`overlay ${menuOpen ? "active" : ""}`}></div>
      </div>
      <NavLink to="/">
        <img
          id="navLogo"
          src="https://res.cloudinary.com/dzpne110u/image/upload/v1717377135/wildWindSite/WWT_Green_kc8y1n.png"
          alt="shop logo"
        />
      </NavLink>
      <NavLink to="/faqs">
        <TbMessageCircleQuestion id="faqIcon" />
      </NavLink>
    </nav>
  );
}
