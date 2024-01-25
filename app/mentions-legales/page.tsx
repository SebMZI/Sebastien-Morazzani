"use client";
import Link from "next/link";
import { easeInOut, motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

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
        <h1 className="text-ascent font-extrabold">Mentions Légales</h1>
        <h2 className="my-10 font-semibold">Éditeur du Site</h2>
        <p>Morazzani-Marigny Sébastien</p>
        <p>6 Les Rives de l`Acheneau, 44710 Port Saint Père</p>
        <p>06 36 37 70 46</p>
        <p className="text-ascent">contact@sebastien-morazzani.com</p>

        <h2 className="my-10 font-semibold">Directeur de Publication</h2>
        <p>Morazzani-Marigny Sébastien</p>

        <h2 className="my-10 font-semibold">Hébergeur du Site</h2>
        <p>Vercel Inc.</p>
        <p>440 N Barranca Ave #4133 Covina, CA 91723</p>
        <p>privacy@vercel.com</p>

        <h2 className="my-10 font-semibold">Cookies</h2>
        <p>Ce site n`utilise aucun cookie.</p>

        <h2 className="my-10 font-semibold">Liens externes</h2>
        <p>
          Ce site peut contenir des liens vers des sites web tiers. Sébastien
          Morazzani-Marigny n`est pas responsable du contenu ou des pratiques de
          confidentialité de ces sites.
        </p>

        <h2 className="my-10 font-semibold">Droit applicable et juridiction</h2>
        <p>
          Les présentes mentions légales sont régies par les lois en vigueur en
          France. Tout litige découlant de l`utilisation de ce site sera soumis
          à la juridiction exclusive des tribunaux de Nantes.
        </p>

        <h2 className="my-10 font-semibold">Contact</h2>
        <p>
          Pour toute question concernant ces mentions légales, veuillez nous
          contacter à l`adresse suivante :{" "}
          <span className="text-ascent">contact@sebastien-morazzani.com.</span>
        </p>
      </motion.main>
    </AnimatePresence>
  );
};

export default Page;
