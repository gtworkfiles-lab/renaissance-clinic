import { getContent } from "@/lib/cms";
import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle, Phone, Clock, ShieldCheck, Heart, Camera, Home } from "lucide-react";

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

  // Масив фото вашого центру (перевірте наявність у public/gallery)
  const galleryImages = [
    "/gallery/1.jpg",
    "/gallery/2.jpg",
    "/gallery/3.jpg",
    "/gallery/4.jpg"
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation menuItems={content.navigation.menuItems} metadata={content.metadata} />
      
      {/* Hero Section */}
      <div className="relative pt-40 pb-20 bg-gradient-to-b from-teal-50 to-white px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/#services" className="inline-flex items-center gap-2 text-teal-600 font-bold mb-8 hover:-translate-x-1 transition-all">
            <ArrowLeft size={20} /> Всі напрямки допомоги
          </Link>
          <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight leading-none">
            {service.title} <span className="text-teal-600 block md:inline">у Чернівцях</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl font-medium italic border-l-4 border-teal-500 pl-6">
            {service.desc}
          </p>
        </div>
      </div>

      <div className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Текст статті */}
          <div className="prose prose-lg max-w-none text-gray-700 mb-20 whitespace-pre-line leading-relaxed font-normal">
            {service.fullDesc}
          </div>

          {/* Блок галереї */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-teal-100 p-2 rounded-xl text-teal-600">
                <Home size={28} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Атмосфера нашого центру</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((img, index) => (
                <div key={index} className="relative h-48 rounded-[30px] overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 group">
                  <Image 
                    src={img} 
                    alt="Умови в рехабі" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-w-768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 mt-6 text-sm">Затишний простір для відновлення, де кожен почувається як удома</p>
          </div>

          {/* Переваги */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {[
              { icon: <ShieldCheck className="text-teal-600" size={32}/>, title: "Повна приватність", desc: "Жодних офіційних обліків чи розголосу" },
              { icon: <Clock className="text-teal-600" size={32}/>, title: "Поруч 24/7", desc: "Ми завжди на зв'язку та готові підтримати" },
              { icon: <Heart className="text-teal-600" size={32}/>, title: "Турбота", desc: "Створюємо умови для спокійного одужання" }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-teal-50/30 border border-teal-100/50 rounded-[40px] text-center md:text-left">
                <div className="mb-4 inline-block">{item.icon}</div>
                <h4 className="font-bold text-xl mb-2 text-gray-900">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Блок "Що ми пропонуємо" */}
          <div className="bg-gray-900 rounded-[50px] p-10 md:p-16 mb-20 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Що ми пропонуємо:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Плавне відновлення фізичного стану",
                "Індивідуальні бесіди з психологом",
                "Групи підтримки та дружня атмосфера",
                "Територія для прогулянок та активності",
                "Конфіденційний супровід після курсу",
                "Допомога близьким та консультації для родин"
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <CheckCircle className="text-teal-400 shrink-0" size={24} />
                  <span className="text-lg opacity-90 font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Заклик до дії */}
          <div className="text-center bg-teal-600 rounded-[60px] p-12 text-white shadow-2xl relative">
            <h3 className="text-3xl md:text-4xl font-black mb-6">Важливо почати вже сьогодні</h3>
            <p className="text-xl mb-10 opacity-90 max-w-xl mx-auto">Просто поговоріть з нами. Це анонімно і ні до чого вас не зобов'язує.</p>
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
        &copy; {new Date().getFullYear()} {content.metadata.siteName} • Чернівці
      </footer>
    </main>
  );
}