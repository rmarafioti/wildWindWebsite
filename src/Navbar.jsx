import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h1>NAVBAR</h1>
      <ul>
        <li>
          <NavLink to="/">HOME ICON</NavLink>
        </li>
        <li>
          <NavLink to="/tattoos">TATTOOS</NavLink>
        </li>
        <li>
          <NavLink to="/shop">SHOP</NavLink>
        </li>
        <li>
          <NavLink to="/contact">CONTACT</NavLink>
        </li>
        <li>
          <NavLink to="/faqs">FAQs</NavLink>
        </li>
      </ul>
    </nav>
  );
}
