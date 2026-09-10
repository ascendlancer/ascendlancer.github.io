interface IconProps {
  className?: string;
}

export function IconWebsite({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <rect x="2.5" y="4" width="19" height="16" rx="2" />
      <path d="M2.5 8.5h19" />
      <circle cx="5.5" cy="6.25" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="7.3" cy="6.25" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconCart({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <circle cx="9.5" cy="20" r="1.1" />
      <circle cx="17.5" cy="20" r="1.1" />
      <path d="M2.5 3.5h2.4l2.1 11.2a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.6l1.4-7.7H6.1" />
    </svg>
  );
}

export function IconAutomation({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="3.1" />
      <path d="M12 3.5v2.4M12 18.1v2.4M20.5 12h-2.4M5.9 12H3.5M17.8 6.2l-1.7 1.7M7.9 16.1l-1.7 1.7M17.8 17.8l-1.7-1.7M7.9 7.9 6.2 6.2" />
    </svg>
  );
}

export function IconLayers({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <path d="M12 3 2.5 8l9.5 5 9.5-5L12 3Z" />
      <path d="M2.5 13l9.5 5 9.5-5" />
      <path d="M2.5 18l9.5 5 9.5-5" />
    </svg>
  );
}

export function IconArrow({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M4 12.5 9.5 18 20 6" />
    </svg>
  );
}

export function IconCross({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function IconMobile({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <rect x="7" y="2.5" width="10" height="19" rx="2.4" />
      <path d="M11 18.2h2" />
    </svg>
  );
}

export function IconShield({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <path d="M12 3 4.5 6v6c0 4.6 3.2 7.9 7.5 9 4.3-1.1 7.5-4.4 7.5-9V6L12 3Z" />
      <path d="M9 12.2l2 2 4-4.4" />
    </svg>
  );
}

export function IconGrowth({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <path d="M3 18 9 11.5 13.2 15 21 6" />
      <path d="M15 6h6v6" />
    </svg>
  );
}

export function IconTag({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <path d="M12.6 3.5H5.5A2 2 0 0 0 3.5 5.5v7.1c0 .5.2 1 .6 1.4l8.9 8.9c.8.8 2 .8 2.8 0l7.1-7.1c.8-.8.8-2 0-2.8l-8.9-8.9c-.4-.4-.9-.6-1.4-.6Z" />
      <circle cx="8.5" cy="8.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconHeart({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <path d="M12 20.2s-7.8-4.8-9.9-9.3C.7 7.4 2.5 4 6 4c2 0 3.5 1 6 3.4C14.5 5 16 4 18 4c3.5 0 5.3 3.4 3.9 6.9-2.1 4.5-9.9 9.3-9.9 9.3Z" />
    </svg>
  );
}
