import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import { IconLayers, IconMobile, IconTag, IconGrowth, IconShield, IconHeart } from "@/components/Icons";
import { withBase } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description: "Ascend Lancer exists to make professional digital experiences more accessible for businesses, creators and startups.",
};

const principles = [
  { icon: IconLayers, title: "Practical Digital Solutions", text: "We focus on what actually moves your business forward online, not trends for their own sake." },
  { icon: IconTag, title: "Clean, Considered Design", text: "Every project is built with care — clear layouts, strong typography and a design system that holds together." },
  { icon: IconMobile, title: "Usability First", text: "A website only works if people can actually use it. We design for real visitors on real devices." },
  { icon: IconShield, title: "Accessible Pricing", text: "We keep our services accessible without cutting corners on quality or craft." },
  { icon: IconGrowth, title: "Built With Growth In Mind", text: "Every project is structured so it can grow alongside your business, not hold it back." },
  { icon: IconHeart, title: "Honest Communication", text: "Clear pricing, clear timelines and no overpromising — just straightforward, professional work." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-al-bg-alt py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.25em] text-al-gold">
              About Ascend Lancer
            </p>
            <h1 className="font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-al-ink sm:text-5xl lg:text-6xl">
              Building Your
              <br />
              Digital Future
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-al-ink-soft sm:text-lg">
              Ascend Lancer exists to make professional digital experiences more accessible — for businesses,
              creators, startups and individuals who want an online presence that actually represents them well.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="What We Believe"
              title="Good Digital Work Should Be Within Reach"
              description="A polished, professional website shouldn't be reserved for businesses with large budgets. We built Ascend Lancer to close that gap — combining modern design and solid development practices with pricing that makes sense for growing businesses."
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-md border border-al-line bg-al-ink p-10 text-center">
              <Image
                src={withBase("/images/logo/mark-192.png")}
                alt="Ascend Lancer symbol"
                width={72}
                height={72}
                className="mx-auto"
              />
              <p className="mt-6 font-display text-xl font-bold uppercase tracking-wide text-al-cream">
                Ascend Lancer
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-al-gold-soft">
                Building Your Digital Future
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-al-bg-alt py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading eyebrow="How We Work" title="Our Principles" align="center" className="mx-auto" />
          </Reveal>
          <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-al-ink text-al-gold-soft">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold uppercase tracking-wide text-al-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-al-ink-soft">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Let's Build Something Together"
        description="Explore our services or tell us about your project directly."
      />
    </>
  );
}
