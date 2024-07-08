import { useState } from "react";

/**
 *
 * @function usePhotoGallery
 * @param photos
 * @returns functionality for the user to navigate forward and backward through tattoo photos
 */
const usePhotoGallery = (photos) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const currentImageObj = photos.length > 0 ? photos[currentIndex] : null;

  /*const imageUrl = currentImageObj
    ? new URL(currentImageObj.image, import.meta.url).href
    : "";*/

  const imageUrl = currentImageObj ? currentImageObj.image : "";

  return {
    currentIndex,
    setCurrentIndex,
    handleNext,
    handlePrev,
    currentImageObj,
    imageUrl,
  };
};

export default usePhotoGallery;
