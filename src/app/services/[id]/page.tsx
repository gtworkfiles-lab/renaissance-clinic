import { getContent } from "@/lib/cms";
import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Phone } from "lucide-react";

// Типізація для Next.js 15
interface Props {
  params: Promise<{ id: string }>;
}

export default async function ServicePage({ params }: Props) {
  // Обов'язково додаємо await для params
  const { id } = await params; 
  const content = await getContent();
  const service = content.services.find((s: any) => s.id === id);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation menuItems={content.navigation.menuItems} metadata={content.metadata} />
      
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/#services" className="inline-flex items-center gap-2 text-teal-600 font-bold mb-10 hover:ml-[-5px] transition-all">
            <ArrowLeft size={20} /> Назад до послуг
          </Link>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-8 leading-tight">
            {service.title}
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-600 mb-16 leading-relaxed">
            <p className="text-xl italic border-l-4 border-teal-500 pl-6 mb-8 text-gray-700">
              {service.desc}
            </p>
            <div className="whitespace-pre-line text-lg">
              {service.fullDesc}
            </div>
          </div>

          <div className="bg-gray-50 rounded-[40px] p-8 md:p-12 mb-16 border border-gray-100">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Чому обирають нас:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Повна конфіденційність",
                "Індивідуальний підхід",
                "Досвідчені фахівці",
                "Комфортні умови",
                "Сучасні методики",
                "Підтримка після курсу"
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <CheckCircle className="text-teal-600" size={20} />
                  <span className="font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center bg-teal-600 rounded-[40px] p-10 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Потрібна допомога прямо зараз?</h3>
            <p className="mb-8 opacity-90">Ми працюємо цілодобово. Дзвінок безкоштовний.</p>
            <a 
              href={`tel:${content.contacts.rawPhone}`} 
              className="inline-flex items-center gap-3 bg-white text-teal-600 px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform"
            >
              <Phone size={24} /> {content.contacts.phone}
            </a>
          </div>
        </div>
      </div>

      <ContactForm content={content.form} />

      <footer className="py-10 text-center text-gray-400 text-sm border-t border-gray-100">
        &copy; {new Date().getFullYear()} {content.metadata.siteName}. Всі права захищено.
      </footer>
    </main>
  );
}