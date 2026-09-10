import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/Button";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCategoryCard from "@/components/ServiceCategoryCard";
import ProjectCard from "@/components/ProjectCard";
import PackageCard from "@/components/PackageCard";
import CTABanner from "@/components/CTABanner";
import { IconArrow, IconMobile, IconShield, IconGrowth, IconTag, IconHeart, IconLayers } from "@/components/Icons";
import { serviceCategories, servicePackages } from "@/data/services";
import { projects } from "@/data/projects";
import { homeProcessSteps } from "@/data/process";
import { whyUsItems } from "@/data/why-us";
import { withBase } from "@/lib/utils";

const whyIcons = [IconLayers, IconMobile, IconTag, IconGrowth, IconShield, IconHeart];

const featuredPackages = servicePackages.filter((p) => p.featured).slice(0, 3);
const featuredProjects = projects.slice(0, 3);

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-al-bg">
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.35]" />
        <div
          className="pointer-events-none absolute -right-32 top-10 h-[26rem] w-[26rem] rounded-full opacity-30 blur-3xl animate-float"
          style={{ background: "radial-gradient(circle, #D4A85C 0%, transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #20242B 0%, transparent 70%)" }}
        />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-28">
          <div>
            <p className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-al-gold/40 bg-al-gold-pale/40 px-4 py-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-al-ink opacity-0 [animation-delay:0ms]">
              Websites · E-Commerce · Automation
            </p>
            <h1 className="animate-fade-up font-display text-[2.75rem] font-bold uppercase leading-[1.02] tracking-tight text-al-ink opacity-0 [animation-delay:80ms] sm:text-6xl lg:text-7xl">
              Build Your
              <br />
              <span className="text-al-gold">Digital Future.</span>
            </h1>
            <p className="animate-fade-up mt-7 max-w-lg text-lg leading-relaxed text-al-ink-soft opacity-0 [animation-delay:180ms] sm:text-xl">
              Modern websites, e-commerce experiences and digital solutions designed to help your business move forward.
            </p>
            <div className="animate-fade-up mt-10 flex flex-col gap-4 opacity-0 [animation-delay:280ms] sm:flex-row">
              <Button href="/services" size="lg">
                Explore Services
              </Button>
              <Button href="/order" variant="outline" size="lg">
                Start a Project
              </Button>
            </div>
            <div className="animate-fade-up mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 opacity-0 [animation-delay:360ms]">
              <div>
                <p className="font-display text-2xl font-bold text-al-ink">₹4,999</p>
                <p className="text-xs uppercase tracking-wide text-al-ink-soft">Starting price</p>
              </div>
              <div className="h-8 w-px bg-al-line" />
              <div>
                <p className="font-display text-2xl font-bold text-al-ink">3–5 Days</p>
                <p className="text-xs uppercase tracking-wide text-al-ink-soft">Fastest turnaround</p>
              </div>
              <div className="h-8 w-px bg-al-line" />
              <div>
                <p className="font-display text-2xl font-bold text-al-ink">100%</p>
                <p className="text-xs uppercase tracking-wide text-al-ink-soft">Transparent pricing</p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in opacity-0 [animation-delay:200ms]">
            <div className="relative mx-auto flex max-w-md flex-col gap-4 rounded-lg border border-al-line bg-al-cream p-3 shadow-[0_30px_70px_-30px_rgba(32,36,43,0.35)] sm:p-4">
              <div className="flex items-center gap-2 border-b border-al-line px-2 pb-3 pt-1">
                <span className="h-2.5 w-2.5 rounded-full bg-al-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-al-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-al-line" />
                <span className="ml-3 h-2 flex-1 max-w-[140px] rounded-full bg-al-bg-alt" />
              </div>
              <div className="rounded-md bg-al-ink px-6 py-10 text-center sm:py-14">
                <Image
                  src={withBase("/images/logo/mark-192.png")}
                  alt="Ascend Lancer symbol"
                  width={56}
                  height={56}
                  className="mx-auto animate-float"
                />
                <p className="mt-5 font-display text-lg font-bold uppercase tracking-wide text-al-cream sm:text-xl">
                  Turn Ideas
                  <br />
                  Into Impact
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 px-1 pb-1">
                {["Websites", "E-Commerce", "Automation"].map((label) => (
                  <div key={label} className="rounded-sm border border-al-line bg-al-bg px-2 py-3 text-center">
                    <p className="font-display text-[10px] font-semibold uppercase tracking-wide text-al-ink-soft">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-md border border-al-gold/40 bg-al-bg px-5 py-4 shadow-[0_18px_40px_-18px_rgba(184,138,59,0.4)] sm:block">
              <p className="font-display text-xs font-semibold uppercase tracking-widest text-al-gold">Live &amp; Ready</p>
              <p className="mt-1 text-sm text-al-ink-soft">GitHub Pages deployment</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ VALUE PROP ============ */}
      <section className="bg-al-bg-alt py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
              <SectionHeading
                eyebrow="Our Craft"
                title="Your Business. Our Digital Craft."
              />
              <p className="text-base leading-relaxed text-al-ink-soft sm:text-lg">
                Ascend Lancer helps businesses, creators and startups turn ideas into professional digital
                experiences. From a single landing page to a complete online store, we design and build with
                one goal — helping your business move forward online.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ SERVICES OVERVIEW ============ */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="What We Do"
              title="Services Built For Growth"
              description="Four focused areas, each designed to move your business forward online."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCategories.map((category, i) => (
              <Reveal key={category.id} delay={i * 90}>
                <ServiceCategoryCard category={category} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY ASCEND LANCER ============ */}
      <section className="bg-al-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading eyebrow="Why Ascend Lancer" title="Built The Right Way" light align="center" className="mx-auto" />
          </Reveal>
          <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {whyUsItems.map((item, i) => {
              const Icon = whyIcons[i % whyIcons.length];
              return (
                <Reveal key={item.title} delay={i * 80}>
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-al-gold/30 text-al-gold-soft">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold uppercase tracking-wide text-al-cream">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-al-cream/65">{item.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ FEATURED WORK ============ */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <SectionHeading
                eyebrow="Featured Work"
                title="A Look At What We Build"
                description="Concept and demonstration projects showing the range of experiences we can create."
              />
              <Link
                href="/portfolio"
                className="inline-flex shrink-0 items-center gap-2 font-display text-xs font-semibold uppercase tracking-wider text-al-ink transition-colors hover:text-al-gold"
              >
                View All Work
                <IconArrow className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 100}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="bg-al-bg-alt py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading eyebrow="The Process" title="How It Works" description="A simple, guided path from idea to launch." align="center" className="mx-auto" />
          </Reveal>

          <div className="relative mt-16">
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-al-line lg:block" />
            <div className="grid gap-10 lg:grid-cols-5">
              {homeProcessSteps.map((step, i) => (
                <Reveal key={step.number} delay={i * 90}>
                  <div className="relative flex flex-col items-start lg:items-center lg:text-center">
                    <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-al-gold bg-al-bg-alt font-display text-sm font-bold text-al-gold">
                      {step.number}
                    </span>
                    <h3 className="mt-5 font-display text-sm font-bold uppercase tracking-wide text-al-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-al-ink-soft">{step.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRICING TEASER ============ */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Pricing"
              title="Straightforward, Starting Prices"
              description="Clear pricing so you know what to expect before you ever get in touch."
              align="center"
              className="mx-auto"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPackages.map((pkg, i) => (
              <Reveal key={pkg.slug} delay={i * 100}>
                <PackageCard pkg={pkg} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 flex justify-center">
            <Button href="/pricing" variant="outline" size="lg">
              View All Services &amp; Pricing
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <CTABanner
        title="Ready To Build Something Better?"
        description="Tell us what you need and we will help you find the right solution."
        primaryLabel="Start Your Project"
      />
    </>
  );
}
