import { cx } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cx("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p
          className={cx(
            "mb-4 font-display text-xs font-semibold uppercase tracking-[0.25em]",
            light ? "text-al-gold-soft" : "text-al-gold"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cx(
          "font-display text-3xl font-bold uppercase leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]",
          light ? "text-al-cream" : "text-al-ink"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cx("mt-5 text-base leading-relaxed sm:text-lg", light ? "text-al-cream/75" : "text-al-ink-soft")}>
          {description}
        </p>
      )}
    </div>
  );
}
