import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import CTABanner from "@/components/CTABanner";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Concept and demonstration projects showing the range of websites, stores and digital experiences Ascend Lancer can build.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-al-bg-alt py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.25em] text-al-gold">
              Our Work
            </p>
            <h1 className="font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-al-ink sm:text-5xl lg:text-6xl">
              What We Can Build
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-al-ink-soft sm:text-lg">
              As a growing studio, the projects below are concept and demonstration work — built to show the
              range, quality and style Ascend Lancer can bring to a real project.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 3) * 100}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Like What You See?"
        title="Let's Build Yours Next"
        description="Every project starts with a conversation about what you actually need."
      />
    </>
  );
}
