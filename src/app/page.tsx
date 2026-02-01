"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ContactForm } from "@/components/ContactForm";
import { siteContent } from "@/data/content";

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Створюємо безпечні об'єкти, щоб компоненти не падали
  const safeMetadata = siteContent?.metadata || { siteName: "Ренесанс Центр" };
  const safeNav = siteContent?.navigation?.menuItems || [];
  const safeHero = siteContent?.hero || { 
    title: "Ренесанс Центр", 
    subtitle: "Реабілітація у Чернівцях",
    ctaButton: { label: "Контакти", href: "#contact" } 
  };
  const safeServices = siteContent?.services?.items || [];

  return (
    <main className="relative min-h-screen">
      {/* Передаємо вже перевірені дані */}
      <Navigation 
        menuItems={safeNav} 
        siteName={safeMetadata.siteName} 
      />

      <section id="home">
        <Hero content={safeHero} />
      </section>

      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
            {siteContent?.services?.title || "Наші послуги"}
          </h2>
          <Services items={safeServices} />
        </div>
      </section>

      <section id="contact" className="py-24 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Зв'яжіться з нами</h2>
          <p className="mb-12 text-teal-100 max-w-2xl mx-auto">
            Отримайте анонімну консультацію в Ренесанс Центр прямо зараз. 
            Ми працюємо цілодобово у Чернівцях.
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-start text-left">
            <div className="bg-white p-8 rounded-3xl shadow-xl text-slate-900">
              <ContactForm />
            </div>
            <div className="space-y-6 pt-8">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-teal-200">Адреса:</h3>
                <p className="text-lg">{siteContent?.contact?.address || "м. Чернівці"}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-teal-200">Телефон:</h3>
                <p className="text-2xl font-bold">{siteContent?.contact?.phone || "+38 (068) 420 94 40"}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-teal-200">Email:</h3>
                <p className="text-lg">{siteContent?.contact?.email || "maxrenes2020@gmail.com"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 text-center">
        <p className="text-slate-400">
          © {new Date().getFullYear()} {safeMetadata.siteName}. Чернівці.
        </p>
      </footer>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 bg-teal-500 text-white rounded-full shadow-2xl transition-all duration-300 ${
          showScroll ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <ChevronUp size={24} />
      </button>
    </main>
  );
}