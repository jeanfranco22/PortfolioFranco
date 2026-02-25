"use client";

import { useLanguage } from "@/context/LanguageContext";
import cardStyles from "./Card.module.css";
import { FaReact, FaHtml5, FaCss3Alt, FaNode, FaGithub, FaLinkedin, FaRegHandPeace } from "react-icons/fa";
import { RiVercelLine, RiNextjsLine } from "react-icons/ri";
import { SiVitess, SiPostgresql, SiMongodb } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const { language } = useLanguage();

  return (
    <div>
      {/* HERO */}
      <section className="w-full min-h-screen flex items-center bg-gradient-to-b from-[#0c4a70] to-[#072f46] py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-16 max-w-7xl mx-auto">

          <div className="flex justify-center items-center order-2 md:order-1">
            <div className="relative w-48 sm:w-60 md:w-80 lg:w-[28rem] aspect-square rounded-full overflow-hidden border-4 border-sky-900 shadow-xl">
              <Image
                src="/FotoDePerfil.png"
                alt="foto de perfil"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center order-1 md:order-2">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white flex items-center gap-3 leading-tight">
              {language === "EN" ? "I'm Franco" : "Soy Franco"}
              <FaRegHandPeace className="text-4xl text-sky-300" />
            </h1>

            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-sky-200 font-semibold mt-4">
              {language === "EN"
                ? "Full Stack Developer"
                : "Desarrollador Full Stack"}
            </p>

            <a
              href="/Jean-Franco-Ferrer-Méndez-CV.pdf"
              className="mt-6 w-40 py-3 px-7 bg-sky-900 text-white flex justify-center rounded-lg text-lg font-semibold hover:bg-sky-800 transition"
            >
              {language === "EN" ? "Resume" : "Curriculum"}
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT + SKILLS */}
      <div className="w-full py-20 bg-sky-900 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-6">

          <div className="space-y-8">
            <h2 className="text-4xl font-bold">
              {language === "EN" ? "About" : "Acerca De"}
            </h2>

            <p className="text-lg leading-relaxed opacity-90">
              {language === "EN"
                ? "Hi, my name is Jean Franco Ferrer, I'm a frontend developer based in Puebla, México."
                : "Hola, mi nombre es Jean Franco Ferrer, soy desarrollador frontend en Puebla, México."}
            </p>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">
                {language === "EN" ? "Education" : "Educación"}
              </h3>
              <ul className="list-disc list-inside text-lg space-y-1 opacity-90">
                <li>FreeCodeCamp</li>
                <li>Soy Henry</li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold">
              {language === "EN" ? "Skills" : "Habilidades"}
            </h3>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-8 text-4xl sm:text-5xl">
              <FaReact className="hover:text-blue-500 transition" />
              <FaHtml5 className="hover:text-orange-500 transition" />
              <FaCss3Alt className="hover:text-blue-400 transition" />
              <FaNode className="hover:text-green-500 transition" />
              <RiVercelLine className="hover:text-black transition" />
              <RiNextjsLine className="hover:text-gray-900 transition" />
              <SiVitess className="hover:text-purple-600 transition" />
              <SiPostgresql className="hover:text-blue-700 transition" />
              <SiMongodb className="hover:text-green-600 transition" />
            </div>
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <section className="mb-20 pt-10">
        <h2 className="text-center text-4xl md:text-5xl font-semibold tracking-tight text-white mb-12">
          {language === "EN" ? "Projects" : "Proyectos"}
        </h2>

        <div className={cardStyles.container}>

          <section className={cardStyles.card}>
            <div className={cardStyles.preview}>
              <Image src="/fondo1.webp" alt="Contacto" fill className="object-cover" />
            </div>
            <div className={cardStyles.content}>
              <p>{language === "EN" ? "My links and contact" : "Mis redes y contacto"}</p>
              <div className={cardStyles.icons}>
                <a href="https://github.com/jeanfranco22"><FaGithub /></a>
                <a href="#"><FaLinkedin /></a>
              </div>
            </div>
          </section>

          <Link href="https://ap-iproject-five.vercel.app/" target="_blank" className={cardStyles.card}>
            <div className={cardStyles.preview}>
              <Image src="/Fluxnotes.png" alt="Fluxnotes" fill className="object-cover" />
            </div>
            <div className={cardStyles.content}>
              <p>Fluxnotes – Notes app inspired by Notion</p>
            </div>
          </Link>

          <Link href="https://snake-game-ebon-omega.vercel.app/" target="_blank" className={cardStyles.card}>
            <div className={cardStyles.preview}>
              <Image src="/Snake.png" alt="Snake Game" fill className="object-cover" />
            </div>
            <div className={cardStyles.content}>
              <p>Snake game built with Vanilla JS</p>
            </div>
          </Link>

          <Link href="https://e-commerce-tau-three-66.vercel.app/" target="_blank" className={cardStyles.card}>
            <div className={cardStyles.preview}>
              <Image src="/ecommerce.png" alt="E-commerce" fill className="object-cover" />
            </div>
            <div className={cardStyles.content}>
              <p>{language === "EN" ? "Jewelry e-commerce inspired by Cartier." : "Tienda de joyería inspirada en Cartier"}</p>
            </div>
          </Link>

          <Link href="https://pilates-studio-beryl.vercel.app/" target="_blank" className={cardStyles.card}>
            <div className={cardStyles.preview}>
              <Image src="/pilates.png" alt="Pilates Studio" fill className="object-cover" />
            </div>
            <div className={cardStyles.content}>
              <p>{language === "EN" ? "Pilates website for booking appointments" : "Sitio de pilates para agendar citas"}</p>
            </div>
          </Link>

        </div>
      </section>
    </div>
  );
}
