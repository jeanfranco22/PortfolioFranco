"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { projects } from "@/hooks/projects";
import { techStack } from "../../hooks/TeckSkills";
import { FeaturedProjectCard } from "../components/CardComponent";

export default function HomeComponent() {
  const { language } = useLanguage();
  const isEN = language === "EN";

  return (
    <main className="min-h-screen bg-[#0a0a0b] text-white selection:bg-white selection:text-black">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0a0a0b]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.10),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_18%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.08),transparent_25%)]" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <section className="relative overflow-hidden px-6 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              {isEN
                ? "Available for frontend and full stack opportunities"
                : "Disponible para oportunidades frontend y full stack"}
            </div>

            <h1 className="text-5xl font-semibold tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
              {isEN
                ? "Building modern web experiences"
                : "Construyendo experiencias web modernas"}
            </h1>

            <p className="mt-6 max-w-2xl text-base text-white/60 sm:text-lg">
              {isEN
                ? "I'm Franco Ferrer, a Full Stack Developer focused on clean interfaces, scalable products, and modern development with React, Next.js, TypeScript and Node.js."
                : "Soy Franco Ferrer, desarrollador Full Stack enfocado en interfaces limpias, productos escalables y desarrollo moderno con React, Next.js, TypeScript y Node.js."}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#projects"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90"
              >
                {isEN ? "View projects" : "Ver proyectos"}
              </Link>

              <Link
                href="#contact"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white hover:bg-white/10"
              >
                {isEN ? "Contact me" : "Contáctame"}
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              {["React", "Next.js", "TypeScript", "Tailwind", "Node.js"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
              <div className="rounded-[22px] border border-white/10 bg-[#0f0f10] p-4">
                <div className="mb-4 flex justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs text-white/40">
                      {isEN ? "Developer profile" : "Perfil developer"}
                    </p>
                    <p className="text-sm text-white/80">Jean Franco Ferrer</p>
                  </div>
                  <span className="text-xs text-emerald-300">
                    {isEN ? "Open" : "Disponible"}
                  </span>
                </div>

                <div className="relative h-[300px] rounded-2xl overflow-hidden">
                  <Image
                    src="/FotoDePerfil.png"
                    alt="Franco"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stack" className="px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-semibold mb-10">
            {isEN ? "Tech stack" : "Tecnologías"}
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="rounded-3xl border border-white/10 p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{tech.icon}</div>
                  <p>{tech.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-semibold mb-10">
            {isEN ? "Projects" : "Proyectos"}
          </h2>

          <div className="space-y-10">
            <FeaturedProjectCard project={projects[0]} isEN={isEN} />

            <div className="grid gap-6 lg:grid-cols-3">
              {projects.slice(1).map((project) => (
                <FeaturedProjectCard
                  key={project.title}
                  project={project}
                  isEN={isEN}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 pb-24 pt-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            {isEN ? "Contact" : "Contacto"}
          </h2>

          <div className="flex gap-4">
            <a href="https://github.com" target="_blank">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
