import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PackageCard from "@/components/PackageCard";
import CTABanner from "@/components/CTABanner";
import { IconWebsite, IconCart, IconAutomation, IconLayers } from "@/components/Icons";
import { serviceCategories, getPackagesByCategory, pricingDisclaimer } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Ascend Lancer's website, e-commerce and automation services with transparent starting prices.",
};

const iconMap = {
  website: IconWebsite,
  cart: IconCart,
  automation: IconAutomation,
  layers: IconLayers,
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-al-bg-alt py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.25em] text-al-gold">
              What We Offer
            </p>
            <h1 className="font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-al-ink sm:text-5xl lg:text-6xl">
              Services &amp; Packages
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-al-ink-soft sm:text-lg">
              Browse our services below, compare what is included, and order the package that fits your project —
              or reach out if you need something custom.
            </p>
          </Reveal>
        </div>
      </section>

      <nav aria-label="Service categories" className="sticky top-[65px] z-40 border-b border-al-line bg-al-bg/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-4 sm:px-8">
          {serviceCategories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="shrink-0 rounded-full border border-al-line px-4 py-2 font-display text-xs font-semibold uppercase tracking-wider text-al-ink-soft transition-colors hover:border-al-gold hover:text-al-gold"
            >
              {category.shortLabel}
            </a>
          ))}
        </div>
      </nav>

      {serviceCategories.map((category, index) => {
        const Icon = iconMap[category.icon];
        const packages = getPackagesByCategory(category.id);
        return (
          <section
            key={category.id}
            id={category.id}
            className={`scroll-mt-32 py-20 sm:py-24 ${index % 2 === 1 ? "bg-al-bg-alt" : ""}`}
          >
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <Reveal>
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-al-ink text-al-gold-soft">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-al-ink sm:text-3xl">
                      {category.label}
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-al-ink-soft sm:text-base">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Reveal>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {packages.map((pkg, i) => (
                  <Reveal key={pkg.slug} delay={i * 90}>
                    <PackageCard pkg={pkg} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="border-t border-al-line py-10">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className="text-xs leading-relaxed text-al-ink-soft">{pricingDisclaimer}</p>
        </div>
      </section>

      <CTABanner
        eyebrow="Not Sure What You Need?"
        title="Have A Different Idea?"
        description="Not every project fits a package. Tell us what you're trying to build and we'll help you figure out the right approach."
        primaryLabel="Start A Custom Project"
        primaryHref="/custom-project"
      />
    </>
  );
}
