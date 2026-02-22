import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script"; // Імпортуємо компонент для скриптів

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Ренесанс Клінік — Лікування алкоголізму та наркоманії у Чернівцях",
  description: "Анонімна допомога 24/7. Безкоштовна консультація нарколога. Понад 15 років досвіду у лікуванні залежностей.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className="scroll-smooth">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J6R5ZMVKKB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J6R5ZMVKKB');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}