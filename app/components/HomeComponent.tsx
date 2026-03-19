"use client";

import { useEffect, useRef, useState } from "react";
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

  const pageRef = useRef<HTMLElement | null>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const animationFrame = useRef<number | null>(null);

  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const [isInsidePage, setIsInsidePage] = useState(false);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleMouseEnter = () => {
      setIsInsidePage(true);
    };

    const handleMouseLeave = () => {
      setIsInsidePage(false);
    };

    const animate = () => {
      current.current.x += (mouse.current.x - current.current.x) * 0.08;
      current.current.y += (mouse.current.y - current.current.y) * 0.08;

      setGlowPosition({
        x: current.current.x,
        y: current.current.y,
      });

      animationFrame.current = requestAnimationFrame(animate);
    };

    animationFrame.current = requestAnimationFrame(animate);

    window.addEventListener("mousemove", handleMouseMove);
    page.addEventListener("mouseenter", handleMouseEnter);
    page.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      page.removeEventListener("mouseenter", handleMouseEnter);
      page.removeEventListener("mouseleave", handleMouseLeave);

      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <main
      ref={pageRef}
      className="relative min-h-screen bg-[#0a0a0b] text-white selection:bg-white selection:text-black"
    >
      {/* Fondo global */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0a0a0b]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.10),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_18%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.08),transparent_25%)]" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      {/* Glow global */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: isInsidePage ? 1 : 0,
          background: `
            radial-gradient(
              560px circle at ${glowPosition.x}px ${glowPosition.y}px,
              rgba(56, 189, 248, 0.14),
              rgba(59, 130, 246, 0.10) 24%,
              rgba(255, 255, 255, 0.04) 42%,
              transparent 72%
            )
          `,
        }}
      />

      {/* Glow secundario */}
      <div
        className="pointer-events-none fixed inset-0 z-0 blur-3xl transition-opacity duration-500"
        style={{
          opacity: isInsidePage ? 0.7 : 0,
          background: `
            radial-gradient(
              300px circle at ${glowPosition.x}px ${glowPosition.y}px,
              rgba(125, 211, 252, 0.12),
              transparent 78%
            )
          `,
        }}
      />

      {/* Overlay suave para contraste */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-white/[0.015] via-transparent to-transparent" />

      {/* Todo el contenido encima */}
      <div className="relative z-10">
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
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                >
                  {isEN ? "View projects" : "Ver proyectos"}
                </Link>

                <Link
                  href="#contact"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white transition hover:bg-white/10"
                >
                  {isEN ? "Contact me" : "Contáctame"}
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap gap-3">
                {["React", "Next.js", "TypeScript", "Tailwind", "Node.js"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-sm"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-6 rounded-[32px] bg-sky-400/10 blur-3xl" />

              <div className="relative rounded-[28px] border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
                <div className="rounded-[22px] border border-white/10 bg-[#0f0f10] p-4">
                  <div className="mb-4 flex justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-xs text-white/40">
                        {isEN ? "Developer profile" : "Perfil developer"}
                      </p>
                      <p className="text-sm text-white/80">
                        Jean Franco Ferrer
                      </p>
                    </div>
                    <span className="text-xs text-emerald-300">
                      {isEN ? "Open" : "Disponible"}
                    </span>
                  </div>

                  <div className="relative h-[300px] overflow-hidden rounded-2xl">
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
            <h2 className="mb-10 text-3xl font-semibold md:text-5xl">
              {isEN ? "Tech stack" : "Tecnologías"}
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="rounded-3xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm"
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
            <h2 className="mb-10 text-3xl font-semibold md:text-5xl">
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
            <h2 className="mb-6 text-3xl font-semibold md:text-5xl">
              {isEN ? "Contact" : "Contacto"}
            </h2>

            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
