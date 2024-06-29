import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { PiArrowSquareRight, PiArrowSquareLeft } from "react-icons/pi";
import { tattooPhotos } from "../../tattooPhotos";

import "./tattoo.css";

export default function Tattoos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % tattooPhotos.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + tattooPhotos.length) % tattooPhotos.length
    );
  };

  const currentImageObj =
    tattooPhotos.length > 0 ? tattooPhotos[currentIndex] : null;

  const imageurl = currentImageObj
    ? new URL(currentImageObj.image, import.meta.url).href
    : "";

  function TattooCard({ tattoo, onClick }) {
    // Construct the full URL for the image using the URL constructor
    const imageUrl = new URL(tattoo.image, import.meta.url).href;
    return (
      <img
        className="indicator"
        src={imageUrl}
        alt="Tattoo"
        onClick={() => onClick(tattooPhotos.indexOf(tattoo))}
      />
    );
  }

  return (
    <main id="tattoos">
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
          {tattooPhotos.map((tattoo, index) => (
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