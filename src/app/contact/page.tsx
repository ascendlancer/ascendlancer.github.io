import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/Button";
import Logo from "@/components/Logo";
import { IconArrow } from "@/components/Icons";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Ascend Lancer by email or Instagram, or start a project directly.",
};

export default function ContactPage() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <div className="flex justify-center">
            <Logo size="lg" showTagline />
          </div>

          <p className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-al-ink-soft sm:text-lg">
            Have a question, a project idea, or just want to say hello? Reach out any time — we typically
            respond within one to two business days.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            <a
              href={`mailto:${site.email}`}
              className="group flex flex-col items-center gap-3 rounded-md border border-al-line bg-al-cream px-6 py-10 transition-all duration-300 hover:-translate-y-1 hover:border-al-gold/60 hover:shadow-[0_18px_40px_-22px_rgba(32,36,43,0.35)]"
            >
              <span className="font-display text-xs font-semibold uppercase tracking-widest text-al-gold">Email</span>
              <span className="break-all font-display text-lg font-bold text-al-ink">{site.email}</span>
              <span className="mt-2 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-wider text-al-ink-soft transition-colors group-hover:text-al-gold">
                Email Us
                <IconArrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </a>

            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 rounded-md border border-al-line bg-al-cream px-6 py-10 transition-all duration-300 hover:-translate-y-1 hover:border-al-gold/60 hover:shadow-[0_18px_40px_-22px_rgba(32,36,43,0.35)]"
            >
              <span className="font-display text-xs font-semibold uppercase tracking-widest text-al-gold">Instagram</span>
              <span className="font-display text-lg font-bold text-al-ink">{site.instagramHandle}</span>
              <span className="mt-2 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-wider text-al-ink-soft transition-colors group-hover:text-al-gold">
                Message on Instagram
                <IconArrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </div>

          <div className="mt-12">
            <Button href="/order" size="lg">
              Start A Project
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
