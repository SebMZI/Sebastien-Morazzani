"use client";
import React, { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useAnimationControls,
  useInView,
} from "framer-motion";

interface props {
  title: string;
  desc: string;
  delay: number;
}

const Reco = ({ title, desc, delay }: props) => {
  const controls = useAnimationControls();
  const serviceRef = useRef(null);

  const property = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1.25,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.article
      variants={property}
      initial="hidden"
      whileInView="show"
      ref={serviceRef}
    >
      <h3 className="text-2xl mb-1">{title}</h3>
      <p className="text-secondary text-justify">{desc}</p>
    </motion.article>
  );
};

export default Reco;
