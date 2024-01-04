import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Head from "next/head";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Augmenter votre visibilité | Sébastien Morazzani-Marigny",
  description:
    "Élevez votre entreprise vers de nouveaux sommets en investissant dans sa visibilité : Le pouvoir de la croissance par l'investissement stratégique. Investir dans son entrerprise, c'est avant tout avoir le pouvoir de lui donner de la visibilité.",
  manifest: "/site.webmanifest",
  keywords: [
    "sébastien",
    "morazzani",
    "visibilité",
    "croissance",
    "investissement",
    "développeur web",
    "intégrateur web",
    "SEO",
    "conception",
    "maintenance",
    "debugging",
    "stratégie",
    "react",
    "next",
    "javascript",
    "html",
    "css",
    "nodejs",
    "sass",
    "typescript",
  ],
  openGraph: {
    title: "Augmenter votre visibilité | Sébastien Morazzani-Marigny",
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
    <html lang="fr">
      <body className="bg-primary p-4 font-syne max-w-7xl w-full m-auto ">
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
