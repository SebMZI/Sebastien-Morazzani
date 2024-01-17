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
import Reco from "./components/Reco";
import Head from "next/head";

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
      <Head>
        <title>
          Demander un Devis Web gratuit | Sébastien Morazzani-Marigny
        </title>
        <meta name="theme-color" content="#130E0A" />
        <Link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
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
          Investir dans son entreprise, c&apos;est avant tout avoir le pouvoir
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
            desc="Nous sommes à l’écoute de vos besoins, et concevons votre site web en fonction de ceux-ci. (Site vitrine / site e-commerce, blog...)"
            delay={0.1}
          />
          <Services
            title="SEO"
            desc="Pour donner encore plus de visibilité à votre entreprise, nous optimisons le référencement sur les moteurs de recherche. (Optimisation de la vitesse, des images)"
            delay={0.3}
          />
          <Services
            title="Debugging"
            desc="Un problème ? Un bug ? Nous nous chargeons de le résoudre le plus rapidement possible pour vous rendre un site web fonctionnel."
            delay={0.5}
          />
          <Services
            title="Maintenance"
            desc="Nous proposons un forfait maintenance lors de la création de votre site web. Mise à jour des librairies, support technique..."
            delay={0.7}
          />
        </div>
      </section>
      <section id="gallerie" className="tablette:mb-48 phone:mb-40">
        <div className=" mb-9">
          <h2 className="text-ascent">Travaux</h2>
          <p className="text-3xl">D’autres projets avant le vôtre.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 tablette:grid-cols-2">
          {/* <Project
            title="Projet X"
            date="2024"
            image={projetxMinia}
            link="#"
            delay={0.2}
          /> */}
          <motion.article
            className="w-full h-[162px] rounded-lg cursor-pointer relative"
            initial={{ opacity: 0 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1.25,
                delay: 0.2,
                ease: "easeInOut",
              },
            }}
          >
            <div className="absolute left-0 right-0 bottom-0 z-20 bg-gradient-to-t from-[#000000f6] to-transparent rounded-lg h-3/4">
              <h3 className="absolute left-3 text-xl bottom-7">Projet X</h3>
              <p className="absolute left-3 bottom-3">2024 - En cours</p>
            </div>
            <Image
              src={projetxMinia}
              alt="project x picture"
              className="rounded-lg h-[162px] object-cover"
            />
          </motion.article>
          <Project
            title="MyAuth"
            date="2023"
            image={myauthMinia}
            link="https://my-auth.netlify.app/"
            delay={0.4}
          />
          <Project
            title="Wooflander"
            date="2023"
            image={wooflanderMinia}
            link="https://wooflander.vercel.app/"
            delay={0.6}
          />
          <Link href="/contact">
            <motion.article
              className="w-full h-[162px] rounded-lg border-secondary border-2 grid place-content-center animate-pulse"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 1.25,
                  delay: 0.8,
                  ease: "easeInOut",
                },
              }}
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
      <section className="tablette:mb-48 phone:mb-40">
        <div className=" mb-9">
          <h2 className="text-ascent">Recommandations</h2>
          <p className="text-3xl">Ils me recommandent.</p>
        </div>
        <div className="grid grid-cols-1 gap-5 tablette:grid-cols-3 tablette:gap-10 tablette:justify-between">
          <Reco
            title="Romane G."
            desc="Sébastien excelle en tant que développeur frontend spécialisé dans Reactjs et Nextjs. Son expertise technique et sa créativité en font un atout inestimable pour tout projet. Il a su apporter des solutions innovantes avec efficacité. Collaborer avec lui a été une expérience positive. Recommandé vivement ! ⭐🚀"
            delay={0.1}
          />
          <Reco
            title="Damien D."
            desc="Le savoir faire de Sébastien a été à la hauteur de mes attentes concernant le design de maquette web. Il a su contribuer à mes projets en proposant des idées pertinentes. Je recommande vivement ses prestations !"
            delay={0.3}
          />
          <Reco
            title="Mathys C."
            desc="Je recommande vivement Sébastien en tant que développeur web.
            Son expertise technique et son engagement envers la qualité ont grandement contribué au succès de nos projets communs.
            Merci encore pour ton travail, à bientôt !"
            delay={0.5}
          />
          <Reco
            title="Gotin G."
            desc="Je recommande vivement Sébastien en tant que développeur web spécialisé dans React. Travailler avec lui a été une expérience exceptionnelle. Sa maîtrise de React et sa capacité à produire un code propre et efficace ont grandement contribué au succès de nos projets. Sébastien est proactif, fiable et toujours prêt à relever de nouveaux défis. Engagez-le en toute confiance pour des résultats de qualité.

            "
            delay={0.7}
          />
          <Reco
            title="Lucas S."
            desc="Sébastien allie compétences techniques et créativité.
            Sa maîtrise des technologies front-end et back-end, combinée à une personnalité joyeuse et curieuse, rend chaque projet à la fois innovant et agréable.
            Je recommande vivement Sébastien pour son professionnalisme et son approche."
            delay={0.9}
          />
          <Reco
            title="Anaîs R."
            desc="Je recommande vivement Sébastien pour son excellence créative, son approche polyvalente, ainsi que son professionnalisme et son engagement dans ses projets."
            delay={1.1}
          />
        </div>
      </section>
      <section className="tablette:mb-28 phone:mb-40">
        <div className=" mb-9">
          <h2 className="text-ascent">Contact</h2>
          <p className="text-3xl">On parle de votre projet ?</p>
        </div>
        <Link href="/contact">
          <motion.button
            className="bg-ascent text-whites py-3 px-10 rounded-lg"
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1.25,
                delay: 0.2,
                ease: "easeInOut",
              },
            }}
          >
            Prendre rendez-vous
          </motion.button>
        </Link>
      </section>
    </main>
  );
}
