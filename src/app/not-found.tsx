import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-24">
      <div className="mx-auto max-w-md px-5 text-center sm:px-8">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-al-gold">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight text-al-ink sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-base leading-relaxed text-al-ink-soft">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/" size="lg">
            Back To Home
          </Button>
          <Button href="/services" variant="outline" size="lg">
            View Services
          </Button>
        </div>
      </div>
    </section>
  );
}
