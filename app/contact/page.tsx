"use client";
import React, { useEffect, useRef, useState } from "react";
import type { Metadata } from "next";
import emailjs from "@emailjs/browser";
import Head from "next/head";

// export const metadata: Metadata = {
//   title: "Contact | Sébastien Morazzani-Marigny",
//   description:
//     "Contact | Sébastien Morazzani-Marigny. Parlons de votre futur projet. Il est important d'échanger afin de mieux comprendre vos besoins et vos attentes pour délivrer un site web exceptionel.",
// };

const Contact = () => {
  const form = useRef(null);
  const [msg, setMsg] = useState("Envoyer");

  useEffect(() => {
    document.title = "Demander un Devis gratuit | Sébastien Morazzani-Marigny";
    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription?.setAttribute(
      "content",
      "Parlons de votre projet | Sébastien Morazzani-Marigny. Parlons de votre futur projet. Il est important d'échanger afin de mieux comprendre vos besoins et vos attentes pour délivrer un site web exceptionnel."
    );
  }, []);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
      form.current
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            setMsg("Envoyé");
            const formClear = form.current as HTMLFormElement | null;
            if (formClear) {
              formClear.reset();
            }
            setTimeout(() => {
              setMsg("Envoyer");
            }, 3000);
          },
          (error) => {
            setMsg("Erreur");
            setTimeout(() => {
              setMsg("Envoyer");
            }, 3000);
          }
        );
    }
  };

  return (
    <>
      <main className="text-white">
        <section className="my-20">
          <div className="w-2/4">
            <h1 className="text-2xl">Parlons de votre futur projet.</h1>
            <p className="text-secondary">
              Il est important d&apos;échanger afin de mieux comprendre vos
              besoins et vos attentes pour délivrer un site web exceptionel
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
                <label htmlFor="name">
                  Prénom <span className="text-[#FF0000]">*</span>
                </label>
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
                <label htmlFor="lastname">
                  Nom <span className="text-[#FF0000]">*</span>
                </label>
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
                <label htmlFor="email">
                  Adresse mail <span className="text-[#FF0000]">*</span>
                </label>
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
            <label htmlFor="message">
              Parlez-nous de votre projet{" "}
              <span className="text-[#FF0000]">*</span>
            </label>
            <textarea
              required
              name="message"
              id="message"
              className="w-full h-48 rounded-md bg-secondary pl-2 pt-2 mt-2 text-primary"
              placeholder="Description  du projet, besoins, timing, objectifs... Donnez-nous des informations  sur votre projet afin que nous puissions préparer au mieux notre futur échange."
            ></textarea>

            <button
              type="submit"
              className="mt-6 bg-ascent w-full py-2 rounded-md  animate-pulse"
            >
              {msg}
            </button>
          </form>
          <div className="border-[0.5px] bg-secondary w-full mb-10 tablette:w-0 tablette:mx-14"></div>
          <div>
            <div>
              <p className="text-secondary">
                Vous souhaitez nous contacter directement ?
              </p>
              <div>
                <a href="mailto:contact@sebastien-morazzani.com">
                  contact@sebastien-morazzani.com
                </a>{" "}
                / <a href="tel:0636377046">+33 6 36 37 70 46</a>
              </div>
            </div>
            <div className="mt-6  mb-20">
              <p className="text-secondary">Organiser un appel Zoom ?</p>

              <a
                href="https://calendly.com/sebastien-morazzani/reunion-zoom"
                target="_blank"
                className="text-ascent"
              >
                Organiser
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
