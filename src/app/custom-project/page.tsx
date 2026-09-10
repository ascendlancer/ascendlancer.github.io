import type { Metadata } from "next";
import { Suspense } from "react";
import Reveal from "@/components/Reveal";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Custom Project",
  description: "Not every project fits a package. Tell Ascend Lancer what you're trying to build and we'll help you find the right approach.",
};

export default function CustomProjectPage() {
  return (
    <>
      <section className="bg-al-bg-alt py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.25em] text-al-gold">
              Custom Project
            </p>
            <h1 className="font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-al-ink sm:text-5xl">
              Have A Different Idea?
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-al-ink-soft sm:text-lg">
              Not every project fits a package. Tell us what you&apos;re trying to build and we&apos;ll help you
              figure out the right approach.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Suspense fallback={<div className="text-center text-sm text-al-ink-soft">Loading form…</div>}>
            <EnquiryForm mode="custom" />
          </Suspense>
        </div>
      </section>
    </>
  );
}
