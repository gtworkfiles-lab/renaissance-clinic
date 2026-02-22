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

const trackGAEvent = (action: string, label: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, {
      event_category: "Contact",
      event_label: label,
    });
  }
};

export default function Home() {
  const [content, setContent] = useState<any>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    getContent().then(data => {
      if (data) {
        if (data.hero) {
          data.hero.title = "Лікування алкоголізму та наркоманії у Чернівцях";
          data.hero.subtitle = "Анонімна допомога 24/7. Отримайте безкоштовну консультацію нарколога прямо зараз. Понад 15 років досвіду.";
        }
        setContent(data);
      }
    });

    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!content) return <div className="min-h-screen bg-white" />;

  return (
    <main className="min-h-screen bg-white relative">
      <Navigation menuItems={content.navigation.menuItems} metadata={content.metadata} />
      
      <div className="relative">
        {content.hero && <Hero content={content.hero} />}
        
        {/* Кнопки месенджерів під Hero */}
        <div className="flex flex-col items-center justify-center -mt-12 md:-mt-20 mb-12 relative z-10">
          <p className="text-white/80 text-sm mb-4 font-medium drop-shadow-md uppercase tracking-wider">Безкоштовна консультація:</p>
          <div className="flex gap-5">
            <a href={content.contacts.socials.viber} onClick={() => trackGAEvent("click_viber", "Hero")} className="hover:scale-110 transition-transform">
               <Image src="/icons/round viber-color-svgrepo-com.svg" alt="Viber" width={56} height={56} className="shadow-xl rounded-full bg-white p-0.5" />
            </a>
            <a href={content.contacts.socials.telegram} onClick={() => trackGAEvent("click_telegram", "Hero")} className="hover:scale-110 transition-transform">
               <Image src="/icons/round telegram-svgrepo-com.svg" alt="Telegram" width={56} height={56} className="shadow-xl rounded-full bg-white p-0.5" />
            </a>
          </div>
        </div>
      </div>
      
      <Services items={content.services.map((s: any) => ({...s, link: `/services/${s.id}`}))} />
      <Features items={content.features} />
      <Timeline items={content.steps} />
      
      <section id="conditions"><Gallery items={content.gallery} /></section>
      <section id="reviews"><Reviews items={content.reviews} /></section>
      <Articles items={content.articles} />
      <FAQ items={content.faq} />
      <FamilyHelp content={content.helpForFamily} />
      <ContactForm content={content.form} />

      <section id="contacts" className="py-20 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-16">Наші контакти</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-10 bg-white rounded-[40px] shadow-sm flex flex-col items-center">
                    <Phone className="text-teal-600 mb-6" size={32} />
                    <a href={`tel:${content.contacts.rawPhone}`} onClick={() => trackGAEvent("click_phone", "Contacts Page")} className="text-2xl font-bold hover:text-red-600 transition-colors">{content.contacts.phone}</a>
                </div>
                <div className="p-10 bg-white rounded-[40px] shadow-sm flex flex-col items-center">
                    <Mail className="text-teal-600 mb-6" size={32} />
                    <p className="text-lg font-semibold">{content.contacts.email}</p>
                </div>
                <div className="p-10 bg-white rounded-[40px] shadow-sm flex flex-col items-center">
                    <MapPin className="text-teal-600 mb-6" size={32} />
                    <p className="text-lg font-semibold">{content.contacts.address}</p>
                </div>
            </div>
        </div>
      </section>

      {/* Плаваючі кнопки */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-4">
        <button onClick={scrollToTop} className={`p-4 bg-white rounded-full shadow-lg transition-all ${showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none"}`}><ChevronUp /></button>

        {/* ЧЕРВОНА ТРУБКА: md:hidden приховує на десктопі */}
        <a 
          href={`tel:${content.contacts.rawPhone}`}
          onClick={() => trackGAEvent("click_phone", "Floating Button")}
          className="md:hidden p-5 bg-red-600 text-white rounded-full shadow-2xl animate-bounce"
        >
          <Phone size={32} fill="currentColor" />
        </a>
      </div>

      <footer className="py-10 text-center text-gray-400 text-sm bg-gray-50 border-t">&copy; {new Date().getFullYear()} Ренесанс Центр</footer>
    </main>
  );
}