import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from 'react-icons/fa';

export default function ScrollToTop() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    setShowScrollButton(window.scrollY > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    showScrollButton && (
        <FaArrowCircleUp size={28} className="scroll-to-top-btn"
        onClick={scrollToTop}
        style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1, cursor: 'pointer'}}/>
    )
  );
}
