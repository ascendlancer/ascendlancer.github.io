import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/Button";
import { IconCheck, IconCross, IconArrow } from "@/components/Icons";
import { servicePackages, getPackageBySlug, serviceCategories, pricingDisclaimer } from "@/data/services";

export function generateStaticParams() {
  return servicePackages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) return { title: "Service Not Found" };
  return {
    title: pkg.name,
    description: pkg.tagline,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) notFound();

  const category = serviceCategories.find((c) => c.id === pkg.category);

  return (
    <>
      <section className="bg-al-bg-alt py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-wider text-al-ink-soft transition-colors hover:text-al-gold"
            >
              <IconArrow className="h-3.5 w-3.5 rotate-180" />
              All Services
            </Link>
            <p className="mt-6 font-display text-xs font-semibold uppercase tracking-[0.25em] text-al-gold">
              {category?.label}
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-al-ink sm:text-5xl">
              {pkg.name}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-al-ink-soft sm:text-lg">{pkg.tagline}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Reveal>
              <div>
                <h2 className="font-display text-sm font-bold uppercase tracking-widest text-al-ink">Best For</h2>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {pkg.bestFor.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-al-line bg-al-cream px-4 py-1.5 text-sm text-al-ink-soft"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal className="mt-12">
              <h2 className="font-display text-sm font-bold uppercase tracking-widest text-al-ink">What&apos;s Included</h2>
              <ul className="mt-5 flex flex-col gap-3.5">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-al-ink-soft sm:text-base">
                    <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-al-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-12">
              <h2 className="font-display text-sm font-bold uppercase tracking-widest text-al-ink">What&apos;s Not Included</h2>
              <ul className="mt-5 flex flex-col gap-3.5">
                {pkg.notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-al-ink-soft sm:text-base">
                    <IconCross className="mt-0.5 h-5 w-5 shrink-0 text-al-ink-soft/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <div className="sticky top-28 rounded-md border border-al-line bg-al-cream p-7 sm:p-8">
                <p className="font-display text-[11px] font-semibold uppercase tracking-widest text-al-ink-soft">
                  Price
                </p>
                <p className="mt-2 font-display text-3xl font-bold text-al-gold">{pkg.priceLabel}</p>

                <dl className="mt-8 flex flex-col gap-5 border-t border-al-line pt-6">
                  <div>
                    <dt className="font-display text-[11px] font-semibold uppercase tracking-widest text-al-ink-soft">
                      Estimated Timeline
                    </dt>
                    <dd className="mt-1 text-sm text-al-ink">{pkg.timeline}</dd>
                  </div>
                  <div>
                    <dt className="font-display text-[11px] font-semibold uppercase tracking-widest text-al-ink-soft">
                      Revisions
                    </dt>
                    <dd className="mt-1 text-sm text-al-ink">{pkg.revisions}</dd>
                  </div>
                  <div>
                    <dt className="font-display text-[11px] font-semibold uppercase tracking-widest text-al-ink-soft">
                      Hosting
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-al-ink">{pkg.hosting}</dd>
                  </div>
                  <div>
                    <dt className="font-display text-[11px] font-semibold uppercase tracking-widest text-al-ink-soft">
                      Domain
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-al-ink">{pkg.domain}</dd>
                  </div>
                </dl>

                <Button
                  href={`/order?service=${encodeURIComponent(pkg.name)}&slug=${pkg.slug}`}
                  size="lg"
                  className="mt-8 w-full"
                >
                  Order This Service
                </Button>
                <p className="mt-4 text-center text-xs leading-relaxed text-al-ink-soft">{pricingDisclaimer}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
