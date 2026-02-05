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
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    getContent().then(data => {
      if (data) {
        if (data.hero) {
          data.hero.title = "Лікування алкоголізму та наркоманії у Чернівцях";
          data.hero.subtitle = "Анонімна допомога 24/7. Отримайте безкоштовну консультацію нарколога прямо зараз. Понад 15 років досвіду.";
          if (data.hero.ctaButton) {
            data.hero.ctaButton.label = "Безкоштовна консультація";
          }
        }
        setContent(data);
      }
    });
  }, []);

  if (!content) return <div className="min-h-screen bg-white" />;

  return (
    <main className="min-h-screen bg-white relative">
      <Navigation menuItems={content.navigation.menuItems} metadata={content.metadata} />
      
      {/* Hero секція з акцентом на месенджери */}
      <div className="relative">
        {content.hero && <Hero content={content.hero} />}
        {/* Додатковий блок месенджерів під Hero кнопкою (позиціонування залежить від стилів Hero) */}
        <div className="flex flex-col items-center justify-center -mt-10 md:-mt-16 mb-10 relative z-10">
          <p className="text-gray-500 text-sm mb-3 font-medium">Або напишіть нам у месенджери:</p>
          <div className="flex gap-4">
            <a href={content.contacts.socials.viber} className="p-3 bg-white shadow-md rounded-full hover:scale-110 transition-transform text-[#7360f2]">
               <MessageCircle size={28} />
            </a>
            <a href={content.contacts.socials.telegram} className="p-3 bg-white shadow-md rounded-full hover:scale-110 transition-transform text-[#24A1DE]">
               <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.698.064-1.226-.461-1.901-.903-1.056-.693-1.652-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.324-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
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

      {/* Оновлений блок контактів з підписами кнопок */}
      <section id="contacts" className="py-20 md:py-24 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наші контакти у Чернівцях</h2>
            <p className="text-gray-600">Оберіть зручний спосіб для зв'язку. Ми відповімо миттєво.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-8 md:p-10 bg-white rounded-[30px] md:rounded-[40px] shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mb-6">
                <Phone size={24} />
              </div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Телефон 24/7</h3>
              <a href={`tel:${content.contacts.rawPhone}`} className="text-xl md:text-2xl font-bold text-gray-900 hover:text-red-600 transition-colors mb-8">
                {content.contacts.phone}
              </a>
              
              <div className="grid grid-cols-3 gap-3 w-full max-w-[240px]">
                <a href={content.contacts.socials.viber} className="flex flex-col items-center gap-2 group">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#7360f2] text-white rounded-2xl group-hover:scale-110 transition-transform shadow-lg shadow-purple-100">
                    <MessageCircle size={24} />
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Viber</span>
                </a>
                <a href={content.contacts.socials.telegram} className="flex flex-col items-center gap-2 group">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#24A1DE] text-white rounded-2xl group-hover:scale-110 transition-transform shadow-lg shadow-blue-100">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm4.962 7.224c.1-.002.321.023.465.14.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.698.064-1.226-.461-1.901-.903-1.056-.693-1.652-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.324-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Telegram</span>
                </a>
                <a href={content.contacts.socials.whatsapp} className="flex flex-col items-center gap-2 group">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#25D366] text-white rounded-2xl group-hover:scale-110 transition-transform shadow-lg shadow-green-100">
                    <MessageCircle size={24} />
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase">WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="p-8 md:p-10 bg-white rounded-[30px] md:rounded-[40px] shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mb-6">
                <Mail size={24} />
              </div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Email</h3>
              <a href={`mailto:${content.contacts.email}`} className="text-lg font-semibold text-gray-900 hover:text-teal-600 transition-colors">
                {content.contacts.email}
              </a>
            </div>

            <div className="p-8 md:p-10 bg-white rounded-[30px] md:rounded-[40px] shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Адреса</h3>
              <p className="text-lg font-semibold text-gray-900 leading-relaxed">
                {content.contacts.address}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Пульсуюча кнопка дзвінка */}
      <a 
        href={`tel:${content.contacts.rawPhone}`}
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[9999] p-5 bg-red-600 text-white rounded-full shadow-[0_10px_25px_rgba(220,38,38,0.4)] hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
      >
        <span className="absolute inset-0 rounded-full bg-red-600 animate-ping opacity-25 group-hover:hidden"></span>
        <Phone size={32} fill="currentColor" className="relative z-10 animate-pulse" />
      </a>

      <footer className="py-10 text-center text-gray-400 text-sm bg-gray-50 border-t border-gray-100">
        &copy; {new Date().getFullYear()} Ренесанс Центр. Всі права захищено.
      </footer>
    </main>
  );
}