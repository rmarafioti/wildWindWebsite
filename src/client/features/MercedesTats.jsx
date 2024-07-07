import React from "react";
import { Helmet } from "react-helmet-async";
import usePhotoGallery from "../hooks/photoGallery";
import TattooCard from "./TattooCard";
import { FaInstagram } from "react-icons/fa";
import { PiArrowSquareRight, PiArrowSquareLeft } from "react-icons/pi";

import { mercedesPhotos } from "../content/tattooPhotos";

import "./styles/tattoo.css";

/**
 *
 * @component MercedesTats features a series of photos by way of tattooPhotos.js for the user to browse through. Thumbnail photo gallery showing each image is visible on desktop while only the main photo the user is currently viewing is visible in mobile
 */
export default function MercedesTats() {
  //usePhotoGallery hook imported from photoGallery.js
  const { setCurrentIndex, handleNext, handlePrev, imageUrl } =
    usePhotoGallery(mercedesPhotos);

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
          <a id="artistIgIcon" href="https://www.instagram.com/tattoomercy/">
            <FaInstagram />
          </a>
        </h1>
      </div>
      <p id="artistAbout">
        Driven by a passion for art, Mercedes' interest in tattooing began at a
        young age. She takes immense pride in every piece she creates,
        consistently striving to deliver her best effort in all her work. With a
        broad range of tattoo styles, Mercedes is always eager to take on new
        challenges. She has honed her craft to ensure her tattoos are
        consistently clean and meticulous, dedicating the time necessary to
        achieve this standard.
      </p>
      <section id="tattooSection">
        <div id="tattooSlide">
          <div id="arrowSection">
            <PiArrowSquareLeft className="arrow" onClick={handlePrev} />
          </div>
          <img
            className="mercedesTattoo"
            src={imageUrl}
            alt="tattoo portfolio images"
          />
          <div id="arrowSection">
            <PiArrowSquareRight className="arrow" onClick={handleNext} />
          </div>
        </div>
        <ul id="mercedesGallery">
          {mercedesPhotos.map((tattoo, index) => (
            <TattooCard
              key={index}
              tattoo={tattoo}
              onClick={setCurrentIndex}
              photos={mercedesPhotos}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
