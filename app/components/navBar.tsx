"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Link from "next/link";

export default function NavBar() {
  const { language, toggleLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const isEN = language === "EN";

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <nav className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-4 md:gap-8 md:px-8">
        <Link href="#inicio" className="flex items-center gap-3">
          <span className="hidden text-sm font-semibold uppercase tracking-[0.18em] text-white/85 sm:block">
            Franco
          </span>
        </Link>

        <ul className="hidden items-center justify-center gap-8 md:flex">
          <li>
            <Link
              href="#inicio"
              className="text-sm text-white/60 transition hover:text-white"
            >
              {isEN ? "Home" : "Inicio"}
            </Link>
          </li>

          <li>
            <Link
              href="#about"
              className="text-sm text-white/60 transition hover:text-white"
            >
              {isEN ? "About" : "Acerca de"}
            </Link>
          </li>

          <li>
            <Link
              href="#experience"
              className="text-sm text-white/60 transition hover:text-white"
            >
              {isEN ? "Experience" : "Experiencia"}
            </Link>
          </li>

          <li>
            <Link
              href="#projects"
              className="text-sm text-white/60 transition hover:text-white"
            >
              {isEN ? "Projects" : "Proyectos"}
            </Link>
          </li>

          <li>
            <Link
              href="#contact"
              className="text-sm text-white/60 transition hover:text-white"
            >
              {isEN ? "Contact" : "Contacto"}
            </Link>
          </li>
        </ul>

        <div className="flex items-center justify-end gap-3">
          <button
            onClick={toggleLanguage}
            className="cursor-pointer rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            {language}
          </button>

          <button
            className="rounded-full border border-white/10 bg-white/5 p-2 text-white/85 transition hover:bg-white/10 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <HiOutlineX size={22} /> : <HiOutlineMenu size={22} />}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-white/10 bg-black/70 backdrop-blur-2xl transition-all duration-300 md:hidden ${
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-5 py-4">
          <li>
            <Link
              href="#inicio"
              className="block rounded-2xl px-4 py-3 text-sm text-white/75 transition hover:bg-white/5 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {isEN ? "Home" : "Inicio"}
            </Link>
          </li>

          <li>
            <Link
              href="#about"
              className="block rounded-2xl px-4 py-3 text-sm text-white/75 transition hover:bg-white/5 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {isEN ? "About" : "Acerca de"}
            </Link>
          </li>

          <li>
            <Link
              href="#experience"
              className="block rounded-2xl px-4 py-3 text-sm text-white/75 transition hover:bg-white/5 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {isEN ? "Experience" : "Experiencia"}
            </Link>
          </li>

          <li>
            <Link
              href="#projects"
              className="block rounded-2xl px-4 py-3 text-sm text-white/75 transition hover:bg-white/5 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {isEN ? "Projects" : "Proyectos"}
            </Link>
          </li>

          <li>
            <Link
              href="#contact"
              className="block rounded-2xl px-4 py-3 text-sm text-white/75 transition hover:bg-white/5 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {isEN ? "Contact" : "Contacto"}
            </Link>
          </li>

          <li className="mt-3 px-4">
            <button
              className="flex w-full cursor-pointer justify-end rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
              onClick={() => {
                toggleLanguage();
                setOpen(false);
              }}
            >
              {isEN ? "Language" : "Idioma"}: {language}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
