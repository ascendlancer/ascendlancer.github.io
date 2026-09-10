export function cx(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Prefixes a root-relative path (e.g. "/images/logo/mark.png") with the
 * configured GitHub Pages base path, if any. Needed because next/image and
 * metadata icon URLs are not automatically prefixed when images.unoptimized
 * is enabled for static export.
 */
export function withBase(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}

/**
 * Generates a client-side enquiry reference ID, e.g. AL-2026-4821.
 * Purely cosmetic / for the customer's records — not a database ID.
 */
export function generateReferenceId(): string {
  const year = new Date().getFullYear();
  const random = Math.floor(1000 + Math.random() * 9000);
  return `AL-${year}-${random}`;
}

export function formatINR(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}
