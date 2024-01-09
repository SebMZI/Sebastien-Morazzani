"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface props {
  title: string;
  date: string;
  image: any;
  className?: string;
  link?: string;
  delay: number;
}

const Project = ({ title, date, image, link, delay }: props) => {
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
    <Link href={link ? link : "#"} target={link ? "_blank" : ""}>
      <motion.article
        variants={property}
        initial="hidden"
        whileInView="show"
        className="w-full h-[162px] rounded-lg cursor-pointer relative"
        whileHover={{ scale: 1.03 }}
      >
        <div className="absolute left-0 right-0 bottom-0 z-20 bg-gradient-to-t from-[#000000f6] to-transparent rounded-lg h-3/4">
          <h3 className="absolute left-3 text-xl bottom-7">{title}</h3>
          <p className="absolute left-3 bottom-3">
            {date} - {date}
          </p>
        </div>
        <Image
          src={image}
          className="rounded-lg h-[162px] object-cover"
          alt={`Image de ${title} créer par Sébastien Morazzani-Marigny`}
        />
      </motion.article>
    </Link>
  );
};

export default Project;
