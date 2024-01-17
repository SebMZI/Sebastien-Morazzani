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
  themeColor: "#130E0A",
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
          <div
            id="awwwards"
            style={{
              position: "fixed",
              zIndex: 999,
              transform: "translateY(-50%)",
              top: "50%",
              right: "0",
            }}
          >
            <a
              href="https://www.awwwards.com/sites/sebastien-morazzani-marigny"
              target="_blank"
            >
              <svg width="53.08" height="171.358">
                <path
                  className="js-color-bg"
                  fill="white"
                  d="M0 0h53.08v171.358H0z"
                ></path>
                <g className="js-color-text" fill="black">
                  <path d="M20.048 153.585v-2.002l6.752-3.757h-6.752v-1.9h10.23v2.002l-6.752 3.757h6.752v1.9zM29.899 142.382a3.317 3.317 0 0 1-1.359 1.293c-.575.297-1.223.446-1.944.446-.721 0-1.369-.149-1.944-.446a3.317 3.317 0 0 1-1.359-1.293c-.331-.564-.497-1.232-.497-2.003 0-.769.166-1.437.497-2.002a3.332 3.332 0 0 1 1.359-1.294c.575-.297 1.224-.445 1.944-.445.722 0 1.369.148 1.944.445a3.326 3.326 0 0 1 1.359 1.294c.33.565.496 1.233.496 2.002.001.77-.166 1.438-.496 2.003m-1.703-3.348c-.435-.331-.967-.497-1.601-.497s-1.167.166-1.601.497c-.434.332-.65.78-.65 1.345s.217 1.014.65 1.346c.434.33.967.496 1.601.496s1.166-.166 1.601-.496c.434-.332.649-.78.649-1.346.001-.565-.215-1.013-.649-1.345M22.912 134.996v-1.812h1.185c-.43-.283-.752-.593-.973-.929-.219-.336-.329-.732-.329-1.19 0-.479.127-.902.38-1.272.254-.37.635-.633 1.141-.79-.478-.262-.851-.591-1.118-.985a2.221 2.221 0 0 1-.402-1.265c0-.682.2-1.218.599-1.607.4-.391.957-.585 1.668-.585h5.218v1.812H25.37c-.682 0-1.023.303-1.023.907 0 .467.264.85.789 1.146.527.299 1.286.446 2.28.446h2.865v1.813H25.37c-.682 0-1.023.303-1.023.906 0 .468.275.851.826 1.147.551.298 1.352.446 2.404.446h2.704v1.812h-7.369zM21.626 122.457c-.225.224-.502.336-.833.336s-.608-.112-.833-.336a1.128 1.128 0 0 1-.336-.833c0-.331.111-.609.336-.833.225-.225.502-.336.833-.336s.608.111.833.336c.225.224.337.502.337.833 0 .332-.112.608-.337.833m1.286-1.739h7.366v1.813h-7.366v-1.813zM22.912 118.668v-1.812h1.185a3.348 3.348 0 0 1-.951-1.009 2.434 2.434 0 0 1-.351-1.272c0-.681.19-1.229.57-1.644.38-.414.931-.621 1.651-.621h5.263v1.812h-4.722c-.418 0-.727.096-.92.285-.195.19-.293.447-.293.769 0 .302.116.58.351.833.233.254.577.458 1.03.613.453.156.992.234 1.615.234h2.938v1.812h-7.366zM29.833 109.129a3.33 3.33 0 0 1-1.432 1.169 4.535 4.535 0 0 1-1.805.373 4.537 4.537 0 0 1-1.807-.373c-.579-.248-1.057-.638-1.432-1.169s-.563-1.196-.563-1.995c0-.771.183-1.413.549-1.93a3.28 3.28 0 0 1 1.382-1.141 4.221 4.221 0 0 1 1.709-.364h.746v5.071c.447-.02.838-.183 1.168-.49.332-.307.498-.724.498-1.248 0-.41-.093-.754-.277-1.031-.186-.278-.473-.529-.863-.753l.542-1.462c.69.303 1.224.724 1.592 1.265.371.541.556 1.235.556 2.083 0 .799-.188 1.464-.563 1.995m-4.085-3.574c-.41.088-.746.261-1.009.52-.262.258-.395.61-.395 1.06 0 .428.137.784.409 1.067.272.282.604.458.994.525v-3.172zM29.833 100.878c-.375.531-.852.921-1.432 1.169a4.552 4.552 0 0 1-3.612 0c-.579-.248-1.057-.638-1.432-1.169s-.563-1.196-.563-1.995c0-.77.183-1.412.549-1.93a3.278 3.278 0 0 1 1.382-1.14 4.222 4.222 0 0 1 1.709-.365h.746v5.072a1.794 1.794 0 0 0 1.168-.49c.332-.307.498-.724.498-1.249 0-.41-.093-.753-.277-1.031-.186-.277-.473-.528-.863-.753l.542-1.462c.69.302 1.224.724 1.592 1.265.371.541.556 1.234.556 2.083 0 .799-.188 1.464-.563 1.995m-4.085-3.573c-.41.088-.746.261-1.009.519-.262.258-.395.611-.395 1.06 0 .429.137.784.409 1.067.272.282.604.458.994.526v-3.172zM35.481 16.926l-4.782 14.969h-3.266l-2.584-9.682-2.584 9.682h-3.268l-4.781-14.969h3.713l2.673 10.276 2.524-10.276h3.445l2.524 10.276 2.674-10.276zM37.979 27.083c1.426 0 2.495 1.068 2.495 2.495 0 1.425-1.069 2.495-2.495 2.495-1.425 0-2.495-1.07-2.495-2.495-.001-1.427 1.07-2.495 2.495-2.495"></path>
                </g>
              </svg>
            </a>
          </div>
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
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-M2ZXD9Y658"
          />
          <Script id="googleanalytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-M2ZXD9Y658');
            `}
          </Script>
        </body>
      </html>
    </>
  );
}
