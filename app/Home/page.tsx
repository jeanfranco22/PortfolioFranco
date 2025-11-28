'use client'

import { useLanguage } from '@/context/LanguageContext';
import cardStyles from './Card.module.css'
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { RiVercelLine } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { SiVitess } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegHandPeace } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';


export default function HomePage() {

    const { language } = useLanguage();

    return (
        <div>
            <section className="w-full h-screen flex items-center bg-gradient-to-b from-[#0c4a70] to-[#072f46]">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-16">

    
    <div className="flex flex-col justify-center px-25">
      <h1 className="text-5xl font-extrabold text-white flex items-center gap-3">
                            
                            {language === "EN" 
                                ? "I'm Franco"    
                                : "Soy Franco"}     
                            
                            <FaRegHandPeace className="text-4xl text-sky-300" />
                        </h1>

      <p className="text-4xl md:text-5xl text-sky-200 font-semibold mt-4">
       {language === 'EN' ? "Full Stack Developer" : "Desarrollador Full Stack"}
      </p>

      <a href="/about" className="mt-6 w-40 py-3 px-7 bg-sky-900 text-white flex justify-center rounded-lg text-lg font-semibold hover:bg-sky-800 transition">
        {language === "EN" ? "Resume" : "Curriculum"}
      </a>
    </div>

    
    <div className="flex justify-center items-center px-30">
  <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-sky-900 shadow-xl">
    <Image 
      src="/Fotoperfil.jpeg" 
      alt="foto de perfil" 
      fill 
      className="object-cover"
    />
  </div>
</div>

  </div>
</section>

            <div className="w-full py-20 bg-sky-900 text-white">

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-6">

  
    <div className="space-y-8">

      <h2 className="text-4xl font-bold">{language === 'EN' ? "About" : "Acerca De"}</h2>

      <p className="text-lg leading-relaxed opacity-90">
       {language === "EN" ? "Hi, my name is Franco Ferrer, I'm a frontend developer based in Puebla, México." : "Hola, mi nombre es Franco Ferrer, soy un desarrollador frontend con sede en Puebla, México."} Hi, my name is Jean Franco Ferrer, I&apos;m a frontend developer based in Puebla, México.
      </p>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">{language === "EN" ? "Education" : "Educacion"}</h3>
        <ul className="list-disc list-inside text-lg space-y-1 opacity-90">
          <li>FreeCodeCamp</li>
          <li>Soy Henry</li>
        </ul>
      </div>

    </div>

   
    <div className="space-y-8">
      <h3 className="text-3xl font-bold">{language === "EN" ? "Skills" : "Habilidades"}</h3>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-8 text-5xl text-white">

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

          <section className='mb-20 pt-10'>
  <h2 className='text-center text-4xl md:text-5xl font-semibold tracking-tight text-white mb-12'>
    {language === "EN" ? "Projects" : "Proyectos"}
  </h2>

  <div className={cardStyles.container}>

    <section className={cardStyles.card}>
      <div className={cardStyles.preview}>
        
      </div>
      <div className={cardStyles.content}>
        <p>Mis redes y sitios de contacto</p>
        <div className={cardStyles.icons}>
          <a href="https://github.com/jeanfranco22"><FaGithub /></a>
          <a href=""><FaLinkedin /></a>
        </div>
      </div>
    </section>

    <section className={cardStyles.card}>
      <div className={cardStyles.preview}>
        <Image src="/Snake.png" alt="Snake" fill className="object-cover" />
      </div>
      <div className={cardStyles.content}>
        <p>Juego desarrollado con Vanilla JS, CSS, HTML</p>
      </div>
    </section>

    <Link  href="https://e-commerce-ebsi1dxg6-francos-projects-d899fa4d.vercel.app/Home"
      target="_blank" className={cardStyles.card}>
      
      <div className={cardStyles.preview}>
        <Image src="/ecommerce.png" alt="E-commerce" fill className="object-cover" />
      </div>
      <div className={cardStyles.content}>
        <p>Tienda de joyería inspirada en Cartier</p>
      </div>
    
    </Link>

    <section className={cardStyles.card}>
      <div className={cardStyles.preview}>
        <Image src="/pilates.png" alt="Pilates Studio" fill className="object-cover" />
      </div>
      <div className={cardStyles.content}>
        <p>Sitio para agendar citas</p>
      </div>
    </section>

  </div>
</section>
        </div>
 )
}
