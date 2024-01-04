import React from "react";

interface props {
  title: string;
  desc: string;
}

const Services = ({ title, desc }: props) => {
  return (
    <article>
      <h3 className="text-2xl mb-1">{title}</h3>
      <p className="text-secondary text-justify">{desc}</p>
    </article>
  );
};

export default Services;
