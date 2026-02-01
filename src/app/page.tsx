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
import { Phone, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    getContent().then(data => {
      if (data && data.faq) {
        data.faq = data.faq.map((item: any) => 
          item.question.includes("триває курс") 
            ? { ...item, answer: "Рекомендований курс для стабільного результату і відновлення — від 3 місяців." }
            : item
        );
      }
      setContent(data);
    });
  }, []);

  if (!content) return <div className="min-h-screen bg-white" />;

  return (
    <main className="min-h-screen bg-white relative">
      <Navigation menuItems={content.navigation.menuItems} metadata={content.metadata} />
      
      {content.hero && <Hero content={content.hero} />}
      
      {/* Оновлені посилання для карток послуг */}
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наші контакти у Чернівцях</h2>
            <p className="text-gray-600">Ми працюємо цілодобово для вашої допомоги</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-8 md:p-10 bg-white rounded-[30px] md:rounded-[40px] shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mb-6">
                <Phone size={24} />
              </div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Телефон</h3>
              <a href={`tel:${content.contacts.rawPhone}`} className="text-xl md:text-2xl font-bold text-gray-900 hover:text-red-600 transition-colors mb-8">
                {content.contacts.phone}
              </a>
              
              <div className="flex gap-4">
                <a href={content.contacts.socials.viber} className="w-12 h-12 flex items-center justify-center bg-[#7360f2] text-white rounded-2xl hover:scale-110 transition-transform shadow-lg shadow-purple-100">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.129 15.111c-.26-.14-.52-.28-1.037-.534-.516-.253-.8-.394-1.11-.141-.312.253-.623.59-.884.843-.26.253-.52.28-.908.113-.388-.168-1.656-.612-3.142-1.936-1.157-1.03-1.937-2.301-2.164-2.693-.227-.393-.026-.605.17-.801.176-.176.388-.448.583-.673.194-.225.26-.381.388-.633.13-.253.065-.478-.032-.674-.097-.197-.793-1.912-1.087-2.615-.286-.684-.575-.59-.79-.6-.197-.01-.423-.01-.649-.01-.227 0-.597.084-.908.422-.311.337-1.187 1.164-1.187 2.835 0 1.671.843 3.284 2.21 4.33 1.368 1.045 5.578 4.33 11.238 4.33a5.572 5.572 0 0 0 1.938-.337c.583-.225 1.186-.674 1.444-1.264.258-.59.258-1.107.182-1.206-.076-.1-.284-.183-.544-.323z" fill="currentColor"/>
                    <path d="M12 2C6.477 2 2 6.03 2 11c0 1.42.368 2.76 1.01 3.931l-1.01 3.569 3.69-.968A9.873 9.873 0 0 0 12 20c5.523 0 10-4.03 10-9s-4.477-9-10-9zm2.46 13.04c-.378.115-.77.168-1.16.16a3.868 3.868 0 0 1-2.45-.88c-1.22-.93-1.97-2.36-1.97-3.86 0-1.487.77-2.222 1.05-2.522.28-.3.62-.375.82-.375.2 0 .4.004.57.012.19.01.45-.07.7-.674.27-.645.91-2.21 1-2.422.09-.212.15-.41.06-.583-.09-.174-.15-.37-.24-.543a.524.524 0 0 0-.34-.28c-.27-.083-.6-.16-.89-.16-.88 0-2.41 1.258-2.41 4.14 0 2.882 1.98 5.764 4.15 7.422.3.23.63.435.98.614.52.268.805.412 1.12.155.315-.256.63-.597.89-.854.26-.257.525-.284.915-.116.39.168.65.297 1.16.547.51.25.77.39.1.53z" fill="currentColor"/>
                  </svg>
                </a>
                <a href={content.contacts.socials.telegram} className="w-12 h-12 flex items-center justify-center bg-[#24A1DE] text-white rounded-2xl hover:scale-110 transition-transform shadow-lg shadow-blue-100">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.698.064-1.226-.461-1.901-.903-1.056-.693-1.652-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.324-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                </a>
                <a href={content.contacts.socials.whatsapp} className="w-12 h-12 flex items-center justify-center bg-[#25D366] text-white rounded-2xl hover:scale-110 transition-transform shadow-lg shadow-green-100">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
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