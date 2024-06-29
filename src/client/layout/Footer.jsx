import { NavLink } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div id="footerHeaderContainer">
        <NavLink id="footerItem" to="/">
          <img
            id="footerLogo"
            src="https://res.cloudinary.com/dzpne110u/image/upload/v1717547711/wildWindSite/wwt_line_ozy2ca.png"
            alt="shop logo"
          />
        </NavLink>
        <p id="logoTag">1452 n. western ave chicago il 60622</p>
      </div>
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
      <h4 id="footerTag">copyright 2024 Marf inc.</h4>
    </footer>
  );
}
