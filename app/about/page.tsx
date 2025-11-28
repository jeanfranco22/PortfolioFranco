'use client'

import { useLanguage } from "@/context/LanguageContext";


const About = () => {

  const { language } = useLanguage();

  return (
     <section className="w-full min-h-screen bg-gradient-to-b from-sky-900 to-[#072f46] py-20 text-white">

      <div className="max-w-5xl mx-auto px-6 space-y-16">

    
        <div className="text-center space-y-3">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            {language === "EN" ? "About Me" : "Acerca De Mi"}
           
          </h1>
          <p className="text-sky-200 text-lg max-w-2xl mx-auto opacity-90">
            {language === 'EN' ? "A brief story about who I am, what I do, and why I enjoy building web experiences." : "Una pequeña historia sobre quién soy, qué hago y por qué disfruto tanto construir páginas web."}
            Una pequeña historia sobre quién soy, qué hago y por qué disfruto tanto construir páginas web.
          </p>
        </div>


        <div className="space-y-8 leading-relaxed text-lg opacity-95">

          <p>
            {language === "EN" ? (
            <>
            My name is <span className="font-semibold text-sky-200">Jean Franco Ferrer</span>, I am a Full Stack Developer and Nutritionist from Puebla, Mexico. I previously worked 
            in the healthcare field, especially in clinical nutrition and pediatric oncology, an experience that taught me discipline, teamwork, and the importance of creating solutions 
            that genuinely help people.
            </>
            ) : (
            <>
            Mi nombre es <span className="font-semibold text-sky-200">Jean Franco Ferrer</span>, soy Desarrollador Full Stack y Nutriólogo de profesión, originario de Puebla, México. 
            Durante varios años trabajé en el sector salud, especialmente en nutrición clínica y oncología pediátrica, una experiencia que me enseñó disciplina, trabajo en equipo 
            y la importancia de crear soluciones que realmente ayuden a las personas.
            </>
          )}
</p>

          <p>
            {language === "EN" ? " In 2024, I decided to shift my career path and start my journey in web development. I studied at FreeCodeCamp and later completed the Soy Henry Full Stack Bootcamp, strengthening my skills in JavaScript, React, Next.js, Node.js, and API development. Since then, I've been passionate about building modern, fast, and clean digital products." : "En 2024 dedici dar un giro a mi carrera profesional y comenzar mi camino en el desarrollo web Estudié en FreeCodeCamp y posteriormente completé el bootcamp de Soy Henry, donde reforcé mis habilidades en JavaScript, React, Next.js, Node.js y creación de APIs. Desde entonces me dedico a construir aplicaciones             modernas, rápidas y con un diseño limpio y funcional"}
        
          </p>

          <p>
            Mi objetivo es combinar mis habilidades técnicas con mi experiencia previa en salud para crear proyectos que 
            aporten valor real. Disfruto aprender continuamente, resolver problemas y transformar ideas en productos 
            digitales que se vean y funcionen increíble.
          </p>

        </div>

        
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Education</h2>

          <ul className="list-disc list-inside space-y-2 text-lg opacity-95">
            <li>Full Stack Developer - Soy Henry (Enero 2025 - Noviembre 2025)</li>
            <li>Web Development - FreeCodeCamp (Enero 2024 - Actualidad)</li>
            <li>Licenciatura en Nutrición - Universidad del Valle de Puebla (2015 - 2020)</li>
          </ul>
        </div>

        
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">What I Do</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/10">
              <h3 className="text-2xl font-semibold mb-3">Frontend Development</h3>
              <p className="opacity-95">
                Desarrollo interfaces modernas y responsivas utilizando React y Next.js.
                Me enfoco en crear experiencias visuales atractivas, accesibles y con excelente rendimiento.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/10">
              <h3 className="text-2xl font-semibold mb-3">Backend & APIs</h3>
              <p className="opacity-95">
                Construcción de APIs con Node.js, Express y bases de datos como PostgreSQL y MongoDB.
                Autenticación, rutas protegidas y lógica de negocio escalable.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/10">
              <h3 className="text-2xl font-semibold mb-3">UI / UX Design</h3>
              <p className="opacity-95">
                Diseño minimalista y limpio con enfoque en usabilidad.
                Me apoyo en TailwindCSS, buenas prácticas de diseño y estructura clara.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/10">
              <h3 className="text-2xl font-semibold mb-3">Deploy & Optimization</h3>
              <p className="opacity-95">
                Deploy de proyectos en Vercel, optimización SEO, mejora de performance
                y buenas prácticas para entregar productos rápidos y estables.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
