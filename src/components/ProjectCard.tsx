import Link from "next/link";
import type { Project } from "@/data/projects";
import { IconArrow } from "./Icons";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-md border border-al-line bg-al-cream transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_50px_-26px_rgba(32,36,43,0.4)]"
    >
      <div
        className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.accent} 0%, #20242B 130%)`,
        }}
      >
        <div className="bg-noise absolute inset-0 opacity-[0.15]" />
        <div className="relative flex flex-col items-center gap-3 px-6 text-center">
          <span className="font-display text-[10px] font-semibold uppercase tracking-[0.3em] text-al-gold-soft">
            {project.category}
          </span>
          <span className="font-display text-2xl font-bold uppercase tracking-tight text-al-cream sm:text-3xl">
            {project.title}
          </span>
        </div>
        <span className="absolute right-4 top-4 rounded-full border border-al-cream/30 bg-al-ink/40 px-3 py-1 font-display text-[9px] font-semibold uppercase tracking-widest text-al-cream backdrop-blur-sm">
          {project.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="font-display text-[11px] font-semibold uppercase tracking-widest text-al-gold">
          {project.category}
        </span>
        <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-wide text-al-ink">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-al-ink-soft">{project.summary}</p>
        <span className="mt-5 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-wider text-al-ink transition-colors duration-300 group-hover:text-al-gold">
          View Project
          <IconArrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
