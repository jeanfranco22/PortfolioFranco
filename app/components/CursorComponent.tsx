"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorGlowHero() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const animationFrame = useRef<number | null>(null);

  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };

    const handleMouseEnter = () => {
      setIsInside(true);
    };

    const handleMouseLeave = () => {
      setIsInside(false);
    };

    const animate = () => {
      current.current.x += (mouse.current.x - current.current.x) * 0.12;
      current.current.y += (mouse.current.y - current.current.y) * 0.12;

      setGlowPosition({
        x: current.current.x,
        y: current.current.y,
      });

      animationFrame.current = requestAnimationFrame(animate);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);

      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-[#06141f] text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0c4a6e_0%,#06141f_45%,#020617_100%)]" />

      <div
        className="
          absolute inset-0 opacity-[0.08]
          bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isInside ? 1 : 0,
          background: `
            radial-gradient(
              500px circle at ${glowPosition.x}px ${glowPosition.y}px,
              rgba(56, 189, 248, 0.22),
              rgba(59, 130, 246, 0.14) 25%,
              rgba(255, 255, 255, 0.06) 40%,
              transparent 70%
            )
          `,
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 blur-3xl transition-opacity duration-500"
        style={{
          opacity: isInside ? 0.9 : 0,
          background: `
            radial-gradient(
              320px circle at ${glowPosition.x}px ${glowPosition.y}px,
              rgba(125, 211, 252, 0.18),
              transparent 75%
            )
          `,
        }}
      />

      <div className="absolute inset-0 bg-black/20" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 md:px-12">
        <div className="grid w-full grid-cols-1 items-center gap-14 md:grid-cols-2">
          {/* Texto */}
          <div className="space-y-8">
            <span className="inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-1 text-sm text-sky-300 backdrop-blur-sm">
              Frontend Developer
            </span>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                Building modern, elegant and
                <span className="block bg-gradient-to-r from-sky-300 via-cyan-200 to-white bg-clip-text text-transparent">
                  interactive web experiences
                </span>
              </h1>

              <p className="max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                I create responsive interfaces with strong visual identity,
                smooth interactions and a clean user experience focused on real
                products.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="rounded-2xl bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition-transform duration-300 hover:scale-[1.03]">
                View Projects
              </button>

              <button className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                Contact Me
              </button>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-6 rounded-[2rem] bg-sky-400/10 blur-3xl" />

              <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl">
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-3">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>

                  <div className="rounded-[1.2rem] border border-sky-400/10 bg-[linear-gradient(135deg,#0f172a,#082f49,#0f172a)] p-8">
                    <div className="space-y-4">
                      <div className="h-5 w-24 rounded bg-white/10" />
                      <div className="h-10 w-3/4 rounded bg-white/10" />
                      <div className="h-10 w-2/3 rounded bg-sky-300/20" />
                      <div className="grid grid-cols-2 gap-3 pt-4">
                        <div className="h-24 rounded-2xl bg-white/5" />
                        <div className="h-24 rounded-2xl bg-white/5" />
                        <div className="col-span-2 h-32 rounded-2xl bg-white/5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* fin lado derecho */}
        </div>
      </div>
    </section>
  );
}
