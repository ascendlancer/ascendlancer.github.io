"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Button, ButtonEl } from "./Button";
import { IconCheck } from "./Icons";
import { servicePackages, getPackageBySlug } from "@/data/services";
import { site } from "@/data/site";
import { generateReferenceId } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

interface FieldProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  hint?: string;
}

function Field({ label, required, children, hint }: FieldProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-display text-xs font-semibold uppercase tracking-wider text-al-ink">
        {label} {required && <span className="text-al-gold">*</span>}
      </span>
      {children}
      {hint && <span className="text-xs text-al-ink-soft">{hint}</span>}
    </label>
  );
}

const inputClass =
  "w-full rounded-sm border border-al-line bg-al-cream px-4 py-3 text-sm text-al-ink placeholder:text-al-ink-soft/50 transition-colors focus:border-al-gold outline-none";

const budgetOptions = [
  "Under ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000+",
  "Not sure yet",
];

interface EnquiryFormProps {
  mode: "order" | "custom";
}

export default function EnquiryForm({ mode }: EnquiryFormProps) {
  const searchParams = useSearchParams();
  const slugParam = searchParams.get("slug") || "";
  const serviceParam = searchParams.get("service") || "";

  const initialPkg = slugParam ? getPackageBySlug(slugParam) : undefined;

  const [selectedSlug, setSelectedSlug] = useState(initialPkg?.slug || "");
  const [status, setStatus] = useState<Status>("idle");
  const [referenceId, setReferenceId] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const selectedPkg = selectedSlug ? getPackageBySlug(selectedSlug) : undefined;
  const serviceName = mode === "custom" ? "Custom Project" : selectedPkg?.name || serviceParam || "Not yet selected";
  const priceLabel = mode === "custom" ? "Let's discuss" : selectedPkg?.priceLabel || "To be confirmed";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!termsAccepted) return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const ref = generateReferenceId();
    const fullName = String(data.get("fullName") || "");

    const payload: Record<string, string> = {
      _subject: `New Project Enquiry — ${serviceName} — ${fullName}`,
      _template: "table",
      _captcha: "false",
      "Reference ID": ref,
      "Selected Service": mode === "custom" ? "Custom Project" : selectedPkg?.name || "Not specified",
      "Selected Package": selectedPkg?.name || (mode === "custom" ? "Custom" : "Not specified"),
      "Listed Price": priceLabel,
    };

    data.forEach((value, key) => {
      if (typeof value === "string" && value.trim() !== "") {
        payload[key] = value;
      }
    });

    setStatus("submitting");
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Submission failed");
      setReferenceId(ref);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto max-w-xl rounded-md border border-al-gold/40 bg-al-cream px-8 py-14 text-center sm:px-14">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-al-gold/15 text-al-gold">
          <IconCheck className="h-8 w-8" />
        </div>
        <h2 className="mt-6 font-display text-2xl font-bold uppercase tracking-wide text-al-ink sm:text-3xl">
          Request Received ✦
        </h2>
        <p className="mt-4 text-base leading-relaxed text-al-ink-soft">
          Thank you for contacting Ascend Lancer. We&apos;ve received your project details. We&apos;ll review your
          requirements and contact you at the email you provided.
        </p>
        <p className="mt-6 font-display text-sm font-semibold uppercase tracking-widest text-al-gold">
          Reference: {referenceId}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/" variant="outline" size="lg">
            Back To Home
          </Button>
          <Button href={site.instagramUrl} external variant="primary" size="lg">
            Message Us on Instagram
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-3xl">
      {/* Selected service summary */}
      <div className="rounded-md border border-al-line bg-al-bg-alt p-6 sm:p-8">
        <p className="font-display text-xs font-semibold uppercase tracking-widest text-al-gold">
          {mode === "custom" ? "Custom Project" : "Selected Service"}
        </p>

        {mode === "order" && (
          <div className="mt-5">
            <Field label="Service / Package" required>
              <select
                required
                className={inputClass}
                value={selectedSlug}
                onChange={(e) => setSelectedSlug(e.target.value)}
                name="packageSelect"
              >
                <option value="" disabled>
                  Choose a service package
                </option>
                {servicePackages.map((pkg) => (
                  <option key={pkg.slug} value={pkg.slug}>
                    {pkg.name} — {pkg.priceLabel}
                  </option>
                ))}
              </select>
            </Field>
          </div>
        )}

        <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
          <div>
            <dt className="text-[11px] uppercase tracking-wider text-al-ink-soft">Service</dt>
            <dd className="mt-1 font-display text-sm font-bold text-al-ink">{serviceName}</dd>
          </div>
          <div>
            <dt className="text-[11px] uppercase tracking-wider text-al-ink-soft">Package</dt>
            <dd className="mt-1 font-display text-sm font-bold text-al-ink">
              {selectedPkg?.name || (mode === "custom" ? "Custom Scope" : "—")}
            </dd>
          </div>
          <div>
            <dt className="text-[11px] uppercase tracking-wider text-al-ink-soft">Price</dt>
            <dd className="mt-1 font-display text-sm font-bold text-al-gold">{priceLabel}</dd>
          </div>
        </dl>
      </div>

      {/* Customer details */}
      <div className="mt-12">
        <h2 className="font-display text-sm font-bold uppercase tracking-widest text-al-ink">Customer Details</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <Field label="Full Name" required>
            <input required name="fullName" type="text" className={inputClass} placeholder="Your full name" />
          </Field>
          <Field label="Business / Brand Name">
            <input name="businessName" type="text" className={inputClass} placeholder="Optional" />
          </Field>
          <Field label="Email" required>
            <input required name="email" type="email" className={inputClass} placeholder="you@example.com" />
          </Field>
          <Field label="Instagram">
            <input name="instagram" type="text" className={inputClass} placeholder="@yourhandle (optional)" />
          </Field>
          <Field label="City / Location">
            <input name="location" type="text" className={inputClass} placeholder="Optional" />
          </Field>
        </div>
      </div>

      {/* Project details */}
      <div className="mt-12">
        <h2 className="font-display text-sm font-bold uppercase tracking-widest text-al-ink">Project Details</h2>
        <div className="mt-6 grid gap-6">
          <Field label="What do you need?" required>
            <textarea
              required
              name="whatDoYouNeed"
              rows={4}
              className={inputClass}
              placeholder="Tell us about your project — what it's for and what you're hoping to achieve."
            />
          </Field>
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Business Type" required>
              <input required name="businessType" type="text" className={inputClass} placeholder="e.g. Retail, Services, Personal brand" />
            </Field>
            <Field label="Website / Project Purpose" required>
              <input required name="websitePurpose" type="text" className={inputClass} placeholder="e.g. Get more enquiries, sell products" />
            </Field>
            <Field label="Preferred Style">
              <input name="preferredStyle" type="text" className={inputClass} placeholder="e.g. Minimal, bold, elegant" />
            </Field>
            <Field label="Reference Websites">
              <input name="referenceWebsites" type="text" className={inputClass} placeholder="Links you like (optional)" />
            </Field>
            <Field label="Existing Website">
              <input name="existingWebsite" type="text" className={inputClass} placeholder="If you have one already" />
            </Field>
            <Field label="Number of Pages Required">
              <input name="numberOfPages" type="text" className={inputClass} placeholder="e.g. 5" />
            </Field>
            <Field label="Do you already have a domain?">
              <select name="hasDomain" defaultValue="" className={inputClass}>
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not sure">Not sure</option>
              </select>
            </Field>
            <Field label="Do you already have hosting?">
              <select name="hasHosting" defaultValue="" className={inputClass}>
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not sure">Not sure</option>
              </select>
            </Field>
            <Field label="Do you need a logo?">
              <select name="needLogo" defaultValue="" className={inputClass}>
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </Field>
            <Field label="Do you need content written?">
              <select name="needContent" defaultValue="" className={inputClass}>
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </Field>
            <Field label="Do you need product upload?">
              <select name="needProductUpload" defaultValue="" className={inputClass}>
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not applicable">Not applicable</option>
              </select>
            </Field>
            <Field label="Expected Launch Date">
              <input name="launchDate" type="date" className={inputClass} />
            </Field>
            <Field label="Budget Range">
              <select name="budgetRange" defaultValue="" className={inputClass}>
                <option value="">Select a range</option>
                {budgetOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>
          </div>
          <Field label="Additional Requirements">
            <textarea name="additionalRequirements" rows={3} className={inputClass} placeholder="Anything else we should know?" />
          </Field>
        </div>
      </div>

      {/* Contact preference */}
      <div className="mt-12">
        <h2 className="font-display text-sm font-bold uppercase tracking-widest text-al-ink">Contact Preference</h2>
        <div className="mt-5 flex gap-6">
          <label className="flex items-center gap-2.5 text-sm text-al-ink">
            <input type="radio" name="contactPreference" value="Email" defaultChecked className="h-4 w-4 accent-[#B88A3B]" />
            Email
          </label>
          <label className="flex items-center gap-2.5 text-sm text-al-ink">
            <input type="radio" name="contactPreference" value="Instagram DM" className="h-4 w-4 accent-[#B88A3B]" />
            Instagram DM
          </label>
        </div>
      </div>

      {/* Terms */}
      <div className="mt-10 rounded-md border border-al-line bg-al-bg-alt p-5">
        <label className="flex items-start gap-3 text-sm text-al-ink-soft">
          <input
            type="checkbox"
            required
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 accent-[#B88A3B]"
          />
          <span>
            I understand that submitting this form is a project enquiry and not an automatic payment.
          </span>
        </label>
      </div>

      {status === "error" && (
        <div className="mt-6 rounded-md border border-al-gold/50 bg-al-gold-pale/40 p-5 text-sm text-al-ink">
          <p className="font-display font-semibold uppercase tracking-wide">Something went wrong sending your enquiry.</p>
          <p className="mt-2 leading-relaxed">
            Please try again, or reach us directly at{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-al-gold underline underline-offset-2">
              {site.email}
            </a>{" "}
            or via{" "}
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-al-gold underline underline-offset-2">
              Instagram
            </a>
            .
          </p>
        </div>
      )}

      <div className="mt-10 flex flex-col items-start gap-4">
        <ButtonEl
          type="submit"
          size="lg"
          className="w-full sm:w-auto"
          disabled={status === "submitting" || !termsAccepted}
        >
          {status === "submitting" ? "Submitting…" : "Submit Project Request"}
        </ButtonEl>
        <p className="text-xs leading-relaxed text-al-ink-soft">
          Prefer not to fill a form?{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-al-ink underline underline-offset-2 hover:text-al-gold">
            Email us directly
          </a>{" "}
          or{" "}
          <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-al-ink underline underline-offset-2 hover:text-al-gold">
            message us on Instagram
          </a>
          .
        </p>
      </div>
    </form>
  );
}
