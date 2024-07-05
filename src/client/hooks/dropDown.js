import { useState, useCallback } from "react";

/**
 * @function useDropdown open and close drop down menu
 */
const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    toggleDropdown,
    closeDropdown,
  };
};

export default useDropdown;
