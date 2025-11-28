import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio & Contact",
    description: "Mis redes, links principales y sitios de contacto.",
    image: "/1234", 
    github: "https://github.com/jeanfranco22",
    link: "",
  },
  {
    title: "Snake Game",
    description: "Snake desarrollado con Vanilla JS, HTML y CSS.",
    image: "/Snake.png",
    github: "",
    link: "",
  },
  {
    title: "E-commerce Joyería",
    description: "Tienda inspirada en Cartier",
    image: "/ecommerce.png",
    github: "",
    link: "",
  },
  {
    title: "Pilates Studio",
    description: "Sitio para reservar citas, a pagina de pilates",
    image: "/pilates.png",
    github: "",
    link: "",
  },
];

const Projects = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-[#072f46] to-sky-900 py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Projects
          </h2>
          <p className="text-sky-200 text-lg max-w-2xl mx-auto mt-3 opacity-90">
            Aquí encontrarás algunos de los proyectos que he desarrollado. 
            Cada uno enfocado en buenas prácticas, diseño y experiencia de usuario.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
            >
       
              <div className="relative w-full h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

             
              <div className="p-6 space-y-4">
                <h3 className="text-3xl font-semibold">{project.title}</h3>

                <p className="text-lg opacity-90 leading-relaxed">
                  {project.description}
                </p>

                
                <div className="flex gap-4 pt-3">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg font-semibold hover:bg-white/30 transition"
                    >
                      <FaGithub className="text-xl" />
                      GitHub
                    </a>
                  )}

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      className="flex items-center gap-2 bg-sky-800 px-4 py-2 rounded-lg font-semibold hover:bg-sky-700 transition"
                    >
                      <FaExternalLinkAlt />
                      Demo
                    </a>
                  )}

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;