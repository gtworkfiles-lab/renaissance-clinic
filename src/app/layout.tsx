import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: 'Ренесанс Центр Чернівці | Лікування алкоголізму та наркоманії',
  description: 'Ренесанс Центр — провідний реабілітаційний центр у Чернівцях. Ефективне лікування алкоголізму, наркоманії, ігроманії та професійна детоксикація. Анонімна допомога 24/7.',
  keywords: 'Ренесанс Центр Чернівці, лікування алкоголізму Чернівці, лікування наркоманії Чернівці, лікування ігроманії Чернівці, виведення із запою Чернівці, детоксикація Чернівці, реабілітаційний центр',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}