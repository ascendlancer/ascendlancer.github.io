import Link from "next/link";
import { cx } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "md" | "lg" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 font-display font-semibold uppercase tracking-wider transition-all duration-300 whitespace-nowrap disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-al-ink text-al-cream hover:bg-al-gold hover:text-al-ink shadow-[0_1px_0_rgba(0,0,0,0.05)]",
  secondary: "bg-al-gold text-al-ink hover:bg-al-gold-soft",
  outline: "border border-al-ink text-al-ink hover:bg-al-ink hover:text-al-cream",
  ghost: "text-al-ink hover:text-al-gold",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-xs rounded-sm",
  md: "px-6 py-3.5 text-xs rounded-sm",
  lg: "px-8 py-4.5 text-sm rounded-sm",
};

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

interface LinkButtonProps extends BaseProps {
  href: string;
  external?: boolean;
  onClick?: () => void;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  external,
  onClick,
}: BaseProps & { href?: string; external?: boolean; onClick?: () => void }) {
  const classes = cx(base, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} onClick={onClick}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return <span className={classes}>{children}</span>;
}

interface ButtonElProps extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {}

export function ButtonEl({ variant = "primary", size = "md", className, children, ...rest }: ButtonElProps) {
  const classes = cx(base, variants[variant], sizes[size], className);
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

export type { LinkButtonProps };
