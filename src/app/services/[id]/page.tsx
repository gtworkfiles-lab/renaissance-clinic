import { getContent } from "@/lib/cms";
import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle, Phone, Clock, ShieldCheck, Heart, Home } from "lucide-react";

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
      
      {/* 1. Hero Section з вашими новими іконками */}
      <div className="relative pt-40 pb-20 bg-gradient-to-b from-teal-50 to-white px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/#services" className="inline-flex items-center gap-2 text-teal-600 font-bold mb-8 hover:-translate-x-1 transition-all">
            <ArrowLeft size={20} /> Всі напрямки допомоги
          </Link>
          <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight leading-none">
            {service.title} <span className="text-teal-600">у Чернівцях</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 font-medium">
            {service.desc}
          </p>
          
          <div className="flex flex-wrap gap-4 items-center bg-white p-6 rounded-[30px] shadow-sm border border-gray-100 inline-flex">
            <p className="w-full md:w-auto text-gray-500 font-bold mr-2 text-sm uppercase tracking-wider">Безкоштовна консультація:</p>
            <div className="flex gap-4">
              <a href="viber://chat?number=+380684209440" className="hover:scale-110 transition-transform">
                <Image src="/icons/round viber-color-svgrepo-com.svg" alt="Viber" width={45} height={45} />
              </a>
              <a href="https://t.me/your_telegram" className="hover:scale-110 transition-transform">
                <Image src="/icons/round telegram-svgrepo-com.svg" alt="Telegram" width={45} height={45} />
              </a>
              <a href="https://wa.me/380684209440" className="hover:scale-110 transition-transform">
                <Image src="/icons/round whatsapp-svgrepo-com.svg" alt="WhatsApp" width={45} height={45} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          
          <div className="prose prose-lg max-w-none text-gray-700 mb-20 whitespace-pre-line leading-relaxed">
            {service.fullDesc}
          </div>

          {/* Галерея */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Home className="text-teal-600" size={28} />
              <h2 className="text-3xl font-bold text-gray-900 text-rehab">Атмосфера нашого центру</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((img, index) => (
                <div key={index} className="relative h-48 rounded-[30px] overflow-hidden border border-gray-100 shadow-sm">
                  <Image src={img} alt="Умови проживання" fill className="object-cover" sizes="25vw" />
                </div>
              ))}
            </div>
          </div>

          {/* Переваги з акцентом на БЕЗКОШТОВНО */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {[
              { icon: <ShieldCheck className="text-teal-600" size={32}/>, title: "Безкоштовна допомога", desc: "Первинна консультація та розробка плану — 0 грн" },
              { icon: <Clock className="text-teal-600" size={32}/>, title: "Анонімно 24/7", desc: "Ми поруч у будь-який час, без жодних черг" },
              { icon: <Heart className="text-teal-600" size={32}/>, title: "Турбота", desc: "Затишне середовище для відновлення сил" }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white border border-gray-100 rounded-[40px] text-center shadow-sm">
                <div className="mb-4 inline-block">{item.icon}</div>
                <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Заклик до дії */}
          <div className="text-center bg-teal-600 rounded-[60px] p-12 text-white shadow-2xl relative overflow-hidden">
            <h3 className="text-3xl md:text-5xl font-black mb-6">Допомога поруч</h3>
            <p className="text-xl mb-10 opacity-90 max-w-xl mx-auto">
              Залиште заявку на безкоштовну анонімну розмову. Ми допоможемо знайти вихід.
            </p>
            <a 
              href={`tel:${content.contacts.rawPhone}`} 
              className="inline-flex items-center gap-4 bg-white text-teal-600 px-14 py-6 rounded-full font-black text-2xl hover:scale-105 transition-all shadow-xl"
            >
              <Phone size={28} fill="currentColor" /> {content.contacts.phone}
            </a>
          </div>
        </div>
      </div>

      <ContactForm content={content.form} />

      {/* 2. Повертаємо червону кнопку виклику */}
      <a 
        href={`tel:${content.contacts.rawPhone}`}
        className="fixed bottom-8 right-8 z-50 p-6 bg-red-600 text-white rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:bg-red-700 transition-all animate-bounce md:hidden"
        aria-label="Безкоштовний дзвінок"
      >
        <Phone size={32} fill="currentColor" />
      </a>

      <footer className="py-12 text-center text-gray-400 text-sm border-t border-gray-50">
        &copy; {new Date().getFullYear()} {content.metadata.siteName} • Безкоштовна консультація
      </footer>
    </main>
  );
}