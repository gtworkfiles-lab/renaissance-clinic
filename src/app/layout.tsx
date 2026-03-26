import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { getContent } from "@/lib/cms";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

// Динамічні мета-теги, що беруться з cms.ts
export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent();
  return {
    title: content.metadata.siteName,
    description: content.metadata.siteDescription,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className="scroll-smooth">
      <head>
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