import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms that apply when you submit an enquiry or work with Ascend Lancer.",
};

const sections = [
  {
    heading: "Project Enquiries",
    body: [
      "Submitting a project enquiry or order form on this website is a request for us to review your requirements — it is not an automatic payment, contract, or guarantee of work beginning immediately.",
      "We will confirm scope, pricing, and timeline with you directly by email before any paid work begins.",
    ],
  },
  {
    heading: "Pricing",
    body: [
      "Prices shown on this website are starting prices for the described scope. Final pricing may vary based on your specific requirements, content provided, integrations requested, number of revisions, and any third-party services involved.",
      "A confirmed quote will always be shared with you before work begins.",
    ],
  },
  {
    heading: "Revisions",
    body: [
      "Each service package includes a stated number of revision rounds, listed on that service's detail page. Revisions beyond the included rounds can typically be accommodated and will be discussed and, where relevant, quoted separately.",
    ],
  },
  {
    heading: "Third-Party Services & Fees",
    body: [
      "Some projects rely on third-party services such as payment gateways, hosting providers, or domain registrars. Any fees charged directly by those providers — including transaction fees, hosting costs, or domain registration and renewal costs — are separate from Ascend Lancer's service pricing and are the customer's responsibility.",
    ],
  },
  {
    heading: "Domains & Hosting",
    body: [
      "Where GitHub Pages hosting is offered, it comes with no monthly hosting fee for static websites. Custom domain registration is not free and is billed separately by the domain provider, subject to their renewal terms.",
    ],
  },
  {
    heading: "Project Communication",
    body: [
      "We communicate primarily by email, with Instagram DM available as an alternative. Timely responses and feedback from the customer help keep projects on schedule.",
    ],
  },
  {
    heading: "Cancellations & Refunds",
    body: [
      "Because each project's payment terms are confirmed individually before work begins, cancellation and refund terms will be agreed upon at that stage and documented in writing (e.g. by email) so both sides are clear before any payment is made.",
    ],
  },
  {
    heading: "Intellectual Property",
    body: [
      "Upon full payment for a completed project, ownership of the final delivered files transfers to the customer, unless otherwise agreed. Any third-party assets (fonts, stock imagery, plugins, etc.) remain subject to their own licensing terms.",
    ],
  },
  {
    heading: "Changes To These Terms",
    body: ["These terms may be updated from time to time. Continued use of our services after changes constitutes acceptance of the updated terms."],
  },
  {
    heading: "Contact",
    body: [`Questions about these terms can be sent to ${site.email}.`],
  },
];

export default function TermsPage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.25em] text-al-gold">Legal</p>
          <h1 className="font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-al-ink sm:text-5xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-5 text-sm text-al-ink-soft">Last updated: 2026</p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-10">
          {sections.map((section, i) => (
            <Reveal key={section.heading} delay={i * 40}>
              <h2 className="font-display text-lg font-bold uppercase tracking-wide text-al-ink">
                {section.heading}
              </h2>
              <div className="mt-3 flex flex-col gap-3">
                {section.body.map((para) => (
                  <p key={para} className="text-sm leading-relaxed text-al-ink-soft sm:text-base">
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
