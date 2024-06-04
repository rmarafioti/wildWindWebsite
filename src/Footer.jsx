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
      <div id="footerHeader">
        <NavLink to="/">
          <img
            id="footerLogo"
            src="https://res.cloudinary.com/dzpne110u/image/upload/v1717377135/wildWindSite/WWT_Green_kc8y1n.png"
            alt="shop logo"
          />
        </NavLink>
      </div>
      <ul>
        <li>
          <NavLink className="navItem" to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink className="navItem" to="/tattoos">
            TATTOOS
          </NavLink>
        </li>
        <li>
          <NavLink className="navItem" to="/shop">
            SHOP
          </NavLink>
        </li>
        <li>
          <NavLink className="navItem" to="/contact">
            CONTACT
          </NavLink>
        </li>
        <li>
          <NavLink className="navItem" to="/faqs">
            FAQs
          </NavLink>
        </li>
        <li>
          <NavLink className="navItem" to="/giftcards">
            GIFT CARDS
          </NavLink>
        </li>
        <li>
          <NavLink className="navItem" to="/aftercare">
            AFTERCARE
          </NavLink>
        </li>
      </ul>
      <div id="footerIcons">
        <li className="listIcons">
          <a href="https://www.instagram.com/wildwindtattoo/?hl=en">
            <FaInstagram />
          </a>
        </li>
        <li className="listIcons">
          <a href="https://www.facebook.com/wildwindtattoo/">
            <FaFacebookSquare />
          </a>
        </li>
      </div>
    </footer>
  );
}
