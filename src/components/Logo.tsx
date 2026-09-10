import Image from "next/image";
import Link from "next/link";
import { cx, withBase } from "@/lib/utils";

interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
}

const sizeMap = {
  sm: { mark: 28, word: "text-base", tag: "text-[8px]" },
  md: { mark: 36, word: "text-lg", tag: "text-[9px]" },
  lg: { mark: 56, word: "text-2xl sm:text-3xl", tag: "text-[10px] sm:text-xs" },
};

export default function Logo({ variant = "dark", size = "md", showTagline = false, className }: LogoProps) {
  const s = sizeMap[size];
  const inkColor = variant === "dark" ? "text-al-ink" : "text-al-cream";
  const taglineColor = variant === "dark" ? "text-al-ink-soft" : "text-al-cream/70";

  return (
    <Link href="/" className={cx("inline-flex items-center gap-2.5 group", className)} aria-label="Ascend Lancer — Home">
      <Image
        src={withBase("/images/logo/mark-192.png")}
        alt=""
        width={s.mark}
        height={s.mark}
        priority
        className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
      />
      <span className="flex flex-col leading-none">
        <span className={cx("font-display font-bold tracking-tight uppercase", s.word, inkColor)}>
          Ascend <span className="text-al-gold">Lancer</span>
        </span>
        {showTagline && (
          <span className={cx("mt-1 uppercase tracking-[0.2em] font-medium", s.tag, taglineColor)}>
            Building Your Digital Future
          </span>
        )}
      </span>
    </Link>
  );
}
