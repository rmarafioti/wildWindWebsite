import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaInstagram } from "react-icons/fa";
import { PiArrowSquareRight, PiArrowSquareLeft } from "react-icons/pi";

import { mercedesPhotos } from "../content/mercedesTats";

import "./styles/tattoo.css";

/**
 *
 * @component MercedesTats features a series of photos by way of tattooPhotos.js for the user to browse through. Thumbnail photo gallery showing each image is visible on desktop while only the main photo the user is currently viewing is visible in mobile
 */
export default function MercedesTats() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // functionality for the user to navigate forward and backward through tattoo photos
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % mercedesPhotos.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + mercedesPhotos.length) % mercedesPhotos.length
    );
  };

  const currentImageObj =
    mercedesPhotos.length > 0 ? mercedesPhotos[currentIndex] : null;

  const imageurl = currentImageObj
    ? new URL(currentImageObj.image, import.meta.url).href
    : "";

  /**
   *
   * @TattooCard holds each individual tattoo to be mapped through for the thumbnail gallery
   */
  function TattooCard({ tattoo, onClick }) {
    const imageUrl = new URL(tattoo.image, import.meta.url).href;
    return (
      <img
        className="indicator"
        src={imageUrl}
        alt="Tattoo"
        onClick={() => onClick(mercedesPhotos.indexOf(tattoo))}
      />
    );
  }
  return (
    <main id="tattoos">
      <Helmet>
        <title>Mercedes Wright Tattoo Page - wildwindtattoo.com</title>
        <meta
          name="description"
          content="This is the Mercedes Wright tattoo page of wildwindtattoo.com."
        />
      </Helmet>
      <div id="artistContainer">
        <h1 id="artistHeader">
          Mercedes Wright
          <a id="artistIgIcon" href="https://www.instagram.com/wild_coma/">
            <FaInstagram />
          </a>
        </h1>
      </div>
      <p id="artistAbout">Mercedes Wright Bio</p>
      <section id="tattooSection">
        <div id="tattooSlide">
          <div id="arrowSection">
            <PiArrowSquareLeft className="arrow" onClick={handlePrev} />
          </div>
          <img
            className="tattoo"
            src={imageurl}
            alt="tattoo portfolio images"
          />
          <div id="arrowSection">
            <PiArrowSquareRight className="arrow" onClick={handleNext} />
          </div>
        </div>
        <ul id="tattooGallery">
          {mercedesPhotos.map((tattoo, index) => (
            <TattooCard
              key={index}
              tattoo={tattoo}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
