import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Head from "next/head";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import arrowUpPic from "./assets/arrowup.svg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Augmenter votre visibilité en ligne | Sébastien Morazzani-Marigny",
  description:
    "Élevez votre entreprise vers de nouveaux sommets en investissant dans sa visibilité : Le pouvoir de la croissance par l'investissement stratégique. Investir dans son entrerprise, c'est avant tout avoir le pouvoir de lui donner de la visibilité.",
  manifest: "/site.webmanifest",
  keywords: [
    "conception de site web",
    "conception site internet",
    "développement site web",
    "référencement site web",
    "optimisation seo",
    "création de site web pas cher",
    "tarif création site internet",
    "devis creation site web",
    "conception de site web prix",
    "conception de site internet professionnel",
    "référencement web",
    "développement application web",
    "concepteur de site web",
    "referencement site google",
    "seo site web",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Augmenter votre visibilité en ligne | Sébastien Morazzani-Marigny",
    description:
      "Élevez votre entreprise vers de nouveaux sommets en investissant dans sa visibilité : Le pouvoir de la croissance par l'investissement stratégique. Investir dans son entrerprise, c'est avant tout avoir le pouvoir de lui donner de la visibilité.",
    url: "https://www.sebastien-morazzani.com",
    siteName: "Sébastien Morazzani-Marigny",
    images: [
      {
        url: "https://www.sebastien-morazzani.com/favicon.ico",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};
interface Window {
  dataLayer: any[];
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sébastien Morazzani-Marigny",
    url: "https://www.sebastien-morazzani.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.sebastien-morazzani.com/menu.svg",
      width: "100",
      height: "100",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33-6-36-37-70-46",
      email: "contact@sebastien-morazzani.com",
      contactType: "customer service",
    },
    sameAs: ["https://www.linkedin.com/company/sebastien-morazzani-marigny"],
  };

  return (
    <>
      <html lang="fr">
        <body className="bg-primary p-4 font-syne max-w-7xl w-full m-auto relative">
          <Header />
          {children}
          {/* <div className="w-12 h-12 bg-ascent rounded-full grid place-content-center absolute right-0">
          <Image
            src={arrowUpPic}
            alt="flèche pour retourner en haut de page"
            className="w-8 h-8"
          />
        </div> */}
          <Analytics />
          <Footer />
          <Script
            id="metadata"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />

          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-11465358312"
          />
          <Script id="googlescript">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'AW-11465358312');
           `}
          </Script>
        </body>
      </html>
    </>
  );
}
