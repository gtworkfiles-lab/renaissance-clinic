import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Лікування алкоголізму Чернівці | Безкоштовна консультація | Ренесанс Центр",
  description: "Ренесанс Центр Чернівці — професійна допомога при алкоголізмі, наркоманії та ігроманії. Анонімна детоксикація та реабілітація 24/7 у Чернівцях.",
  keywords: ["лікування алкоголізму чернівці", "нарколог чернівці", "виведення з запою чернівці", "реабілітаційний центр чернівці"],
  // Вказуємо вірну назву вашої іконки
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Лікування алкоголізму Чернівці | Ренесанс Центр",
    description: "Професійна допомога та реабілітація у Чернівцях. Безкоштовна консультація нарколога.",
    url: "https://reabilitacia.cv.ua",
    siteName: "Ренесанс Центр",
    images: [
      {
        url: "/og-image.jpg", // переконайтеся, що цей файл є в public, або Google підтягне icon.png
        width: 1200,
        height: 630,
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
        {/* Примусове посилання на іконку для браузерів */}
        <link rel="icon" href="/icon.png" type="image/png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}