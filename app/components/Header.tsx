"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logoPic from "../assets/logo_pic.png";
import menuPic from "../assets/menu.svg";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import TagManager from "react-gtm-module";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();
  const gtmId = "GTM-WDHKHJXB";

  const initializeGTM = (gtmId: string) => {
    TagManager.initialize({ gtmId });
  };

  const handleMeeting = () => {
    TagManager.dataLayer({
      dataLayer: {
        event: "click_meeting",
      },
    });
  };

  useEffect(() => {
    initializeGTM(gtmId);
  }, [gtmId]);

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300 z-30 tablette:hidden`;
  return (
    <header className="flex flex-row justify-between items-center">
      <div className="">
        <Link
          href="/"
          className="flex flex-row text-white justify-center items-center"
        >
          <Image
            className="w-16 h-16 relative left-[-10px]"
            src={logoPic}
            alt="Sebastien Morazzani-Marigny logo"
          />
          <p className="text-xl tablette:block phone:hidden">SMM</p>
        </Link>
        {/* <p>Sébastien Morazzani-Marigny</p> */}
      </div>
      <nav className="flex flex-row-reverse items-center gap-2">
        <button
          className="flex flex-col h-12 w-12  justify-center items-center group"
          onClick={() => setToggle(!toggle)}
        >
          <div
            className={`${genericHamburgerLine} ${
              toggle
                ? "rotate-45 translate-y-3 opacity-100 group-hover:opacity-100"
                : "opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              toggle ? "opacity-0" : "opacity-100 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              toggle
                ? "-rotate-45 -translate-y-3 opacity-100 group-hover:opacity-100"
                : "opacity-100"
            }`}
          />
        </button>
        {/* <Image
          src={menuPic}
          alt="menu burger icon"
          className={`menu-icon cursor-pointer tablette:hidden z-30`}
          onClick={() => setToggle(!toggle)}
        /> */}
        <ul
          onClick={() => setToggle(!toggle)}
          className={`text-white tablette:relative tablette:w-auto tablette:h-auto tablette:flex-row gap-6 transition tablette:flex justify-center items-center ${
            toggle
              ? "phone:flex phone:fixed phone:inset-0 phone:flex-col phone:w-screen  phone:h-screen phone:bg-primary phone:z-20   transition-all"
              : "phone:hidden"
          }`}
        >
          <li>
            <Link
              href="/"
              className={`hover:border-b-2 hover:border-ascent text-lg  ${
                pathname == "/" ? "text-ascent" : ""
              }`}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              href="/#services"
              className={`hover:border-b-2 hover:border-ascent text-lg ${
                pathname == "/#services" ? "text-ascent" : ""
              }`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/#gallerie"
              className={`hover:border-b-2 hover:border-ascent text-lg ${
                pathname == "/#gallerie" ? "text-ascent" : ""
              }`}
            >
              Galerie
            </Link>
          </li>
          <motion.li
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleMeeting}
          >
            <Link
              href="/contact"
              className="py-3 px-4 bg-gradient-to-r to-[#7E6EAF] from-ascent rounded-lg  uppercase"
            >
              Réserver un meeting
            </Link>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
