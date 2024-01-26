"use client";
import Link from "next/link";
import { easeInOut, motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Contact from "../components/Contact";

const Page = () => {
  const variants = {
    out: {
      opacity: 0,
      y: 40,
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.17, 0.67, 0.83, 0.91],
        duration: 1,
        delay: 0.15,
      },
    },
  };
  return (
    <AnimatePresence mode="wait">
      <motion.main
        className="text-white my-20"
        variants={variants}
        initial="out"
        animate="in"
        exit="out"
      >
        <section className="mb-20">
          <h1 className="text-ascent font-extrabold">Mentions Légales</h1>
          <h2 className="my-10 font-semibold text-2xl ">Éditeur du Site</h2>
          <p>Morazzani-Marigny Sébastien</p>
          <p>6 Les Rives de l`Acheneau, 44710 Port Saint Père</p>
          <p>06 36 37 70 46</p>
          <Link
            className="text-ascent"
            href={"mailto:contact@sebastien-morazzani.com"}
          >
            contact@sebastien-morazzani.com.
          </Link>

          <h2 className="my-10 font-semibold text-2xl">
            Directeur de Publication
          </h2>
          <p>Morazzani-Marigny Sébastien</p>

          <h2 className="my-10 font-semibold text-2xl">Hébergeur du Site</h2>
          <p>Vercel Inc.</p>
          <p>440 N Barranca Ave #4133 Covina, CA 91723</p>
          <p>privacy@vercel.com</p>

          <h2 className="my-10 font-semibold text-2xl">Accès au site</h2>
          <p>
            L`accès au site et son utilisation sont réservés à un usage
            strictement personnel. Vous vous engagez à ne pas utiliser ce site
            et les informations ou données qui y figurent à des fins
            commerciales, politiques, publicitaires et pour toute forme de
            sollicitation commerciale et notamment l`envoi de courriers
            électroniques non sollicités.
          </p>

          <h2 className="my-10 font-semibold text-2xl">
            Collecte et protection des données
          </h2>
          <p>
            Les informations personnelles pouvant être recueillies sur le site
            sont principalement utilisées par l`éditeur pour la gestion des
            relations avec vous, et le cas échéant pour le traitement de vos
            commandes.
          </p>
          <br />
          <p>
            Les données personnelles collectées sont les suivantes :<br />
            <br />
            -       Adresse mail <br />-       Nom et Prénom <br />-
                  Entreprise (Optionnel)
          </p>

          <h2 className="my-10 font-semibold text-2xl">Cookies</h2>
          <p>
            Ce site peut utiliser des cookies pour améliorer l`expérience de
            l`utilisateur. En utilisant ce site, vous consentez à l`utilisation
            de cookies conformément à notre politique de cookies.
          </p>
          <br />
          <p>
            Toutes les informations collectées ne seront utilisées que pour
            suivre le volume, le type et la configuration du trafic utilisant ce
            site, pour en développer la conception et l`agencement et à d`autres
            fins administratives et de planification et plus généralement pour
            améliorer le service que nous vous offrons.
          </p>
          <br />
          <p>
            Pour plus d’informations sur l’utilisation, la gestion et la
            suppression des « cookies », pour tout type de navigateur, nous vous
            invitons à consulter le lien suivant :
            <br />
            <Link
              href={
                "https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser"
              }
              target="_blank"
              className="text-ascent"
            >
              https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser.
            </Link>
          </p>

          <h2 className="my-10 font-semibold text-2xl">Liens externes</h2>
          <p>
            Ce site peut contenir des liens vers des sites web tiers. Sébastien
            Morazzani-Marigny n`est pas responsable du contenu ou des pratiques
            de confidentialité de ces sites.
          </p>

          <h2 className="my-10 font-semibold text-2xl">Responsabilité</h2>
          <p>
            La responsabilité de l`éditeur ne peut être engagée en cas de
            défaillance, panne, difficulté ou interruption de fonctionnement,
            empêchant l`accès au site ou à une de ses fonctionnalités.
          </p>
          <br />
          <p>
            L`éditeur n`est pas responsable des dommages causés à vous-même, à
            des tiers et/ou à votre équipement du fait de votre connexion ou de
            votre utilisation du site et vous renoncez à toute action contre lui
            de ce fait.
          </p>
          <br />
          <p>
            Si l`éditeur venait à faire l`objet d`une procédure amiable ou
            judiciaire en raison de votre utilisation du site, il pourra se
            retourner contre vous pour obtenir l`indemnisation de tous les
            préjudices, sommes, condamnations et frais qui pourraient découler
            de cette procédure.
          </p>

          <h2 className="my-10 font-semibold text-2xl">
            Droit applicable et juridiction
          </h2>
          <p>
            Les présentes mentions légales sont régies par les lois en vigueur
            en France. Tout litige découlant de l`utilisation de ce site sera
            soumis à la juridiction exclusive des tribunaux de Nantes.
          </p>

          <h2 className="my-10 font-semibold text-2xl">Contact</h2>
          <p>
            Pour toute question concernant ces mentions légales, veuillez nous
            contacter à l`adresse suivante :{" "}
            <Link
              className="text-ascent"
              href={"mailto:contact@sebastien-morazzani.com"}
            >
              contact@sebastien-morazzani.com.
            </Link>
          </p>
        </section>

        <Contact />
      </motion.main>
    </AnimatePresence>
  );
};

export default Page;
