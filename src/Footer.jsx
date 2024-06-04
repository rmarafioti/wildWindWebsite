import { NavLink } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useEffect } from "react";

import "./styling/footer.css";

export default function Footer() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <footer>
      <div id="footerHeaderContainer">
        <NavLink id="header" to="/">
          <header id="header">WILD WIND TATTOO</header>
        </NavLink>
      </div>
      <ul id="ulTop">
        <li>
          <NavLink className="footerItem" to="/tattoos">
            TATTOOS
          </NavLink>
        </li>
        <li>
          <NavLink className="footerItem" to="/shop">
            SHOP
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink className="footerItem" to="/contact">
            CONTACT
          </NavLink>
        </li>
        <li>
          <NavLink className="footerItem" to="/faqs">
            FAQs
          </NavLink>
        </li>

        <li>
          <NavLink className="footerItem" to="/aftercare">
            AFTERCARE
          </NavLink>
        </li>
      </ul>
      <ul id="ulBottom">
        <li>
          <NavLink className="footerItem" to="/giftcards">
            GIFT CARDS
          </NavLink>
        </li>
      </ul>
      <div id="footerIcons">
        <a
          className="footerIcon"
          href="https://www.instagram.com/wildwindtattoo/?hl=en"
        >
          <FaInstagram />
        </a>
        <a
          className="footerIcon"
          href="https://www.facebook.com/wildwindtattoo/"
        >
          <FaFacebookSquare />
        </a>
      </div>
      <p id="footerTag">copyright 2024 Marf inc.</p>
    </footer>
  );
}
