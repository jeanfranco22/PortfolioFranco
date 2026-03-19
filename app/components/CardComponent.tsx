"use client";

import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  descriptionEN: string;
  descriptionES: string;
  image: string;
  tag: string;
  href: string;
}

interface Props {
  project: Project;
  isEN: boolean;
}

export function FeaturedProjectCard({ project, isEN }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-black">
      <Image
        src={project.image}
        alt={project.title}
        width={1200}
        height={800}
        className="object-cover w-full h-[400px] opacity-80 group-hover:opacity-100 transition duration-500"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="absolute bottom-0 p-8">
        <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
          {project.tag}
        </span>

        <h3 className="text-3xl font-semibold mt-3">{project.title}</h3>

        <p className="text-white/60 mt-2 max-w-xl">
          {isEN ? project.descriptionEN : project.descriptionES}
        </p>

        <Link
          href={project.href}
          target="_blank"
          className="mt-4 inline-block text-sm text-white/80 hover:text-white"
        >
          {isEN ? "View project →" : "Ver proyecto →"}
        </Link>
      </div>
    </div>
  );
}

export function ProjectCard({ project, isEN }: Props) {
  return (
    <Link
      href={project.href}
      target="_blank"
      className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 hover:scale-[1.02] transition duration-300"
    >
      <div className="mb-4 h-40 overflow-hidden rounded-xl">
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={200}
          className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
        />
      </div>

      <span className="text-xs text-white/50">{project.tag}</span>

      <h3 className="text-lg font-semibold mt-2">{project.title}</h3>

      <p className="text-sm text-white/60 mt-2">
        {isEN ? project.descriptionEN : project.descriptionES}
      </p>

      <div className="mt-4 text-sm text-white/80">
        {isEN ? "View project →" : "Ver proyecto →"}
      </div>
    </Link>
  );
}
