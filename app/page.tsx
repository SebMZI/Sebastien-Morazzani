import Image from "next/image";
import Services from "./components/Services";
import Project from "./components/Project";
import projetxMinia from "./assets/projetx.png";
import wooflanderMinia from "./assets/wooflander.jpg";
import myauthMinia from "./assets/myauth.png";
import addIcon from "./assets/addIcon.svg";
import mouseIcon from "./assets/mouse.svg";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Augmenter votre visibilité | Sébastien Morazzani-Marigny",
  description:
    "Élevez votre entreprise vers de nouveaux sommets en investissant dans sa visibilité : Le pouvoir de la croissance par l'investissement stratégique. Investir dans son entrerprise, c'est avant tout avoir le pouvoir de lui donner de la visibilité.",
};

export default function Home() {
  return (
    <main className="w-full h-full text-white">
      <section className="my-20 relative">
        <h1 className=" text-[32px] leading-9 tablette:w-2/4">
          Élevez votre entreprise vers de nouveaux sommets en investissant dans
          sa <span className="text-ascent">visibilité</span> : Le pouvoir de la
          <span className="text-ascent"> croissance</span> par
          l&apos;investissement <span className="text-ascent">stratégique</span>
          .
        </h1>
        <p className="mt-8 text-secondary tablette:w-2/4">
          Investir dans son entrerprise, c&apos;est avant tout avoir le pouvoir
          de lui donner de la visibilité.
        </p>
        <Image
          src={mouseIcon}
          alt="Mouse icon scroll"
          className="animate-bounce w-8 h-8 absolute bottom-[-70px] left-2/4"
        />
      </section>
      <section id="services" className="mb-20">
        <div className=" mb-9">
          <h2 className="text-secondary">Services</h2>
          <p className="text-3xl">
            Différents services, pour différents besoins.
          </p>
        </div>
        <div className="flex flex-col gap-5 tablette:flex-row tablette:gap-10 tablette:justify-between">
          <Services
            title="Conception"
            desc="Nous sommes à l’écoute de vos besoin, et concevons votre site web en fonction de ceux-ci."
          />
          <Services
            title="SEO"
            desc="Pour donner encore plus de visibilité à votre entreprise, nous optimisons le référencement sur les moteurs de recherche"
          />
          <Services
            title="Debugging"
            desc="Un problème ? Un bug ? Nous nous chargons de le résoudre le plus rapidement possible pour vous rendre un site web fonctionnel."
          />
          <Services
            title="Maintenance"
            desc="Nous proposons un forfait maintenance lors de la création de votre site web. Mise à jour des librairies, support technique..."
          />
        </div>
      </section>
      <section id="gallerie" className="mb-20">
        <div className=" mb-9">
          <h2 className="text-secondary">Travaux</h2>
          <p className="text-3xl">D’autres projets avant le vôtre.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 tablette:grid-cols-2">
          <Project title="Projet X" date="2024" image={projetxMinia} link="" />
          <Project
            title="MyAuth"
            date="2023"
            image={myauthMinia}
            link="https://my-auth.netlify.app/"
          />
          <Project
            title="Wooflander"
            date="2023"
            image={wooflanderMinia}
            link="https://wooflander.vercel.app/"
          />
          <Link href="/contact">
            <article className="w-full h-[162px] rounded-lg border-secondary border-2 grid place-content-center animate-pulse">
              <div className="flex flex-row gap-3 ">
                <Image
                  src={addIcon}
                  alt="icon pour ajouter un nouveau projet"
                />
                <p className="text-secondary">Ajouter votre projet</p>
              </div>
            </article>
          </Link>
        </div>
      </section>
    </main>
  );
}
