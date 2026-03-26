import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { getContent } from "@/lib/cms";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent();
  return {
    title: content.metadata.siteName,
    description: content.metadata.siteDescription,
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const content = await getContent();

  // Це і є розмітка для Sitelinks
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": content.metadata.siteName,
    "url": "https://reabilitacia.cv.ua",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://reabilitacia.cv.ua/#services",
      "query-input": "required name=search_term_string"
    },
    "hasPart": content.navigation.menuItems.map((item: any) => ({
      "@type": "WebPage",
      "name": item.label,
      "url": `https://reabilitacia.cv.ua/${item.href}`
    }))
  };

  return (
    <html lang="uk" className="scroll-smooth">
      <head>
        {/* Додаємо розмітку для Google Sitelinks */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
            gtag('config', 'AW-17988300072');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}