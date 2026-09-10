import type { Metadata } from "next";
import { Suspense } from "react";
import Reveal from "@/components/Reveal";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Get Started",
  description: "Submit a project enquiry to Ascend Lancer — choose your service, share your requirements, and we'll take it from there.",
};

export default function OrderPage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.25em] text-al-gold">
            Get Started
          </p>
          <h1 className="font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-al-ink sm:text-5xl">
            Start Your Project
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-al-ink-soft sm:text-lg">
            Tell us about your project below. Submitting this form sends a project enquiry to our team — it is
            not an automatic payment.
          </p>
        </Reveal>

        <div className="mt-14">
          <Suspense fallback={<div className="text-center text-sm text-al-ink-soft">Loading form…</div>}>
            <EnquiryForm mode="order" />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
