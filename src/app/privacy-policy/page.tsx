import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Ascend Lancer handles the information you share with us.",
};

const sections = [
  {
    heading: "Information We Collect",
    body: [
      "When you submit a project enquiry or contact us, we collect the details you choose to provide — such as your name, email address, business information, Instagram handle, and any project requirements you share with us.",
      "We do not collect payment information through this website, and we do not use tracking cookies for advertising purposes.",
    ],
  },
  {
    heading: "How We Use Your Information",
    body: [
      "The information you submit is used solely to understand your project, respond to your enquiry, and communicate with you about your project if you choose to move forward.",
      "We do not sell, rent, or trade your information to third parties.",
    ],
  },
  {
    heading: "Enquiry Submission",
    body: [
      "Our project enquiry and contact forms are processed through a third-party form-to-email service so that submissions reach our inbox. This service only receives the information you enter into the form — we do not maintain a separate database of submissions beyond our own email inbox.",
    ],
  },
  {
    heading: "Third-Party Services",
    body: [
      "Where a project involves third-party services — such as payment gateways, hosting providers, or domain registrars — those services have their own privacy practices, which are outside our control. We recommend reviewing their policies directly.",
    ],
  },
  {
    heading: "Data Retention",
    body: [
      "We retain enquiry details for as long as reasonably necessary to respond to you and, where a project proceeds, for the duration of that working relationship. You can request that we delete your information by emailing us.",
    ],
  },
  {
    heading: "Your Rights",
    body: [
      `You can request access to, correction of, or deletion of the information you've shared with us at any time by emailing ${site.email}.`,
    ],
  },
  {
    heading: "Changes To This Policy",
    body: [
      "We may update this policy from time to time as our services evolve. Any changes will be reflected on this page.",
    ],
  },
  {
    heading: "Contact",
    body: [`Questions about this policy can be sent to ${site.email}.`],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.25em] text-al-gold">Legal</p>
          <h1 className="font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-al-ink sm:text-5xl">
            Privacy Policy
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
