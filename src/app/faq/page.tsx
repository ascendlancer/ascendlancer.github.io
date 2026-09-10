import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";
import FaqAccordion from "@/components/FaqAccordion";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about working with Ascend Lancer.",
};

export default function FaqPage() {
  return (
    <>
      <section className="bg-al-bg-alt py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.25em] text-al-gold">
              FAQ
            </p>
            <h1 className="font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-al-ink sm:text-5xl lg:text-6xl">
              Frequently Asked
              <br />
              Questions
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-al-ink-soft sm:text-lg">
              Everything you need to know before starting a project with Ascend Lancer.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <FaqAccordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <CTABanner
        eyebrow="Still Have Questions?"
        title="Reach Out Directly"
        description="Send us a message on Instagram or email, and we'll get back to you."
        primaryLabel="Start Your Project"
      />
    </>
  );
}
