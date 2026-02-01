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

  // Логіка для появи стрілки "Вгору"
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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="relative min-h-screen">
      {/* Навігація */}
      <Navigation 
        menuItems={siteContent.navigation.menuItems} 
        siteName={siteContent.metadata.siteName} 
      />

      {/* Головний екран (Hero) */}
      <section id="home">
        <Hero content={siteContent.hero} />
      </section>

      {/* Послуги (SEO-оптимізовані) */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
            {siteContent.services.title}
          </h2>
          <Services items={siteContent.services.items} />
        </div>
      </section>

      {/* Контакти та форма */}
      <section id="contact" className="py-24 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Зв'яжіться з нами</h2>
          <p className="mb-12 text-teal-100 max-w-2xl mx-auto">
            Отримайте анонімну консультацію в Ренесанс Центр прямо зараз. 
            Ми працюємо цілодобово у Чернівцях.
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-start text-left">
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <ContactForm />
            </div>
            <div className="space-y-6 pt-8">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-teal-200">Адреса:</h3>
                <p className="text-lg">{siteContent.contact.address}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-teal-200">Телефон:</h3>
                <a href={`tel:${siteContent.contact.phone.replace(/\s+/g, '')}`} className="text-2xl font-bold hover:text-teal-300 transition-colors">
                  {siteContent.contact.phone}
                </a>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-teal-200">Email:</h3>
                <p className="text-lg">{siteContent.contact.email}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} {siteContent.metadata.siteName}. Усі права захищені. Чернівці.
          </p>
        </div>
      </footer>

      {/* Стрілка підняття вгору */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 bg-teal-500 text-white rounded-full shadow-2xl transition-all duration-300 hover:bg-teal-400 hover:scale-110 ${
          showScroll ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Вгору"
      >
        <ChevronUp size={24} />
      </button>
    </main>
  );
}