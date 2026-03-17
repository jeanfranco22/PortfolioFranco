"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNode,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { RiNextjsLine, RiVercelLine } from "react-icons/ri";
import {
  SiPostgresql,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const projects = [
  {
    title: "Snake Game",
    descriptionEN:
      "Classic arcade game built with Vanilla JavaScript, HTML and CSS.",
    descriptionES:
      "Videojuego clásico desarrollado con Vanilla JavaScript, HTML y CSS.",
    href: "https://snake-game-ebon-omega.vercel.app/",
    image: "/Snake.png",
    tag: "Frontend",
  },
  {
    title: "Cartier Inspired E-commerce",
    descriptionEN:
      "Luxury jewelry e-commerce inspired by Cartier, focused on elegant UI and branding.",
    descriptionES:
      "E-commerce de joyería inspirado en Cartier, enfocado en UI elegante e identidad visual.",
    href: "https://e-commerce-tau-three-66.vercel.app/",
    image: "/ecommerce.png",
    tag: "UI / Branding",
  },
  {
    title: "Pilates Studio",
    descriptionEN:
      "Appointment booking website for a pilates studio with a modern and clean interface.",
    descriptionES:
      "Sitio para agendar citas de un estudio de pilates con una interfaz moderna y limpia.",
    href: "https://pilates-studio-beryl.vercel.app/",
    image: "/pilates.png",
    tag: "Business Website",
  },
];

const techStack = [
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <RiNextjsLine /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <FaNode /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Vercel", icon: <RiVercelLine /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
];

export default function HomePage() {
  const { language } = useLanguage();
  const isEN = language === "EN";

  return (
    <main className="min-h-screen bg-[#0a0a0b] text-white selection:bg-white selection:text-black">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0a0a0b]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.10),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_18%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.08),transparent_25%)]" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <Link
            href="/"
            className="text-sm font-semibold tracking-[0.2em] text-white/90 uppercase"
          >
            Franco
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#about"
              className="text-sm text-white/60 transition hover:text-white"
            >
              {isEN ? "About" : "Acerca de"}
            </a>
            <a
              href="#stack"
              className="text-sm text-white/60 transition hover:text-white"
            >
              {isEN ? "Stack" : "Tecnologías"}
            </a>
            <a
              href="#projects"
              className="text-sm text-white/60 transition hover:text-white"
            >
              {isEN ? "Projects" : "Proyectos"}
            </a>
            <a
              href="#contact"
              className="text-sm text-white/60 transition hover:text-white"
            >
              {isEN ? "Contact" : "Contacto"}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={
                isEN
                  ? "/Jean_Franco_Ferrer_Méndez_CVIngles.pdf"
                  : "/Jean_Franco_Ferrer_Méndez_CV.pdf"
              }
              target="_blank"
              className="rounded-full border border-white/15 bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
            >
              {isEN ? "Resume" : "CV"}
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              {isEN
                ? "Available for frontend and full stack opportunities"
                : "Disponible para oportunidades frontend y full stack"}
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
              {isEN
                ? "Building modern web experiences"
                : "Construyendo experiencias web modernas"}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              {isEN
                ? "I'm Franco Ferrer, a Full Stack Developer focused on clean interfaces, scalable products, and modern development with React, Next.js, TypeScript and Node.js."
                : "Soy Franco Ferrer, desarrollador Full Stack enfocado en interfaces limpias, productos escalables y desarrollo moderno con React, Next.js, TypeScript y Node.js."}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                {isEN ? "View projects" : "Ver proyectos"}
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:border-white/30 hover:bg-white/10"
              >
                {isEN ? "Contact me" : "Contáctame"}
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind",
                "Node.js",
                "PostgreSQL",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative rounded-[28px] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

              <div className="rounded-[22px] border border-white/10 bg-[#0f0f10] p-4">
                <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                      {isEN ? "Developer profile" : "Perfil developer"}
                    </p>
                    <p className="mt-1 text-sm font-medium text-white/80">
                      Jean Franco Ferrer
                    </p>
                  </div>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                    {isEN ? "Open to work" : "Disponible"}
                  </span>
                </div>

                <div className="grid gap-4">
                  <div className="relative h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-black">
                    <Image
                      src="/FotoDePerfil.png"
                      alt="Franco Ferrer"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                        {isEN ? "Focus" : "Enfoque"}
                      </p>
                      <p className="mt-2 text-sm text-white/80">
                        {isEN ? "Frontend / UI" : "Frontend / UI"}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                        {isEN ? "Location" : "Ubicación"}
                      </p>
                      <p className="mt-2 text-sm text-white/80">
                        Puebla, México
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                      {isEN ? "Main stack" : "Stack principal"}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white/75">
                      React · Next.js · TypeScript · TailwindCSS · Node.js ·
                      PostgreSQL
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/35">
              {isEN ? "About" : "Acerca de"}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
              {isEN
                ? "Clean UI, strong foundations."
                : "UI limpia, bases sólidas."}
            </h2>
          </div>

          <div className="space-y-6">
            <p className="max-w-3xl text-base leading-8 text-white/65 md:text-lg">
              {isEN
                ? "I enjoy building products that feel modern, fast and intentional. My work combines frontend development, responsive design and full stack implementation to create polished user experiences."
                : "Disfruto construir productos que se sientan modernos, rápidos e intencionales. Mi trabajo combina desarrollo frontend, diseño responsivo e implementación full stack para crear experiencias pulidas."}
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-sm font-medium text-white">Education</p>
                <ul className="mt-4 space-y-2 text-sm text-white/60">
                  <li>• FreeCodeCamp</li>
                  <li>• Soy Henry</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-sm font-medium text-white">
                  {isEN ? "What I care about" : "Lo que me importa"}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-white/60">
                  <li>
                    • {isEN ? "Scalable interfaces" : "Interfaces escalables"}
                  </li>
                  <li>
                    •{" "}
                    {isEN ? "Reusable components" : "Componentes reutilizables"}
                  </li>
                  <li>
                    •{" "}
                    {isEN ? "Clear visual hierarchy" : "Jerarquía visual clara"}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.25em] text-white/35">
              {isEN ? "Stack" : "Tecnologías"}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
              {isEN
                ? "Tools I use to build."
                : "Herramientas que uso para construir."}
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl text-white/80 transition group-hover:scale-110">
                    {tech.icon}
                  </div>
                  <p className="text-sm font-medium text-white/80">
                    {tech.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.25em] text-white/35">
              {isEN ? "Projects" : "Proyectos"}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
              {isEN ? "Selected work." : "Trabajo seleccionado."}
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                target="_blank"
                className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="relative h-64 overflow-hidden border-b border-white/10 bg-black">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/55">
                    {project.tag}
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/60">
                    {isEN ? project.descriptionEN : project.descriptionES}
                  </p>

                  <div className="mt-6 flex items-center text-sm text-white/80">
                    {isEN ? "Open project" : "Abrir proyecto"}
                    <span className="ml-2 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 pb-24 pt-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-8 backdrop-blur-xl md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-white/35">
                  {isEN ? "Contact" : "Contacto"}
                </p>

                <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
                  {isEN
                    ? "Let’s build something great."
                    : "Construyamos algo increíble."}
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">
                  {isEN
                    ? "I’m open to frontend, full stack and product-focused opportunities. You can reach me through my social profiles or download my resume."
                    : "Estoy abierto a oportunidades frontend, full stack y enfocadas en producto. Puedes contactarme por mis redes o descargar mi CV."}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://github.com/jeanfranco22"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/85 transition hover:border-white/20 hover:bg-white/10"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/85 transition hover:border-white/20 hover:bg-white/10"
                  >
                    <FaLinkedin />
                    LinkedIn
                  </a>

                  <Link
                    href={
                      isEN
                        ? "/Jean_Franco_Ferrer_Méndez_CVIngles.pdf"
                        : "/Jean_Franco_Ferrer_Méndez_CV.pdf"
                    }
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                  >
                    {isEN ? "Download resume" : "Descargar CV"}
                  </Link>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-black/30 p-6">
                <p className="text-sm font-medium text-white/80">
                  {isEN ? "Quick info" : "Información rápida"}
                </p>

                <div className="mt-6 space-y-5">
                  <div className="border-b border-white/10 pb-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                      {isEN ? "Name" : "Nombre"}
                    </p>
                    <p className="mt-2 text-sm text-white/80">
                      Jean Franco Ferrer Méndez
                    </p>
                  </div>

                  <div className="border-b border-white/10 pb-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                      {isEN ? "Role" : "Rol"}
                    </p>
                    <p className="mt-2 text-sm text-white/80">
                      {isEN
                        ? "Full Stack Developer"
                        : "Desarrollador Full Stack"}
                    </p>
                  </div>

                  <div className="border-b border-white/10 pb-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                      {isEN ? "Based in" : "Ubicado en"}
                    </p>
                    <p className="mt-2 text-sm text-white/80">Puebla, México</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                      {isEN ? "Primary focus" : "Enfoque principal"}
                    </p>
                    <p className="mt-2 text-sm text-white/80">
                      Frontend Development · UI · Next.js
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Franco Ferrer</p>
            <p>
              {isEN
                ? "Designed with a modern developer-first aesthetic."
                : "Diseñado con una estética moderna enfocada en developers."}
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}
