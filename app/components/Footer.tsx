"use client";

import { useLanguage } from "@/context/LanguageContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { language } = useLanguage();
  const isEN = language === "EN";

  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-[#0a0a0b] px-6 pb-16 pt-20 text-white md:px-8 md:pb-20 md:pt-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-8 backdrop-blur-xl md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-center">
              <p className="text-sm uppercase tracking-[0.25em] text-white/35">
                {isEN ? "Contact" : "Contacto"}
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
                {isEN
                  ? "Let’s build something great."
                  : "Construyamos algo increíble."}
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
                {isEN
                  ? "If you have a project, a collaboration idea, or just want to say hi, send me a message."
                  : "Si tienes un proyecto, una idea de colaboración o simplemente quieres saludar, envíame un mensaje."}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                    {isEN ? "Email" : "Correo"}
                  </p>
                  <p className="mt-3 text-sm text-white/80 break-all">
                    francoferrer.dev@gmail.com
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                    {isEN ? "Location" : "Ubicación"}
                  </p>
                  <p className="mt-3 text-sm text-white/80">Puebla, México</p>
                </div>
              </div>

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
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/85 transition hover:border-white/20 hover:bg-white/10"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-black/30 p-6 md:p-7">
              <div className="mb-6">
                <p className="text-sm font-medium text-white/80">
                  {isEN ? "Send a message" : "Enviar mensaje"}
                </p>
                <p className="mt-2 text-sm leading-7 text-white/50">
                  {isEN
                    ? "Simple, clear and direct."
                    : "Simple, claro y directo."}
                </p>
              </div>

              <form className="space-y-5">
                <div className="flex flex-col">
                  <label
                    htmlFor="username"
                    className="mb-2 text-sm font-medium text-white/75"
                  >
                    {isEN ? "Your name" : "Tu nombre"}
                  </label>
                  <input
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/20 focus:bg-white/[0.06]"
                    type="text"
                    id="username"
                    placeholder={isEN ? "Your name" : "Tu nombre"}
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="mb-2 text-sm font-medium text-white/75"
                  >
                    {isEN ? "Your email" : "Tu correo"}
                  </label>
                  <input
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/20 focus:bg-white/[0.06]"
                    type="email"
                    id="email"
                    placeholder={
                      isEN ? "email@example.com" : "correo@ejemplo.com"
                    }
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="info"
                    className="mb-2 text-sm font-medium text-white/75"
                  >
                    {isEN ? "Message" : "Mensaje"}
                  </label>
                  <textarea
                    className="h-32 resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/20 focus:bg-white/[0.06]"
                    id="info"
                    placeholder={
                      isEN
                        ? "Tell me about your project..."
                        : "Cuéntame sobre tu proyecto..."
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                >
                  {isEN ? "Submit" : "Enviar"}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© Franco Ferrer</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
