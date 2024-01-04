import Image from "next/image";
import React from "react";

interface props {
  title: string;
  date: string;
  image: any;
  className?: string;
}

const Project = ({ title, date, image }: props) => {
  return (
    <article className="w-full h-[162px] rounded-lg">
      <Image
        src={image}
        className="rounded-lg h-[162px] object-cover"
        alt={`Image de ${title} créer par Sébastien Morazzani-Marigny`}
      />
    </article>
  );
};

export default Project;
