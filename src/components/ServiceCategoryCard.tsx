import Link from "next/link";
import type { ServiceCategory } from "@/data/services";
import { IconWebsite, IconCart, IconAutomation, IconLayers, IconArrow } from "./Icons";

const iconMap = {
  website: IconWebsite,
  cart: IconCart,
  automation: IconAutomation,
  layers: IconLayers,
};

interface ServiceCategoryCardProps {
  category: ServiceCategory;
}

export default function ServiceCategoryCard({ category }: ServiceCategoryCardProps) {
  const Icon = iconMap[category.icon];

  return (
    <Link
      href={`/services#${category.id}`}
      className="group relative flex h-full flex-col rounded-md border border-al-line bg-al-cream p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-al-gold/60 hover:shadow-[0_18px_40px_-20px_rgba(32,36,43,0.35)] sm:p-8"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-al-ink text-al-gold-soft transition-colors duration-300 group-hover:bg-al-gold group-hover:text-al-ink">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-6 font-display text-lg font-bold uppercase tracking-wide text-al-ink">
        {category.shortLabel}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-al-ink-soft">{category.description}</p>
      <span className="mt-6 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-wider text-al-gold">
        Explore
        <IconArrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
