import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaInstagram } from "react-icons/fa";
import { PiArrowSquareRight, PiArrowSquareLeft } from "react-icons/pi";

import { richPhotos } from "../content/tattooPhotos";

import "./styles/tattoo.css";

/**
 *
 * @component RichTats features a series of photos by way of tattooPhotos.js for the user to browse through. Thumbnail photo gallery showing each image is visible on desktop while only the main photo the user is currently viewing is visible in mobile
 */
export default function RichTats() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // functionality for the user to navigate forward and backward through tattoo photos
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % richPhotos.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + richPhotos.length) % richPhotos.length
    );
  };

  const currentImageObj =
    richPhotos.length > 0 ? richPhotos[currentIndex] : null;

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
        onClick={() => onClick(richPhotos.indexOf(tattoo))}
      />
    );
  }

  return (
    <main id="tattoos">
      <Helmet>
        <title>Rich Marafioti Tattoo Page - wildwindtattoo.com</title>
        <meta
          name="description"
          content="This is the Rich Marafioti tattoo page of wildwindtattoo.com."
        />
      </Helmet>
      <div id="artistContainer">
        <h1 id="artistHeader">
          Rich Marafioti
          <a id="artistIgIcon" href="https://www.instagram.com/wild_coma/">
            <FaInstagram />
          </a>
        </h1>
      </div>
      <p id="artistAbout">
        Rich began tattooing in 2005, opening Wild Wind with ten years of
        experience in the industry. He is well versed in a variety of tattoo
        styles. He earned his degree from the Rhode Island School of Design's
        illustration department. His fine arts background is evident in his
        tattoos, personal work, and the gallery-style design of the shop.
      </p>
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
          {richPhotos.map((tattoo, index) => (
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
