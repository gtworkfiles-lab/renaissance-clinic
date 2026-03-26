import { getContent, Locale } from "@/lib/cms";
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
import { FloatingActions } from "@/components/FloatingActions";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default async function Home({ params }: { params: { lang: string } }) {
  const content = await getContent(params.lang as Locale);

  if (!content) return null;

  return (
    <main className="min-h-screen bg-white relative">
      <Navigation menuItems={content.navigation.menuItems} metadata={content.metadata} />
      
      <div className="relative">
        <Hero content={content.hero} />
        
        {/* Месенджери під Hero */}
        <div className="flex flex-col items-center justify-center -mt-12 md:-mt-20 mb-12 relative z-10">
          <p className="text-white/80 text-sm mb-4 font-medium drop-shadow-md uppercase tracking-wider">
            {params.lang === 'ua' ? 'Безкоштовна консультація:' : params.lang === 'ru' ? 'Бесплатная консультация:' : 'Free consultation:'}
          </p>
          <div className="flex gap-5">
            <a href={content.contacts.socials.viber} className="hover:scale-110 transition-transform bg-white rounded-full p-0.5 shadow-xl">
               <Image src="/icons/round viber-color-svgrepo-com.svg" alt="Viber" width={56} height={56} />
            </a>
            <a href={content.contacts.socials.telegram} className="hover:scale-110 transition-transform bg-white rounded-full p-0.5 shadow-xl">
               <Image src="/icons/round telegram-svgrepo-com.svg" alt="Telegram" width={56} height={56} />
            </a>
            <a href={content.contacts.socials.whatsapp} className="hover:scale-110 transition-transform bg-white rounded-full p-0.5 shadow-xl">
               <Image src="/icons/round whatsapp-svgrepo-com.svg" alt="WhatsApp" width={56} height={56} />
            </a>
          </div>
        </div>
      </div>
      
      <Services items={content.services.map((s: any) => ({...s, link: `/${params.lang}/services/${s.id}`}))} />
      <Features items={content.features} />
      <Timeline items={content.steps} />
      
      <section id="conditions"><Gallery items={content.gallery} /></section>
      <section id="reviews"><Reviews items={content.reviews} /></section>

      <Articles items={content.articles} />
      <FAQ items={content.faq} />
      <FamilyHelp content={content.helpForFamily} />
      <ContactForm content={content.form} />

      {/* Контакти */}
      <section id="contacts" className="py-20 md:py-24 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">
              {params.lang === 'ua' ? 'Наші контакти у Чернівцях' : params.lang === 'ru' ? 'Наши контакты в Черновцах' : 'Our Contacts'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Блок з телефоном та месенджерами */}
                <div className="p-10 bg-white rounded-[40px] shadow-sm border border-gray-100 flex flex-col items-center">
                    <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mb-6"><Phone size={24} /></div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                      {params.lang === 'ua' ? 'Цілодобово' : params.lang === 'ru' ? 'Круглосуточно' : '24/7'}
                    </h3>
                    <a href={`tel:${content.contacts.rawPhone}`} className="text-2xl font-bold text-gray-900 hover:text-red-600 transition-colors mb-6 tracking-tighter">
                      {content.contacts.phone}
                    </a>
                    
                    {/* Додані іконки месенджерів */}
                    <div className="flex gap-4 pt-4 border-t border-gray-50 w-full justify-center">
                      <a href={content.contacts.socials.viber} className="hover:scale-110 transition-transform">
                        <Image src="/icons/round viber-color-svgrepo-com.svg" alt="Viber" width={40} height={40} />
                      </a>
                      <a href={content.contacts.socials.telegram} className="hover:scale-110 transition-transform">
                        <Image src="/icons/round telegram-svgrepo-com.svg" alt="Telegram" width={40} height={40} />
                      </a>
                      <a href={content.contacts.socials.whatsapp} className="hover:scale-110 transition-transform">
                        <Image src="/icons/round whatsapp-svgrepo-com.svg" alt="WhatsApp" width={40} height={40} />
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
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                      {params.lang === 'ua' ? 'Адреса' : params.lang === 'ru' ? 'Адрес' : 'Address'}
                    </h3>
                    <p className="text-lg font-semibold text-gray-900 leading-relaxed">{content.contacts.address}</p>
                </div>
            </div>
        </div>
      </section>

      {/* Клієнтські кнопки та трекінг */}
      <FloatingActions phone={content.contacts.phone} rawPhone={content.contacts.rawPhone} />

      <footer className="py-10 text-center text-gray-400 text-sm bg-gray-50 border-t border-gray-100">
        &copy; {new Date().getFullYear()} {content.metadata.siteName}
      </footer>
    </main>
  );
}