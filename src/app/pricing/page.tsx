import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import PackageCard from "@/components/PackageCard";
import CTABanner from "@/components/CTABanner";
import { serviceCategories, getPackagesByCategory, pricingDisclaimer } from "@/data/services";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Clear, honest starting prices for every Ascend Lancer service — websites, e-commerce and automation.",
};

export default function PricingPage() {
  return (
    <>
      <section className="bg-al-bg-alt py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.25em] text-al-gold">
              Pricing
            </p>
            <h1 className="font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-al-ink sm:text-5xl lg:text-6xl">
              Clear, Honest Pricing
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-al-ink-soft sm:text-lg">
              No pricing hidden behind &quot;contact us.&quot; Every package below shows a starting price so you
              know roughly what to expect before you reach out.
            </p>
          </Reveal>
        </div>
      </section>

      {serviceCategories.map((category, index) => {
        const packages = getPackagesByCategory(category.id);
        return (
          <section key={category.id} className={`py-20 sm:py-24 ${index % 2 === 1 ? "bg-al-bg-alt" : ""}`}>
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <Reveal>
                <SectionHeading eyebrow={category.label} title={category.shortLabel} description={category.description} />
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

      <section className="py-14">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <p className="text-sm leading-relaxed text-al-ink-soft">{pricingDisclaimer}</p>
          </Reveal>
        </div>
      </section>

      <CTABanner
        eyebrow="Need Something Custom?"
        title="Need Something Different?"
        description="If nothing above fits exactly, tell us what you're building and we'll put together a fair quote."
        primaryLabel="Start A Custom Project"
        primaryHref="/custom-project"
      />
    </>
  );
}
