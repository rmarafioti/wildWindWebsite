import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

/**
 *
 * @component Home features the main landing page of the web app with video and copy for SEO
 */
export default function Home() {
  return (
    <main id="home">
      <Helmet>
        <title>Home Page - wildwindtattoo.com</title>
        <meta
          name="description"
          content="This is the home page of wildwindtattoo.com."
        />
      </Helmet>
      <h1 id="headerHome">HOME</h1>
      <Link id="contactContainer" to="/contact">
        <button id="contactHomeButton">Contact Us</button>
      </Link>
    </main>
  );
}
