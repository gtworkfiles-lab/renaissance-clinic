import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  // ФІКС КАНOНІЧНОЇ ВЕРСІЇ: Вказуємо основний домен
  metadataBase: new URL("https://reabilitacia.cv.ua"),
  alternates: {
    canonical: "/",
  },
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
        
        {/* GOOGLE ANALYTICS (GA4) - Замініть G-XXXXXXXXXX на ваш ID, коли отримаєте */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
              // Сюди ж додамо код Google Ads пізніше
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}