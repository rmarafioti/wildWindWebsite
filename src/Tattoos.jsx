import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import tattooPhotos from "./images/tattooPhotos";

export default function Tattoos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tattooPhotos.length);
  };

  const currentImageObj =
    tattooPhotos.length > 0 ? tattooPhotos[currentIndex] : null;

  const imageurl = currentImageObj
    ? new URL(currentImageObj.image, import.meta.url).href
    : "";

  function TattooCard({ tattoo }) {
    // Construct the full URL for the image using the URL constructor
    const imageUrl = new URL(tattoo.image, import.meta.url).href;
    return <img src={imageUrl} alt="Tattoo" />;
  }

  return (
    <>
      <h1>TATTOOS</h1>
      <h2>Tattooing by Rich Marafioti</h2>
      <p>
        Rich began tattooing in 2005, opening Wild Wind with ten years of
        experience in the industry. He is well versed in a variety of tattoo
        styles. He earned his degree from the Rhode Island School of Design's
        illustration department. His fine arts background is evident in his
        tattoos, personal work, and the gallery-style design of the shop.
      </p>
      <h2>
        <a href="https://www.instagram.com/wild_coma/">
          <FaInstagram />
        </a>
      </h2>
      <div>
        <img src={imageurl} alt="tattoo portfolio images" />
        <button onClick={handleClick}>browse tattoos</button>
      </div>
      <ul>
        {tattooPhotos.map((tattoo) => (
          <TattooCard key={tattoo.id} tattoo={tattoo} />
        ))}
      </ul>
    </>
  );
}
