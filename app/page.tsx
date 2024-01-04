"use client";
import Image from "next/image";
import Services from "./components/Services";
import Project from "./components/Project";
import projetxMinia from "./assets/projetx.png";
import wooflanderMinia from "./assets/wooflander.jpg";
import myauthMinia from "./assets/myauth.png";
import addIcon from "./assets/addIcon.svg";
import mouseIcon from "./assets/mouse.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const variants = {
    out: {
      opacity: 0,
      y: 40,
      transition: {
        duration: 0.4,
      },
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.25,
      },
    },
  };

  return (
    <main className="w-full h-full text-white">
      <section className="tablette:my-48 relative phone:my-40">
        <motion.h1
          className=" tablette:text-[70px] tablette:leading-[60px] tablette:w-3/4 phone:text-[32px] phone:leading-9"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: [0.17, 0.67, 0.83, 0.91],
            delay: 0.15,
          }}
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: 50, opacity: 0 },
          }}
        >
          Élevez votre entreprise vers de nouveaux sommets en investissant dans
          sa <span className="text-ascent">visibilité</span> : Le pouvoir de la
          <span className="text-ascent"> croissance</span> par
          l&apos;investissement <span className="text-ascent">stratégique</span>
          .
        </motion.h1>
        <motion.p
          className="mt-8 text-secondary tablette:w-2/4 text-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: [0.17, 0.67, 0.83, 0.91],
            delay: 0.25,
          }}
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: 50, opacity: 0 },
          }}
        >
          Investir dans son entrerprise, c&apos;est avant tout avoir le pouvoir
          de lui donner de la visibilité.
        </motion.p>
        <Image
          src={mouseIcon}
          alt="Mouse icon scroll"
          className="animate-bounce w-8 h-8 absolute bottom-[-125px] left-2/4"
        />
      </section>
      <section id="services" className="tablette:mb-48 phone:mb-40">
        <div className=" mb-9">
          <h2 className="text-ascent">Services</h2>
          <p className="text-3xl">
            Différents services, pour différents besoins.
          </p>
        </div>
        <div className="flex flex-col gap-5 tablette:flex-row tablette:gap-10 tablette:justify-between">
          <Services
            title="Conception"
            desc="Nous sommes à l’écoute de vos besoin, et concevons votre site web en fonction de ceux-ci. (Site vitrine / site e-commerce, blog...)"
            delay={0.1}
          />
          <Services
            title="SEO"
            desc="Pour donner encore plus de visibilité à votre entreprise, nous optimisons le référencement sur les moteurs de recherche. (Optimisation de la vitesse, des images)"
            delay={0.3}
          />
          <Services
            title="Debugging"
            desc="Un problème ? Un bug ? Nous nous chargons de le résoudre le plus rapidement possible pour vous rendre un site web fonctionnel."
            delay={0.5}
          />
          <Services
            title="Maintenance"
            desc="Nous proposons un forfait maintenance lors de la création de votre site web. Mise à jour des librairies, support technique..."
            delay={0.6}
          />
        </div>
      </section>
      <section id="gallerie" className="tablette:mb-48 phone:mb-40">
        <div className=" mb-9">
          <h2 className="text-ascent">Travaux</h2>
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
            <motion.article
              className="w-full h-[162px] rounded-lg border-secondary border-2 grid place-content-center animate-pulse"
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex flex-row gap-3 ">
                <Image
                  src={addIcon}
                  alt="icon pour ajouter un nouveau projet"
                />
                <p className="text-secondary">Ajouter votre projet</p>
              </div>
            </motion.article>
          </Link>
        </div>
      </section>
    </main>
  );
}
