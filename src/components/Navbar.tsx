"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import { Button } from "./Button";
import { primaryNav } from "@/data/site";
import { cx } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cx(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled || open ? "bg-al-bg/95 backdrop-blur-md shadow-[0_1px_0_rgba(32,36,43,0.08)]" : "bg-al-bg/70 backdrop-blur-sm"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8" aria-label="Primary">
        <Logo size="md" />

        <ul className="hidden items-center gap-8 lg:flex">
          {primaryNav.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cx(
                    "font-display text-[13px] font-medium uppercase tracking-wider transition-colors duration-200 hover:text-al-gold",
                    active ? "text-al-gold" : "text-al-ink"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Button href="/order" size="md">
            Get Started
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={cx(
              "h-[1.5px] w-6 bg-al-ink transition-all duration-300",
              open && "translate-y-[7px] rotate-45"
            )}
          />
          <span className={cx("h-[1.5px] w-6 bg-al-ink transition-all duration-300", open && "opacity-0")} />
          <span
            className={cx(
              "h-[1.5px] w-6 bg-al-ink transition-all duration-300",
              open && "-translate-y-[7px] -rotate-45"
            )}
          />
        </button>
      </nav>

      <div
        className={cx(
          "grid overflow-hidden transition-all duration-300 ease-out lg:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden border-t border-al-line bg-al-bg px-5 py-6 sm:px-8">
          <ul className="flex flex-col gap-1">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-lg font-medium uppercase tracking-wide text-al-ink transition-colors hover:text-al-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block py-3 font-display text-lg font-medium uppercase tracking-wide text-al-ink transition-colors hover:text-al-gold"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="mt-4">
            <Button href="/order" size="lg" className="w-full" onClick={() => setOpen(false)}>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
