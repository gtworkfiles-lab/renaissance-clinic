import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: 'Ренесанс Центр Чернівці | Лікування алкоголізму та наркоманії',
  description: 'Ренесанс Центр — провідний реабілітаційний центр у Чернівцях. Ефективне лікування алкоголізму, наркоманії, ігроманії та професійна детоксикація. Анонімна допомога 24/7. Телефонуйте зараз!',
  keywords: 'Ренесанс Центр Чернівці, лікування алкоголізму Чернівці, лікування наркоманії Чернівці, лікування ігроманії Чернівці, виведення із запою Чернівці, детоксикація, реабілітаційний центр Чернівці',
  openGraph: {
    title: 'Ренесанс Центр Чернівці — Повернення до тверезого життя',
    description: 'Комплексна реабілітація залежних у Чернівцях. Кваліфікована допомога, комфортні умови та гарантована анонімність.',
    type: 'website',
    locale: 'uk_UA',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <head>
        <style>{`
          /* Приховуємо кнопку дзвінка на десктопах */
          @media (min-width: 1024px) {
            .mobile-call-button { display: none !important; }
          }
        `}</style>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}