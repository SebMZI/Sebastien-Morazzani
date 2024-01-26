"use client";

import React from "react";
import logoPic from "../assets/logo_pic.png";
import Image from "next/image";
import profilePic from "../assets/profile_pic.jpg";
import Link from "next/link";
import Script from "next/script";
import { WebsiteCarbonBadge } from "react-websitecarbon-badge";

const Footer = () => {
  return (
    <footer className="flex flex-col tablette:flex-row pb-5">
      <div className="tablette:flex tablette:flex-row tablette:justify-between tablette:items-end tablette:w-2/4 phone:w-full">
        <div>
          <div className="flex flex-row gap-2 items-center mb-3">
            <Image
              className="rounded-full w-14 h-14 object-cover"
              src={profilePic}
              alt="Photo représentant Sébastien Morazzani-Marigny"
            />
            <div className="text-white ">
              <p className="text-ascent">Sébastien Morazzani</p>
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
      </div>

      <div className="w-full grid place-content-center tablette:flex tablette:flex-row tablette:justify-end tablette:items-center ">
        <div className="my-8 tablette:my-0 flex flex-col  h-full tablette:items-end tablette:justify-between phone:items-center phone:justify-around">
          <Link href="/" className="flex flex-col items-center">
            <Image
              className="w-14 h-14"
              src={logoPic}
              alt="Logo Sébastien Morazzani-Marigny"
            />
            <p className="text-white text-lg text-center">SMM</p>
          </Link>
          {/* <WebsiteCarbonBadge
            lang="fr"
            dark={true}
            co2="0.22"
            percentage="77"
          /> */}
          <div className="text-white ">
            <div className="text-right flex flex-row gap-3 tablette:justify-end phone:justify-center">
              <Link href={"/CGV"} className="underline">
                CGV
              </Link>
              <Link href={"/mentions-legales"} className="underline">
                Mentions Légales
              </Link>
            </div>
            <p>© Sébastien Morazzani-Marigny - 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
