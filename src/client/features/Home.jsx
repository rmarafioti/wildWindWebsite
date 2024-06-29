import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main id="home">
      <h1 id="headerHome">HOME</h1>
      <Link id="contactContainer" to="/contact">
        <button id="contactHomeButton">Contact Us</button>
      </Link>
    </main>
  );
}
