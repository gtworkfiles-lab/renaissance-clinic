import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../globals.css"; 
import Script from "next/script";
import { getContent, Locale } from "@/lib/cms";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export async function generateMetadata({ 
  params 
}: { 
  params: { lang: string } 
}): Promise<Metadata> {
  const content = await getContent(params.lang as Locale);
  return {
    title: content.metadata.siteName,
    description: content.metadata.siteDescription,
    alternates: {
      canonical: `https://reabilitacia.cv.ua/${params.lang}`,
      languages: {
        'uk-UA': '/ua',
        'ru-RU': '/ru',
        'en-US': '/en',
      },
    },
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const content = await getContent(params.lang as Locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": content.metadata.siteName,
    "url": `https://reabilitacia.cv.ua/${params.lang}`,
    "hasPart": content.navigation.menuItems.map((item: any) => ({
      "@type": "WebPage",
      "name": item.label,
      "url": `https://reabilitacia.cv.ua/${params.lang}${item.href}`
    }))
  };

  return (
    <html lang={params.lang} className="scroll-smooth">
      <head>
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