import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Augmenter votre visibilité | Sébastien Morazzani-Marigny",
  description:
    "Élevez votre entreprise vers de nouveaux sommets en investissant dans sa visibilité : Le pouvoir de la croissance par l'investissement stratégique. Investir dans son entrerprise, c'est avant tout avoir le pouvoir de lui donner de la visibilité.",
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-primary p-4 font-syne max-w-7xl w-full m-auto ">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
