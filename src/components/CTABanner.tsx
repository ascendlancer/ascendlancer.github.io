import { Button } from "./Button";
import { site } from "@/data/site";
import Reveal from "./Reveal";

interface CTABannerProps {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  showInstagram?: boolean;
}

export default function CTABanner({
  eyebrow = "Start Today",
  title,
  description,
  primaryLabel = "Start Your Project",
  primaryHref = "/order",
  showInstagram = true,
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-al-ink py-20 sm:py-28">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.06]" />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #D4A85C 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #B88A3B 0%, transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.25em] text-al-gold-soft">
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl font-bold uppercase leading-[1.1] tracking-tight text-al-cream sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-al-cream/75 sm:text-lg">
              {description}
            </p>
          )}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={primaryHref} variant="secondary" size="lg">
              {primaryLabel}
            </Button>
            {showInstagram && (
              <Button href={site.instagramUrl} external variant="outline" size="lg" className="border-al-cream/30 text-al-cream hover:bg-al-cream hover:text-al-ink">
                Message Us on Instagram
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
