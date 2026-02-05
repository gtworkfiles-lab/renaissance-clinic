import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

// Це той самий блок, який відповідає за відображення в Google
export const metadata: Metadata = {
  title: "Лікування алкоголізму Чернівці | Безкоштовна консультація | Ренесанс Центр",
  description: "Ренесанс Центр Чернівці — професійна допомога при алкоголізмі, наркоманії та ігроманії. Анонімна детоксикація та реабілітація 24/7 у Чернівцях.",
  keywords: ["лікування алкоголізму чернівці", "нарколог чернівці", "виведення з запою чернівці", "реабілітаційний центр чернівці"],
  openGraph: {
    title: "Лікування алкоголізму Чернівці | Ренесанс Центр",
    description: "Професійна допомога та реабілітація у Чернівцях. Безкоштовна консультація нарколога.",
    url: "https://reabilitacia.cv.ua",
    siteName: "Ренесанс Центр",
    images: [
      {
        url: "/og-image.jpg", // якщо у вас є картинка для соцмереж у папці public
        width: 1200,
        height: 630,
      },
    ],
    locale: "uk_UA",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className={inter.className}>{children}</body>
    </html>
  );
}