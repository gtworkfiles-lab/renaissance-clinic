import { getContent, Locale } from "@/lib/cms";
import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle, Phone, Clock, ShieldCheck, Heart, Home } from "lucide-react";

interface Props {
  params: Promise<{ id: string; lang: string }>;
}

export default async function ServicePage({ params }: Props) {
  const { id, lang } = await params; 
  const content = await getContent(lang as Locale);
  const service = content.services.find((s: any) => s.id === id);

  if (!service) notFound();

  // Витягуємо переклади інтерфейсу з вашого cms.ts
  const ui = content.ui.servicePage;
  const galleryImages = ["/gallery/1.jpg", "/gallery/2.jpg", "/gallery/3.jpg", "/gallery/4.jpg"];

  return (
    <main className="min-h-screen bg-white relative">
      <Navigation menuItems={content.navigation.menuItems} metadata={content.metadata} />
      
      {/* Hero Section */}
      <div className="relative pt-40 pb-20 bg-gradient-to-b from-teal-50 to-white px-4">
        <div className="max-w-4xl mx-auto">
          <Link href={`/${lang}/#services`} className="inline-flex items-center gap-2 text-teal-600 font-bold mb-8 hover:-translate-x-1 transition-all">
            <ArrowLeft size={20} /> {ui.backLink}
          </Link>
          
          <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight leading-none">
            {service.title} <span className="text-teal-600">{ui.locationSuffix}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 font-medium italic border-l-4 border-teal-500 pl-6">
            {service.description || service.desc}
          </p>
          
          <div className="flex flex-wrap gap-4 items-center bg-white p-6 rounded-[30px] shadow-sm border border-gray-100 inline-flex">
            <p className="w-full md:w-auto text-gray-500 font-bold mr-2 text-sm uppercase tracking-wider">
              {ui.consultationLabel}
            </p>
            <div className="flex gap-4">
              <a href={content.contacts.socials.viber} className="hover:scale-110 transition-transform">
                <Image src="/icons/round viber-color-svgrepo-com.svg" alt="Viber" width={45} height={45} />
              </a>
              <a href={content.contacts.socials.telegram} className="hover:scale-110 transition-transform">
                <Image src="/icons/round telegram-svgrepo-com.svg" alt="Telegram" width={45} height={45} />
              </a>
              <a href={content.contacts.socials.whatsapp} className="hover:scale-110 transition-transform">
                <Image src="/icons/round whatsapp-svgrepo-com.svg" alt="WhatsApp" width={45} height={45} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Текст статті */}
          <div className="prose prose-lg max-w-none text-gray-700 mb-20 whitespace-pre-line leading-relaxed font-normal">
            {service.fullContent || service.fullDesc}
          </div>

          {/* Галерея */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-teal-100 p-2 rounded-xl text-teal-600">
                <Home size={28} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">{ui.atmosphereTitle}</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((img, index) => (
                <div key={index} className="relative h-48 rounded-[30px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all group">
                  <Image src={img} alt={ui.atmosphereTitle} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="25vw" />
                </div>
              ))}
            </div>
          </div>

          {/* Блок переваг (Дані з cms.ts) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {ui.benefits.map((item: any, i: number) => {
              const icons = [<ShieldCheck key="s" size={32}/>, <Clock key="c" size={32}/>, <Heart key="h" size={32}/>];
              return (
                <div key={i} className="p-8 bg-white border border-gray-100 rounded-[40px] text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-4 inline-block text-teal-600">{icons[i]}</div>
                  <h4 className="font-bold text-xl mb-2 text-gray-900">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Чорний блок "Що ми пропонуємо" */}
          <div className="bg-gray-900 rounded-[50px] p-10 md:p-16 mb-20 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">{ui.offersTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.features.map((item: string) => (
                <div key={item} className="flex items-center gap-4">
                  <CheckCircle className="text-teal-400 shrink-0" size={24} />
                  <span className="text-lg opacity-90 font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA блок */}
          <div className="text-center bg-teal-600 rounded-[60px] p-12 text-white shadow-2xl relative">
            <h3 className="text-3xl md:text-4xl font-black mb-6">{ui.ctaTitle}</h3>
            <p className="text-xl mb-10 opacity-90 max-w-xl mx-auto">{ui.ctaDesc}</p>
            <a 
              href={`tel:${content.contacts.rawPhone}`} 
              className="inline-flex items-center gap-4 bg-white text-teal-600 px-14 py-6 rounded-full font-black text-2xl hover:bg-gray-100 transition-all shadow-xl active:scale-95"
            >
              <Phone size={28} fill="currentColor" /> {content.contacts.phone}
            </a>
          </div>
        </div>
      </div>

      <ContactForm content={content.form} />
      
      <footer className="py-12 text-center text-gray-400 text-sm border-t border-gray-50">
        &copy; {new Date().getFullYear()} {content.metadata.siteName}
      </footer>
    </main>
  );
}