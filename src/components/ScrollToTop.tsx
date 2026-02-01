"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-8 z-[99] p-3 bg-teal-600 text-white rounded-full shadow-2xl transition-all hover:bg-teal-500 hover:scale-110 active:scale-95 animate-in fade-in zoom-in duration-300"
          aria-label="Вгору"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
}