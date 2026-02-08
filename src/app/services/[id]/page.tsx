import { getContent } from "@/lib/cms";
import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle, Phone, Clock, ShieldCheck, Heart, Camera, Home, MessageCircle } from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ServicePage({ params }: Props) {
  const { id } = await params; 
  const content = await getContent();
  const service = content.services.find((s: any) => s.id === id);

  if (!service) {
    notFound();
  }

  const galleryImages = ["/gallery/1.jpg", "/gallery/2.jpg", "/gallery/3.jpg", "/gallery/4.jpg"];

  return (
    <main className="min-h-screen bg-white relative">
      <Navigation menuItems={content.navigation.menuItems} metadata={content.metadata} />
      
      {/* 1. Hero Section з месенджерами */}
      <div className="relative pt-40 pb-20 bg-gradient-to-b from-teal-50 to-white px-4 text-center md:text-left">
        <div className="max-w-4xl mx-auto">
          <Link href="/#services" className="inline-flex items-center gap-2 text-teal-600 font-bold mb-8 hover:-translate-x-1 transition-all">
            <ArrowLeft size={20} /> Всі напрямки
          </Link>
          <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight leading-none">
            {service.title} <span className="text-teal-600 block md:inline">у Чернівцях</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10 font-medium">
            {service.desc}
          </p>
          
          {/* Швидкі месенджери як на головній */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 items-center">
            <p className="w-full md:w-auto text-gray-500 font-medium mb-2 md:mb-0 mr-4">Отримати безкоштовну консультацію у месенджері:</p>
            <a href="viber://chat?number=+380684209440" className="p-3 bg-white shadow-md rounded-full hover:scale-110 transition-transform border border-gray-100">
              <Image src="/icons/viber.svg" alt="Viber" width={32} height={32} />
            </a>
            <a href="https://t.me/your_telegram" className="p-3 bg-white shadow-md rounded-full hover:scale-110 transition-transform border border-gray-100">
              <Image src="/icons/telegram.svg" alt="Telegram" width={32} height={32} />
            </a>
            <a href="https://wa.me/380684209440" className="p-3 bg-white shadow-md rounded-full hover:scale-110 transition-transform border border-gray-100">
              <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={32} height={32} />
            </a>
          </div>
        </div>
      </div>

      <div className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Текст статті */}
          <div className="prose prose-lg max-w-none text-gray-700 mb-20 whitespace-pre-line leading-relaxed font-normal">
            {service.fullDesc}
          </div>

          {/* Галерея атмосфери */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Home className="text-teal-600" size={28} />
              <h2 className="text-3xl font-bold text-gray-900">Простір нашого центру</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((img, index) => (
                <div key={index} className="relative h-48 rounded-[30px] overflow-hidden border border-gray-100 shadow-sm">
                  <Image src={img} alt="Умови проживання" fill className="object-cover" sizes="25vw" />
                </div>
              ))}
            </div>
          </div>

          {/* Переваги */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {[
              { icon: <ShieldCheck className="text-teal-600" size={32}/>, title: "Безкоштовна консультація", desc: "Перша розмова ні до чого не зобов'язує" },
              { icon: <Clock className="text-teal-600" size={32}/>, title: "Анонімно 24/7", desc: "Ми на зв'язку в будь-який час доби" },
              { icon: <Heart className="text-teal-600" size={32}/>, title: "Безпечне місце", desc: "Затишна атмосфера для вашого відновлення" }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white border border-gray-100 rounded-[40px] text-center shadow-sm">
                <div className="mb-4 inline-block">{item.icon}</div>
                <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Кнопка дії */}
          <div className="text-center bg-teal-600 rounded-[60px] p-12 text-white shadow-2xl relative">
            <h3 className="text-3xl md:text-4xl font-black mb-6">Допомога поруч</h3>
            <p className="text-xl mb-10 opacity-90 max-w-xl mx-auto italic">
              «Залишіть заявку — ми зателефонуємо протягом 15 хвилин. Це повністю безкоштовно та анонімно.»
            </p>
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

      {/* Плаваюча червона кнопка виклику для мобілок (повернуто) */}
      <a 
        href={`tel:${content.contacts.rawPhone}`}
        className="fixed bottom-6 right-6 z-50 p-5 bg-red-600 text-white rounded-full shadow-2xl hover:bg-red-700 transition-colors md:p-6 animate-bounce"
        aria-label="Зателефонувати нам"
      >
        <Phone size={28} fill="currentColor" />
      </a>

      <footer className="py-12 text-center text-gray-400 text-sm border-t border-gray-50">
        &copy; {new Date().getFullYear()} {content.metadata.siteName} • Чернівці
      </footer>
    </main>
  );
}