import type { ServicePackage } from "@/data/services";
import { Button } from "./Button";
import { IconCheck } from "./Icons";
import { cx } from "@/lib/utils";

interface PackageCardProps {
  pkg: ServicePackage;
  compact?: boolean;
}

export default function PackageCard({ pkg, compact = false }: PackageCardProps) {
  return (
    <div
      className={cx(
        "relative flex h-full flex-col rounded-md border bg-al-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-24px_rgba(32,36,43,0.4)] sm:p-8",
        pkg.featured ? "border-al-gold/70 shadow-[0_14px_34px_-22px_rgba(184,138,59,0.45)]" : "border-al-line"
      )}
    >
      {pkg.featured && (
        <span className="absolute -top-3 left-7 rounded-full bg-al-gold px-3 py-1 font-display text-[10px] font-bold uppercase tracking-widest text-al-ink">
          Popular
        </span>
      )}

      <h3 className="font-display text-xl font-bold uppercase tracking-wide text-al-ink">{pkg.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-al-ink-soft">{pkg.tagline}</p>

      <p className="mt-6 font-display text-2xl font-bold text-al-ink">
        {pkg.price !== null ? (
          <>
            <span className="text-al-gold">₹{pkg.price.toLocaleString("en-IN")}</span>
            <span className="ml-1 text-xs font-medium uppercase tracking-wide text-al-ink-soft">starting</span>
          </>
        ) : (
          <span className="text-al-gold">{pkg.priceLabel}</span>
        )}
      </p>

      {!compact && (
        <ul className="mt-6 flex flex-1 flex-col gap-3">
          {pkg.includes.slice(0, 5).map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-al-ink-soft">
              <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-al-gold" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-8 flex flex-col gap-2.5 sm:flex-row">
        <Button href={`/services/${pkg.slug}`} variant="outline" size="sm" className="flex-1">
          View Details
        </Button>
        <Button
          href={`/order?service=${encodeURIComponent(pkg.name)}&slug=${pkg.slug}`}
          variant="primary"
          size="sm"
          className="flex-1"
        >
          Order
        </Button>
      </div>
    </div>
  );
}
