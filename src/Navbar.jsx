import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav>
      <h3>Home Icon</h3>
      <h1>WILD WIND TATTOO</h1>
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
            <NavLink to="/faqs">FAQs</NavLink>
          </li>
        </menu>
        <div className={`overlay ${menuOpen ? "active" : ""}`}></div>
      </div>
    </nav>
  );
}
