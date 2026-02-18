"use client";

import { getContent } from "@/lib/cms";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Features } from "@/components/Features";
import { Timeline } from "@/components/Timeline";
import { Gallery } from "@/components/Gallery";
import { FamilyHelp } from "@/components/FamilyHelp";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { Articles } from "@/components/Articles";
import Image from "next/image";
import { Phone, Mail, MapPin, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [content, setContent] = useState<any>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    getContent().then(data => {
      if (data) {
        // Оновлюємо тексти для Hero анонімно, щоб не ламати структуру
        if (data.hero) {
          data.hero.title = "Лікування алкоголізму та наркоманії у Чернівцях";
          data.hero.subtitle = "Анонімна допомога 24/7. Отримайте безкоштовну консультацію нарколога прямо зараз. Понад 15 років досвіду.";
          
          // ФІКС: Перевіряємо обидва можливі варіанти назви поля кнопки
          if (data.hero.ctaButton) {
            data.hero.ctaButton.label = "Безкоштовна консультація";
          }
          if (data.hero.cta) {
            data.hero.cta = "Безкоштовна консультація";
          }
        }
        setContent(data);
      }
    });

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!content) return <div className="min-h-screen bg-white" />;

  return (
    <main className="min-h-screen bg-white relative">
      <Navigation menuItems={content.navigation.menuItems} metadata={content.metadata} />
      
      <div className="relative">
        {content.hero && <Hero content={content.hero} />}
        
        <div className="flex flex-col items-center justify-center -mt-12 md:-mt-20 mb-12 relative z-10">
          <p className="text-white/80 text-sm mb-4 font-medium drop-shadow-md uppercase tracking-wider">Безкоштовна консультація у месенджерах:</p>
          <div className="flex gap-5">
            <a href={content.contacts.socials.viber} className="hover:scale-110 transition-transform">
               <Image src="/icons/round viber-color-svgrepo-com.svg" alt="Viber" width={56} height={56} className="shadow-xl rounded-full bg-white p-0.5" />
            </a>
            <a href={content.contacts.socials.telegram} className="hover:scale-110 transition-transform">
               <Image src="/icons/round telegram-svgrepo-com.svg" alt="Telegram" width={56} height={56} className="shadow-xl rounded-full bg-white p-0.5" />
            </a>
            <a href={content.contacts.socials.whatsapp} className="hover:scale-110 transition-transform">
               <Image src="/icons/round whatsapp-svgrepo-com.svg" alt="WhatsApp" width={56} height={56} className="shadow-xl rounded-full bg-white p-0.5" />
            </a>
          </div>
        </div>
      </div>
      
      <Services items={content.services.map((s: any) => ({...s, link: `/services/${s.id}`}))} />
      <Features items={content.features} />
      <Timeline items={content.steps} />
      
      <section id="conditions">
        <Gallery items={content.gallery} />
      </section>

      <section id="reviews">
        <Reviews items={content.reviews} />
      </section>

      <Articles items={content.articles} />
      <FAQ items={content.faq} />
      <FamilyHelp content={content.helpForFamily} />
      <ContactForm content={content.form} />

      <section id="contacts" className="py-20 md:py-24 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">Наші контакти у Чернівцях</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-10 bg-white rounded-[40px] shadow-sm border border-gray-100 flex flex-col items-center">
                    <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mb-6"><Phone size={24} /></div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Цілодобово</h3>
                    <a href={`tel:${content.contacts.rawPhone}`} className="text-2xl font-bold text-gray-900 hover:text-red-600 transition-colors mb-8 tracking-tighter">{content.contacts.phone}</a>
                    <div className="flex gap-4">
                        <a href={content.contacts.socials.viber} className="hover:scale-110 transition-transform">
                            <Image src="/icons/round viber-color-svgrepo-com.svg" alt="Viber" width={42} height={42} />
                        </a>
                        <a href={content.contacts.socials.telegram} className="hover:scale-110 transition-transform">
                            <Image src="/icons/round telegram-svgrepo-com.svg" alt="Telegram" width={42} height={42} />
                        </a>
                        <a href={content.contacts.socials.whatsapp} className="hover:scale-110 transition-transform">
                            <Image src="/icons/round whatsapp-svgrepo-com.svg" alt="WhatsApp" width={42} height={42} />
                        </a>
                    </div>
                </div>
                <div className="p-10 bg-white rounded-[40px] shadow-sm border border-gray-100 flex flex-col items-center">
                    <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mb-6"><Mail size={24} /></div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Email</h3>
                    <a href={`mailto:${content.contacts.email}`} className="text-lg font-semibold text-gray-900">{content.contacts.email}</a>
                </div>
                <div className="p-10 bg-white rounded-[40px] shadow-sm border border-gray-100 flex flex-col items-center">
                    <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mb-6"><MapPin size={24} /></div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Адреса</h3>
                    <p className="text-lg font-semibold text-gray-900 leading-relaxed">{content.contacts.address}</p>
                </div>
            </div>
        </div>
      </section>

      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[9999] flex flex-col gap-4">
        <button
          onClick={scrollToTop}
          className={`p-4 bg-white text-gray-600 rounded-full shadow-lg border border-gray-100 transition-all duration-300 ${
            showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
          } hover:bg-gray-50 active:scale-95`}
        >
          <ChevronUp size={24} />
        </button>

        <a 
          href={`tel:${content.contacts.rawPhone}`}
          className="p-5 bg-red-600 text-white rounded-full shadow-[0_10px_25px_rgba(220,38,38,0.4)] hover:scale-110 active:scale-95 transition-all flex items-center justify-center group relative"
        >
          <span className="absolute inset-0 rounded-full bg-red-600 animate-ping opacity-25 group-hover:hidden"></span>
          <Phone size={32} fill="currentColor" className="relative z-10 animate-pulse" />
        </a>
      </div>

      <footer className="py-10 text-center text-gray-400 text-sm bg-gray-50 border-t border-gray-100">
        &copy; {new Date().getFullYear()} Ренесанс Центр • Безкоштовна консультація 24/7
      </footer>
    </main>
  );
}