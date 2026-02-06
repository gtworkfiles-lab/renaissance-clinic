import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  // Короткий і потужний заголовок для Google та вкладки браузера
  title: "Лікування алкоголізму, наркоманії, ігроманії | Чернівці | Ренесанс",
  description: "Ренесанс Центр Чернівці: професійне лікування алкоголізму, наркоманії та ігроманії (лудоманії). Анонімна допомога, детоксикація та реабілітація 24/7.",
  keywords: [
    "лікування алкоголізму чернівці", 
    "лікування наркоманії чернівці", 
    "лікування ігроманії чернівці", 
    "реабілітаційний центр чернівці", 
    "нарколог чернівці", 
    "допомога залежним чернівці",
    "лудоманія лікування чернівці",
    "виведення з запою чернівці"
  ],
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    // Солідне представлення у месенджерах (Telegram/Viber)
    title: "Лікування залежностей у Чернівцях — Ренесанс Центр",
    description: "Професійна допомога: алкоголізм, наркоманія, ігроманія. Безкоштовна консультація. Анонімно та цілодобово.",
    url: "https://reabilitacia.cv.ua",
    siteName: "Ренесанс Центр",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ренесанс Центр: лікування алкоголізму, наркоманії, ігроманії",
      },
    ],
    locale: "uk_UA",
    type: "website",
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
        <link rel="icon" href="/icon.png" type="image/png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}