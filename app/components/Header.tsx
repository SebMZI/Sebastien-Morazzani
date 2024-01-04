"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logoPic from "../assets/logo_pic.png";
import menuPic from "../assets/menu.svg";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

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
          className={`menu-icon cursor-pointer tablette:hidden z-30`}
          onClick={() => setToggle(!toggle)}
        />
        <ul
          onClick={() => setToggle(!toggle)}
          className={`text-white tablette:relative tablette:w-auto tablette:h-auto tablette:flex-row gap-6 transition tablette:flex  ${
            toggle
              ? "phone:flex phone:fixed phone:inset-0 phone:flex-col phone:w-screen  phone:h-screen phone:bg-primary phone:z-20 phone:justify-center phone:items-center"
              : "phone:hidden"
          }`}
        >
          <li className=" h-[48px]">
            <Link
              href="/"
              className={`hover:border-b-2 hover:border-ascent text-lg  ${
                pathname == "/" ? "text-ascent" : ""
              }`}
            >
              Accueil
            </Link>
          </li>
          <li className="h-[48px]">
            <Link
              href="/#services"
              className={`hover:border-b-2 hover:border-ascent text-lg ${
                pathname == "/#services" ? "text-ascent" : ""
              }`}
            >
              Services
            </Link>
          </li>
          <li className="h-[48px]">
            <Link
              href="/#gallerie"
              className={`hover:border-b-2 hover:border-ascent text-lg ${
                pathname == "/#gallerie" ? "text-ascent" : ""
              }`}
            >
              Gallerie
            </Link>
          </li>
          <li className="h-[48px]">
            <Link
              href="/contact"
              className="py-2 px-3 bg-ascent rounded-lg text-lg"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
