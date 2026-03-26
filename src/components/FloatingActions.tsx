"use client";

import { useState, useEffect } from "react";
import { Phone, ChevronUp } from "lucide-react";

interface Props {
  phone: string;
  rawPhone: string;
}

export const FloatingActions = ({ phone, rawPhone }: Props) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const trackGAEvent = (action: string, label: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", action, {
        event_category: "Contact",
        event_label: label,
      });
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[9999] flex flex-col gap-4">
      {/* Кнопка Вгору */}
      <button 
        onClick={scrollToTop} 
        className={`p-4 bg-white text-gray-600 rounded-full shadow-lg border border-gray-100 transition-all duration-300 ${showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"} hover:bg-gray-50 active:scale-95`}
      >
        <ChevronUp size={24} />
      </button>

      {/* Кнопка швидкого дзвінка (тільки мобільні) */}
      <a 
        href={`tel:${rawPhone}`}
        onClick={() => trackGAEvent("click_phone", "Floating Button")}
        className="md:hidden p-5 bg-red-600 text-white rounded-full shadow-[0_10px_25px_rgba(220,38,38,0.4)] hover:scale-110 active:scale-95 transition-all flex items-center justify-center group relative"
      >
        <span className="absolute inset-0 rounded-full bg-red-600 animate-ping opacity-25 group-hover:hidden"></span>
        <Phone size={32} fill="currentColor" className="relative z-10 animate-pulse" />
      </a>
    </div>
  );
};