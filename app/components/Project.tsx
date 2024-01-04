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
}

const Project = ({ title, date, image, link }: props) => {
  return (
    <Link href={link ? link : "#"} target={link ? "_blank" : ""}>
      <motion.article
        className="w-full h-[162px] rounded-lg cursor-pointer"
        whileHover={{ scale: 1.03 }}
      >
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
