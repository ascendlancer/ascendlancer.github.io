import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";
import { fullProcessSteps } from "@/data/process";

export const metadata: Metadata = {
  title: "How It Works",
  description: "The complete Ascend Lancer process, from choosing a service to launch.",
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-al-bg-alt py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.25em] text-al-gold">
              The Process
            </p>
            <h1 className="font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-al-ink sm:text-5xl lg:text-6xl">
              How It Works
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-al-ink-soft sm:text-lg">
              From your first message to launch day, here is exactly what happens at every stage of working
              with Ascend Lancer.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="flex flex-col">
            {fullProcessSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 70}>
                <div className="relative flex gap-6 pb-14 last:pb-0">
                  {i !== fullProcessSteps.length - 1 && (
                    <span className="absolute left-6 top-14 h-[calc(100%-2rem)] w-px bg-al-line" aria-hidden="true" />
                  )}
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-al-gold bg-al-bg font-display text-sm font-bold text-al-gold">
                    {step.number}
                  </span>
                  <div className="pt-2">
                    <h2 className="font-display text-lg font-bold uppercase tracking-wide text-al-ink">
                      {step.title}
                    </h2>
                    <p className="mt-2 text-base leading-relaxed text-al-ink-soft">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready To Start Step One?"
        description="Choose a service and submit your project details — we'll take it from there."
      />
    </>
  );
}
