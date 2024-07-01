import React, { useState, useEffect } from "react";

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { Link } from "react-router-dom";

import { shopPhotos } from "../content/shopPhotos";

import "./styles/shop.css";

/**
 *
 * @component Shop features static information about the business as well as a slideshow of shop photos by way of shopPhotos.js
 */
export default function Shop() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    /**
     *@function interval creates a slideshow of shop photos looping through by the photos index at a set timeout of 3 seconds
     */
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % shopPhotos.length);
        setIsFading(false);
        // Match this duration with the CSS transition duration
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentImageObj =
    shopPhotos.length > 0 ? shopPhotos[currentIndex] : null;

  const imageurl = currentImageObj
    ? new URL(currentImageObj.image, import.meta.url).href
    : "";

  return (
    <main id="shopAbout">
      <h1 id="mainShopHeader">About Us</h1>
      <img
        id="shopImages"
        className={isFading ? "fade-out" : ""}
        src={imageurl}
        alt="tattoo shop photos"
      />
      <div id="shopIconContainer">
        <h1 className="shopIcon">
          <a href="https://www.instagram.com/wildwindtattoo/?hl=en">
            <FaInstagram />
          </a>
        </h1>
        <h1 className="shopIcon">
          <a href="https://www.facebook.com/wildwindtattoo/">
            <FaFacebookSquare />
          </a>
        </h1>
      </div>
      <p id="firstParagraph">
        Rich Marafioti founded Wild Wind Tattoo, which has provided expert
        tattooing in Chicago since 2015. Located in vibrant Wicker Park, Wild
        Wind Tattoo offers a bright, welcoming, and relaxing space for clients
        to get tattooed. Beautiful tattoos are just part of what we do. We pride
        ourselves on creating a forward-thinking, art-centered environment where
        you will enjoy a positive experience, staying with you as long as your
        tattoo.
      </p>
      <h2 className="shopHeader">OUR MISSION</h2>
      <ul>
        <li className="missionItem">Variety</li>
        <li className="missionItem">Comfort</li>
        <li className="missionItem">Professionalism</li>
      </ul>
      <p className="shopMiddleParagraphs">
        You can expect to be treated with respect and care at WWT. We will
        communicate all aspects of your tattoo experience, from consultation to
        caring for your new tattoo.
      </p>
      <p className="shopMiddleParagraphs">
        We offer various tattoo styles, from small walk-ins to larger custom
        pieces. Have something in mind? Just ask!
      </p>
      <p className="shopMiddleParagraphs" id="bottomParagrah">
        Our community is important to us. We are here to give you the tattoo you
        want in an inclusive, safe space. While you get tattooed, enjoy a clean,
        creative, and artistic environment.
      </p>
      <h2 className="shopHeader">COMMUNITY</h2>
      <p className="shopParagraphs">
        Wild Wind Tattoo is proud to serve and work with our strong community.
        Over the years, we have held fundraisers supporting families of Pulse
        Nightclub shooting victims, Project Fierce, and the Chicago Abortion
        Fund. We are currently partnered with Chicago Therapy Collective's Hire
        Trans Now initiative.
      </p>
      <div id="shopLinksContainer">
        <Link to="/reviews" className="shopLinks">
          <h3>Reviews</h3>
        </Link>
        <Link to="/media" className="shopLinks">
          <h3>Media</h3>
        </Link>
      </div>
    </main>
  );
}
