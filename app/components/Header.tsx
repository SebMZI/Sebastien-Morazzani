"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logoPic from "../assets/logo_pic.png";
import menuPic from "../assets/menu.svg";
import Link from "next/link";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="flex flex-row justify-between items-center">
      <div className="">
        <Link href="/">
          <Image
            className="w-16 h-16 relative left-[-10px]"
            src={logoPic}
            alt="Sebastien Morazzani-Marigny logo"
          />
        </Link>
        {/* <p>Sébastien Morazzani-Marigny</p> */}
      </div>
      <nav className="flex flex-row-reverse items-center gap-2">
        <Image
          src={menuPic}
          alt="menu burger icon"
          className={`menu-icon cursor-pointer tablette:hidden`}
          onClick={() => setToggle(!toggle)}
        />
        <ul
          className={`text-white  flex-row gap-6  tablette:flex  ${
            toggle ? "phone:flex" : "phone:hidden"
          }`}
        >
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
      </nav>
    </header>
  );
};

export default Header;
