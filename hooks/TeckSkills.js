import { FaReact, FaNode, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { RiNextjsLine, RiVercelLine } from "react-icons/ri";
import {
  SiPostgresql,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

export const techStack = [
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
