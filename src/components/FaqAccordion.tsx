"use client";

import { useState } from "react";
import type { FaqItem } from "@/data/faqs";
import { cx } from "@/lib/utils";

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col divide-y divide-al-line border-y border-al-line">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-display text-base font-semibold text-al-ink sm:text-lg">{item.question}</span>
              <span
                className={cx(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-al-line text-al-gold transition-transform duration-300",
                  isOpen && "rotate-45 border-al-gold"
                )}
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            <div
              className={cx(
                "grid overflow-hidden transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="pb-6 pr-10 text-sm leading-relaxed text-al-ink-soft sm:text-base">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
