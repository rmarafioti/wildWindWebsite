import { useState } from "react";

/**
 * @function useDropdown open and close drop down menu
 */
const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    toggleDropdown,
    closeDropdown,
  };
};

export default useDropdown;
