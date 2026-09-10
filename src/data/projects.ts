// ============================================================
// PORTFOLIO / DEMO PROJECTS
// ------------------------------------------------------------
// Add new projects by adding an object to this array — the
// portfolio grid and project pages are generated automatically.
//
// All current entries are concept/demonstration projects that
// showcase what Ascend Lancer can build. None represent real
// paying clients, testimonials or measured results.
// ============================================================

export type ProjectCategory = "Website" | "E-Commerce" | "Automation" | "Landing Page";

export interface CaseStudySection {
  challenge: string;
  approach: string;
  whatWeBuilt: string;
  keyFeatures: string[];
  result: string;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  tag: "Concept Project" | "Demo Project";
  summary: string;
  accent: string; // hex used for the mockup card's accent
  caseStudy: CaseStudySection;
}

export const projects: Project[] = [
  {
    slug: "lini-oraa",
    title: "LINIORAA",
    category: "E-Commerce",
    tag: "Demo Project",
    summary:
      "A concept fashion & lifestyle storefront exploring a refined, editorial approach to product presentation.",
    accent: "#20242B",
    caseStudy: {
      challenge:
        "Independent fashion labels often end up with storefronts that look like generic marketplace templates, which undercuts a premium product.",
      approach:
        "Designed as a demonstration of what Ascend Lancer can build: an editorial, gallery-first layout with generous imagery, refined typography and a calm, boutique feel rather than a busy marketplace grid.",
      whatWeBuilt:
        "A concept storefront with a curated homepage, category browsing, individual product layouts and a streamlined cart-to-enquiry flow.",
      keyFeatures: [
        "Editorial, image-forward homepage",
        "Clean product & category browsing",
        "Simplified cart and checkout journey",
        "Fully responsive across devices",
      ],
      result: "Designed as a demonstration of what Ascend Lancer can build.",
    },
  },
  {
    slug: "harbor-and-oak",
    title: "Harbor & Oak",
    category: "Website",
    tag: "Concept Project",
    summary:
      "A concept multi-page site for a boutique furniture studio, built around craftsmanship and material quality.",
    accent: "#B88A3B",
    caseStudy: {
      challenge:
        "Furniture and craft studios need a site that feels tactile and considered, not like a stock small-business template.",
      approach:
        "Designed as a demonstration of what Ascend Lancer can build: a warm, textured layout with an emphasis on large product photography and a slower, more deliberate scroll rhythm.",
      whatWeBuilt:
        "A concept business website with a home, collection overview, studio story and contact/enquiry page.",
      keyFeatures: ["Warm, material-led visual language", "Collection showcase layout", "Studio story section", "Contact & enquiry form"],
      result: "Designed as a demonstration of what Ascend Lancer can build.",
    },
  },
  {
    slug: "north-loop-clinic",
    title: "North Loop Clinic",
    category: "Website",
    tag: "Concept Project",
    summary:
      "A concept professional-services site for a clinic, focused on clarity, trust and easy appointment enquiries.",
    accent: "#4A4F58",
    caseStudy: {
      challenge:
        "Healthcare and professional-service sites need to feel trustworthy and easy to navigate, especially for visitors who are slightly anxious or in a hurry.",
      approach:
        "Designed as a demonstration of what Ascend Lancer can build: a calm, clearly structured layout with obvious next steps and minimal visual noise.",
      whatWeBuilt:
        "A concept business website featuring services, practitioner information, FAQs and an appointment enquiry form.",
      keyFeatures: ["Clear service breakdown", "Trust-building content structure", "Simple appointment enquiry form", "Accessible, high-contrast layout"],
      result: "Designed as a demonstration of what Ascend Lancer can build.",
    },
  },
  {
    slug: "summit-supply-co",
    title: "Summit Supply Co.",
    category: "E-Commerce",
    tag: "Concept Project",
    summary: "A concept outdoor-gear store exploring category-heavy browsing and a straightforward checkout flow.",
    accent: "#D4A85C",
    caseStudy: {
      challenge:
        "Stores with a wide product range need strong categorisation so customers can find what they need quickly, without the site feeling cluttered.",
      approach:
        "Designed as a demonstration of what Ascend Lancer can build: a structured category system paired with a simplified, distraction-free checkout journey.",
      whatWeBuilt: "A concept online store with category browsing, filterable product listings and a streamlined cart.",
      keyFeatures: ["Structured category navigation", "Filterable product listings", "Simplified cart experience", "Mobile-first responsive layout"],
      result: "Designed as a demonstration of what Ascend Lancer can build.",
    },
  },
  {
    slug: "everyday-atelier",
    title: "Everyday Atelier",
    category: "Landing Page",
    tag: "Concept Project",
    summary: "A concept single-page launch site for a product drop, built for fast loading and a clear call to action.",
    accent: "#20242B",
    caseStudy: {
      challenge:
        "Product launches need a page that loads instantly, communicates the offer in seconds, and drives one clear action.",
      approach:
        "Designed as a demonstration of what Ascend Lancer can build: a tightly scoped single-page layout with one dominant call to action and no distracting navigation.",
      whatWeBuilt: "A concept landing page with a hero, product highlights, FAQ strip and a single enquiry/contact CTA.",
      keyFeatures: ["Single, focused call to action", "Fast-loading, lightweight build", "Mobile-optimised layout", "WhatsApp / contact integration"],
      result: "Designed as a demonstration of what Ascend Lancer can build.",
    },
  },
  {
    slug: "pulse-workflow",
    title: "Pulse Workflow",
    category: "Automation",
    tag: "Concept Project",
    summary: "A concept internal dashboard illustrating how a business workflow automation could be presented back to a client.",
    accent: "#4A4F58",
    caseStudy: {
      challenge:
        "Automation work can feel invisible to a client — it's hard to see what changed once repetitive tasks disappear.",
      approach:
        "Designed as a demonstration of what Ascend Lancer can build: a simple visual summary showing the steps that were automated and what now happens without manual input.",
      whatWeBuilt: "A concept overview illustrating an enquiry-to-inbox automation and the steps it replaced.",
      keyFeatures: ["Visual before/after of a manual process", "Plain-language explanation of each automated step", "Clear handover documentation approach"],
      result: "Designed as a demonstration of what Ascend Lancer can build.",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
