"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Image from "next/image";

export default function NavBar() {
  const { language, toggleLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0a1d2f]/90 to-[#0f2d47]/90 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center ">
        <Image
          src="/logo.png"
          alt="logo"
          className="object-contain w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
          width={42}
          height={42}
        />

        <ul className="hidden md:flex gap-10 text-white text-[15px] tracking-wide items-center">
          <li>
            <a href="/Home" className="opacity-80 hover:opacity-100 transition">
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="opacity-80 hover:opacity-100 transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/projects"
              className="opacity-80 hover:opacity-100 transition"
            >
              Projects
            </a>
          </li>

          <li>
            <button
              className="opacity-80 hover:opacity-100 transition cursor-pointer"
              onClick={toggleLanguage}
            >
              {language}
            </button>
          </li>
        </ul>

        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </nav>

      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 
          ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="flex flex-col bg-[#0f2d47]/95 backdrop-blur-xl text-white px-6 py-4 space-y-4 border-t border-white/10">
          <li>
            <a
              href="/Home"
              className="block opacity-80 hover:opacity-100 transition"
              onClick={() => setOpen(false)}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="/about"
              className="block opacity-80 hover:opacity-100 transition"
              onClick={() => setOpen(false)}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="/projects"
              className="block opacity-80 hover:opacity-100 transition"
              onClick={() => setOpen(false)}
            >
              Projects
            </a>
          </li>

          <li>
            <button
              className="opacity-80 hover:opacity-100 transition"
              onClick={() => {
                toggleLanguage();
                setOpen(false);
              }}
            >
              {language}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
