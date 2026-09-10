import Link from "next/link";
import Logo from "./Logo";
import { site, primaryNav, legalNav } from "@/data/site";

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.3" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="M3.5 6.5L12 13l8.5-6.5" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-al-line bg-al-ink text-al-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo variant="light" size="md" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-al-cream/70">
              {site.shortDescription}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ascend Lancer on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-al-cream/20 text-al-cream transition-colors duration-300 hover:border-al-gold hover:text-al-gold"
              >
                <InstagramIcon />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email Ascend Lancer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-al-cream/20 text-al-cream transition-colors duration-300 hover:border-al-gold hover:text-al-gold"
              >
                <MailIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-al-gold-soft">Navigation</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-al-cream/75 transition-colors hover:text-al-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/faq" className="text-sm text-al-cream/75 transition-colors hover:text-al-gold">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-al-cream/75 transition-colors hover:text-al-gold">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-al-gold-soft">Legal</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-al-cream/75 transition-colors hover:text-al-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-al-gold-soft">Get in Touch</h3>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              <a href={`mailto:${site.email}`} className="text-al-cream/75 transition-colors hover:text-al-gold break-all">
                {site.email}
              </a>
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-al-cream/75 transition-colors hover:text-al-gold">
                {site.instagramHandle}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-al-cream/10 pt-8 text-xs text-al-cream/50 sm:flex-row sm:items-center">
          <p>© {year} Ascend Lancer. All rights reserved.</p>
          <p className="uppercase tracking-[0.2em]">Building Your Digital Future</p>
        </div>
      </div>
    </footer>
  );
}
