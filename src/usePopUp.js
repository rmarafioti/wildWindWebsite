import { useState } from "react";

function usePopUp() {
  const [popUp, setPopUp] = useState(false);
  const [popUpContent, setPopUpContent] = useState(null);

  const openPopUp = (content) => {
    setPopUpContent(content);
    setPopUp(true);
  };

  const closePopUp = () => {
    setPopUp(false);
    setPopUpContent(null);
  };

  return {
    popUp,
    popUpContent,
    openPopUp,
    closePopUp,
  };
}

export default usePopUp;
