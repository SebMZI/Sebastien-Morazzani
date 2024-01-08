"use client";
import React, { useEffect, useRef, useState } from "react";
import type { Metadata } from "next";
import emailjs from "@emailjs/browser";
import Head from "next/head";
import { easeInOut, motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import loadingGif from "../assets/loading.svg";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  const form = useRef(null);
  const [spin, setSpin] = useState(false);
  const [modal, setModal] = useState(false);
  const [msg, setMsg] = useState("Rien");
  const variants = {
    out: {
      opacity: 0,
      y: 40,
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.17, 0.67, 0.83, 0.91],
        duration: 1,
        delay: 0.15,
      },
    },
  };

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
      form.current
    ) {
      setSpin(true);
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            setSpin(false);
            setModal(true);
            setMsg("Message envoyé!");
            const formClear = form.current as HTMLFormElement | null;
            if (formClear) {
              formClear.reset();
            }
            setTimeout(() => {
              setModal(false);
              setMsg("");
            }, 4000);
          },
          (error) => {
            setSpin(false);
            setMsg("Erreur lors de l'envoi!");
            setTimeout(() => {
              setModal(false);
              setMsg("");
            }, 4000);
          }
        );
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.main
        className="text-white relative"
        variants={variants}
        initial="out"
        animate="in"
        exit="out"
      >
        {modal ? (
          <motion.div
            className={`absolute top-[-50px] left-2/4  py-4 px-20 text-white  text-center rounded-sm ${
              msg === "Message envoyé!" ? "bg-[#58eb58]" : "bg-[#eb5353]"
            }`}
            initial={{
              x: "-50%",
              y: "-50px",
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 1,
                ease: easeInOut,
              },
            }}
          >
            {msg}
          </motion.div>
        ) : null}
        <section className="my-20">
          <div className="w-2/4">
            <h1 className="text-2xl">Parlons de votre futur projet.</h1>
            <p className="text-secondary">
              Il est important d&apos;échanger afin de mieux comprendre vos
              besoins et vos attentes pour délivrer un site web exceptionnel
            </p>
          </div>
        </section>
        <section className="tablette:flex tablette:flex-row-reverse ">
          <form
            className="mb-20 tablette:w-5/6"
            id="contact-form"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="tablette:flex tablette:flex-row tablette:gap-4">
              <div className="flex flex-col gap-1 mb-3 tablette:w-2/4">
                <label htmlFor="name">Prénom</label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  className="rounded-md bg-secondary pl-2 h-10 text-primary"
                  placeholder="John"
                  required
                />
              </div>
              <div className="flex flex-col gap-1 mb-3 tablette:w-2/4">
                <label htmlFor="lastname">Nom</label>
                <input
                  type="text"
                  name="from_lastname"
                  id="lastname"
                  className="rounded-md bg-secondary pl-2 h-10 text-primary"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
            <div className="tablette:flex tablette:flex-row tablette:gap-4">
              <div className="flex flex-col gap-1 mb-3 tablette:w-2/4">
                <label htmlFor="entreprise">Entreprise (Optionnel)</label>
                <input
                  type="text"
                  id="entreprise"
                  className="rounded-md bg-secondary pl-2 h-10 text-primary"
                  placeholder="SMM"
                  name="entreprise"
                />
              </div>
              <div className="flex flex-col gap-1 mb-3 tablette:w-2/4">
                <label htmlFor="email">Adresse mail</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="rounded-md bg-secondary pl-2 h-10 text-primary"
                  placeholder="contact@gmail.com"
                />
              </div>
            </div>
            <label htmlFor="message">Parlez-nous de votre projet </label>
            <textarea
              required
              name="message"
              id="message"
              className="w-full h-48 rounded-md bg-secondary pl-2 pt-2 mt-2 text-primary"
              placeholder="Description  du projet, besoins, timing, objectifs... Donnez-nous des informations  sur votre projet afin que nous puissions préparer au mieux notre futur échange."
            ></textarea>

            <motion.button
              type="submit"
              className="mt-6 bg-ascent w-full py-2 rounded-md  "
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.9 }}
            >
              {spin ? (
                <div className="w-full grid place-content-center">
                  <Image
                    src={loadingGif}
                    alt="loading spin"
                    className="w-5 h-5"
                  />
                </div>
              ) : (
                "Envoyer"
              )}
            </motion.button>
          </form>
          <div className="border-[0.5px] bg-secondary w-full mb-10 tablette:w-0 tablette:mx-14"></div>
          <div>
            <div>
              <p className="text-secondary">
                Vous souhaitez nous contacter directement ?
              </p>
              <div>
                <Link href="mailto:contact@sebastien-morazzani.com">
                  contact@sebastien-morazzani.com
                </Link>{" "}
                / <a href="tel:0636377046">+33 6 36 37 70 46</a>
              </div>
            </div>
            <div className="mt-6  mb-20">
              <Link
                href="https://calendly.com/sebastien-morazzani/reunion-zoom"
                target="_blank"
                className="text-ascent"
              >
                Organiser un appel Zoom ?
              </Link>
            </div>
          </div>
        </section>
      </motion.main>
    </AnimatePresence>
  );
};

export default Contact;
