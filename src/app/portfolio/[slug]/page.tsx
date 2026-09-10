import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";
import { IconArrow } from "@/components/Icons";
import { projects, getProjectBySlug } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { caseStudy } = project;

  const sections = [
    { label: "The Challenge", text: caseStudy.challenge },
    { label: "The Approach", text: caseStudy.approach },
    { label: "What We Built", text: caseStudy.whatWeBuilt },
  ];

  return (
    <>
      <section
        className="relative overflow-hidden py-20 sm:py-28"
        style={{ background: `linear-gradient(135deg, ${project.accent} 0%, #20242B 140%)` }}
      >
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.12]" />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-wider text-al-cream/70 transition-colors hover:text-al-gold-soft"
            >
              <IconArrow className="h-3.5 w-3.5 rotate-180" />
              All Work
            </Link>
            <span className="mt-8 inline-block rounded-full border border-al-cream/30 bg-al-ink/30 px-4 py-1.5 font-display text-[10px] font-semibold uppercase tracking-[0.25em] text-al-cream backdrop-blur-sm">
              {project.tag} · {project.category}
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-al-cream sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-al-cream/75 sm:text-lg">
              {project.summary}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="flex flex-col gap-14">
            {sections.map((section, i) => (
              <Reveal key={section.label} delay={i * 90}>
                <div className="border-l-2 border-al-gold pl-6">
                  <h2 className="font-display text-sm font-bold uppercase tracking-widest text-al-ink">
                    {section.label}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-al-ink-soft">{section.text}</p>
                </div>
              </Reveal>
            ))}

            <Reveal delay={280}>
              <div className="border-l-2 border-al-gold pl-6">
                <h2 className="font-display text-sm font-bold uppercase tracking-widest text-al-ink">
                  Key Features
                </h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {caseStudy.keyFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-sm border border-al-line bg-al-cream px-4 py-3 text-sm text-al-ink-soft"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={360}>
              <div className="border-l-2 border-al-gold pl-6">
                <h2 className="font-display text-sm font-bold uppercase tracking-widest text-al-ink">
                  Purpose
                </h2>
                <p className="mt-3 text-base leading-relaxed text-al-ink-soft">{caseStudy.result}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Want Something Similar?"
        title="Let's Talk About Your Project"
        description="Tell us what you need and we'll help you find the right service and package."
      />
    </>
  );
}
