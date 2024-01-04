import React from "react";
import logoPic from "../assets/logo_pic.png";
import Image from "next/image";
import profilePic from "../assets/profile_pic.jpg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col tablette:flex-col-reverse">
      <div className="tablette:flex tablette:flex-row tablette:justify-between tablette:items-end">
        <div>
          <div className="flex flex-row gap-2 items-center mb-3">
            <Image
              className="rounded-full w-14 h-14 object-cover"
              src={profilePic}
              alt="Photo représentant Sébastien Morazzani-Marigny"
            />
            <div className="text-white ">
              <p>Sébastien Morazzani</p>
              <p className="text-secondary  ">Développeur Web</p>
            </div>
          </div>

          <div className="text-secondary">
            <p>Dispo 5/7</p>
            <p>Nantes, 44000</p>
            <a className="block" href="tel:0636377046">
              +33 6 36 37 70 46
            </a>
            <a
              className="underline"
              href="mailto:contact@sebastien-morazzani.com"
            >
              contact@sebastien-morazzani.com
            </a>
          </div>
        </div>

        <div className="my-8 tablette:my-0 ">
          <ul className="text-secondary underline flex flex-row justify-between tablette:flex-col">
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <Link href="/#services">Services</Link>
            </li>
            <li>
              <Link href="/#gallerie">Gallerie</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full grid place-content-center tablette:flex tablette:flex-row tablette:justify-between tablette:items-center">
        <div className="flex flex-col items-center gap-2 mb-6 ">
          <Link href="/">
            <Image
              className="w-32 h-32"
              src={logoPic}
              alt="Logo Sébastien Morazzani-Marigny"
            />
            <p className="text-white text-lg text-center">SMM</p>
          </Link>
        </div>
        <p className="text-white mb-6">© Sébastien Morazzani-Marigny - 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
