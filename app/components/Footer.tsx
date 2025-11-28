'use client'

import { useLanguage } from "@/context/LanguageContext";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {

  const {language} = useLanguage();

    return (
        
<div className="bg-sky-900 text-white py-20">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-6">


    <div className="flex flex-col justify-center space-y-6">

      <h2 className="text-4xl font-bold">{language === "EN" ? "Contact Me" : "Contactame"}</h2>

      <p className="opacity-90 text-lg">
        {language === 'EN' ? "If u have any project, colab or just wanna say Hi, send a message" : "Si tienes algun proyecto, colaboracion o simplemente quieres decir hola, manda un mensaje."}
        
      </p>

      <div className="space-y-2">
        <p className="text-xl font-semibold">📧 nt34161uvp.edu.mx</p>
        <p className="text-xl">📍 Ciudad de Puebla, México</p>
      </div>

      <div className="flex gap-4 text-3xl mt-4">
        <a href="https://github.com/jeanfranco22" className="hover:text-gray-300">
          <FaGithub />
        </a>
        <a href="https://linkedin.com" className="hover:text-gray-300">
          <FaLinkedin />
        </a>
      </div>

    </div>

    
    <div className="w-full max-w-md mx-auto">
      <div className="bg-blue-100 text-black rounded-lg px-5 py-8 space-y-6">

        <div className="flex flex-col">
          <label htmlFor="username" className="font-semibold mb-2 flex">
            {language === "EN" ? "Your Name" : "Tu Nombre"}
          </label>
          <input
            className="bg-white border border-gray-300 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            type="text"
            id="username"
            placeholder="Name"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="font-semibold mb-2 flex">
            {language === "EN" ? "Your Email" : "Tu Correo"}
          </label>
          <input
            className="bg-white border border-gray-300 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            type="email"
            id="email"
            placeholder="Email@example.com"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="info" className="font-semibold mb-2 flex">
            {language === "EN" ? "Information" : "Informacion"}
          </label>
          <textarea
            className="bg-white border border-gray-300 rounded-xl py-3 px-4 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            id="info"
            placeholder="Info..."
          />
        </div>

        <button className="bg-blue-500 text-white py-3 px-4 rounded-xl w-full hover:bg-blue-600 transition">
          {language === "EN" ? "Submit" : "Enviar"}
        </button>

      </div>
    </div>

  </div>
</div>

    )
}

export default Footer;