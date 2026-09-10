// ============================================================
// CENTRALIZED SERVICES & PRICING DATA
// ------------------------------------------------------------
// Edit prices, features and descriptions here. Nothing in the
// UI needs to change when you update this file.
//
// price: a number in INR, or null for "custom quote / let's discuss"
// ============================================================

export type ServiceCategoryId = "website" | "ecommerce" | "automation" | "other";

export interface ServicePackage {
  slug: string;
  category: ServiceCategoryId;
  name: string;
  tagline: string;
  price: number | null;
  priceLabel: string;
  bestFor: string[];
  includes: string[];
  notIncluded: string[];
  timeline: string;
  revisions: string;
  hosting: string;
  domain: string;
  featured?: boolean;
}

export interface ServiceCategory {
  id: ServiceCategoryId;
  label: string;
  shortLabel: string;
  description: string;
  icon: "website" | "cart" | "automation" | "layers";
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "website",
    label: "Website Design & Development",
    shortLabel: "Websites",
    description:
      "Modern, responsive websites built around your business — from a single landing page to a fully custom multi-page site.",
    icon: "website",
  },
  {
    id: "ecommerce",
    label: "E-Commerce",
    shortLabel: "E-Commerce",
    description:
      "Online stores designed to showcase your products, guide customers to checkout and grow with your business.",
    icon: "cart",
  },
  {
    id: "automation",
    label: "Digital Automation",
    shortLabel: "Automation",
    description:
      "Smarter, simpler workflows that cut down repetitive work — from form handling to everyday business processes.",
    icon: "automation",
  },
  {
    id: "other",
    label: "Other Digital Services",
    shortLabel: "Other Services",
    description:
      "Additional support to keep your digital presence sharp — maintenance, design and one-off digital projects.",
    icon: "layers",
  },
];

export const servicePackages: ServicePackage[] = [
  // ---------------------------------------------------------
  // WEBSITE DESIGN & DEVELOPMENT
  // ---------------------------------------------------------
  {
    slug: "landing-page",
    category: "website",
    name: "Landing Page",
    tagline: "A focused, single-page site built to convert.",
    price: 4999,
    priceLabel: "Starting from ₹4,999",
    bestFor: ["Personal brands", "Small businesses", "Campaigns & promotions", "Product or event launches"],
    includes: [
      "1-page website, thoughtfully structured",
      "Fully responsive design (mobile, tablet, desktop)",
      "Contact / WhatsApp click-to-chat integration",
      "Basic on-page SEO (titles, meta description, headings)",
      "Optimized for fast loading",
      "Deployment to your chosen hosting",
    ],
    notIncluded: ["Blog or multi-page structure", "Custom illustration or animation work", "Copywriting from scratch (you provide the core content)"],
    timeline: "3–5 working days",
    revisions: "1 round of revisions included",
    hosting: "Static hosting can be provided through GitHub Pages with no monthly hosting fee.",
    domain: "Custom domain registration is billed separately and requires renewal according to the domain provider.",
    featured: true,
  },
  {
    slug: "business-website",
    category: "website",
    name: "Business Website",
    tagline: "A complete multi-page site that represents your business properly.",
    price: 12999,
    priceLabel: "Starting from ₹12,999",
    bestFor: ["Local businesses", "Agencies & consultancies", "Professional services", "Early-stage startups"],
    includes: [
      "Up to 5 pages (Home, About, Services, Gallery, Contact — adjustable)",
      "Fully responsive design",
      "Contact form with enquiry handling",
      "Social media integration",
      "Basic on-page SEO",
      "Google Maps embed where relevant",
      "Deployment to your chosen hosting",
    ],
    notIncluded: ["E-commerce / product catalogue functionality", "Advanced custom animation", "Ongoing content writing"],
    timeline: "1–2 weeks",
    revisions: "2 rounds of revisions included",
    hosting: "Static hosting can be provided through GitHub Pages with no monthly hosting fee.",
    domain: "Custom domain registration is billed separately and requires renewal according to the domain provider.",
    featured: true,
  },
  {
    slug: "premium-website",
    category: "website",
    name: "Professional / Premium Website",
    tagline: "A distinctive, higher-end site with custom UI and richer interaction.",
    price: 24999,
    priceLabel: "Starting from ₹24,999",
    bestFor: ["Established businesses", "Brands wanting a distinctive look", "Teams needing richer storytelling on-site"],
    includes: [
      "Custom UI design — not a generic template",
      "Multiple pages with advanced page sections",
      "Thoughtful micro-interactions and animation",
      "Improved on-site navigation & content structure",
      "SEO foundation (structured metadata, semantic HTML)",
      "Custom forms tailored to your workflow",
      "Deployment to your chosen hosting",
    ],
    notIncluded: ["Full e-commerce checkout functionality", "Native mobile apps", "Paid third-party integrations (billed separately if required)"],
    timeline: "2–3 weeks",
    revisions: "3 rounds of revisions included",
    hosting: "Static hosting can be provided through GitHub Pages with no monthly hosting fee.",
    domain: "Custom domain registration is billed separately and requires renewal according to the domain provider.",
    featured: true,
  },
  {
    slug: "custom-website",
    category: "website",
    name: "Custom Website",
    tagline: "For unique businesses and requirements that don't fit a standard package.",
    price: null,
    priceLabel: "Let's discuss",
    bestFor: ["Unique or complex requirements", "Custom functionality or integrations", "Multi-phase digital projects"],
    includes: ["A scope built entirely around your requirements", "Direct discussion of features, timeline and pricing before any work begins"],
    notIncluded: ["Nothing is assumed until scope is discussed and agreed"],
    timeline: "Discussed based on scope",
    revisions: "Agreed during scoping",
    hosting: "Static hosting can be provided through GitHub Pages with no monthly hosting fee, where suitable for the project.",
    domain: "Custom domain registration is billed separately and requires renewal according to the domain provider.",
  },

  // ---------------------------------------------------------
  // E-COMMERCE
  // ---------------------------------------------------------
  {
    slug: "basic-online-store",
    category: "ecommerce",
    name: "Basic Online Store",
    tagline: "A clean, simple storefront to get your products online.",
    price: 19999,
    priceLabel: "Starting from ₹19,999",
    bestFor: ["Small product catalogues", "First-time online sellers", "Local brands going digital"],
    includes: [
      "Product listing pages (up to 20 products)",
      "Product categories & filtering",
      "Shopping cart experience",
      "Checkout via order enquiry (WhatsApp / email) or supported payment integration",
      "Shipping information page",
      "Fully responsive design",
    ],
    notIncluded: ["Payment gateway transaction fees (charged by the provider, not Ascend Lancer)", "Inventory management software", "Product photography"],
    timeline: "2–3 weeks",
    revisions: "2 rounds of revisions included",
    hosting: "Static hosting can be provided through GitHub Pages with no monthly hosting fee.",
    domain: "Custom domain registration is billed separately and requires renewal according to the domain provider.",
    featured: true,
  },
  {
    slug: "growing-store",
    category: "ecommerce",
    name: "Growing Store",
    tagline: "More products, more structure — built for a store that's scaling up.",
    price: 34999,
    priceLabel: "Starting from ₹34,999",
    bestFor: ["Larger product catalogues", "Stores expecting steady growth", "Brands needing a more refined shopping experience"],
    includes: [
      "Product listing pages (up to 75 products)",
      "Advanced categories, search & filtering",
      "Shopping cart & streamlined checkout flow",
      "Payment integration (where supported by your provider)",
      "Order and shipping information handling",
      "Fully responsive, conversion-focused design",
    ],
    notIncluded: ["Payment gateway transaction fees (charged by the provider, not Ascend Lancer)", "Warehouse / logistics management", "Ongoing product uploads beyond initial setup"],
    timeline: "3–4 weeks",
    revisions: "3 rounds of revisions included",
    hosting: "Static hosting can be provided through GitHub Pages with no monthly hosting fee.",
    domain: "Custom domain registration is billed separately and requires renewal according to the domain provider.",
    featured: true,
  },
  {
    slug: "custom-ecommerce",
    category: "ecommerce",
    name: "Custom E-Commerce",
    tagline: "A tailored store built around your catalogue, workflow and integrations.",
    price: null,
    priceLabel: "Custom quote",
    bestFor: ["Large or complex catalogues", "Specific payment/shipping requirements", "Multi-vendor or subscription models"],
    includes: ["A scope built around your product range and workflow", "Direct discussion of features, timeline and pricing before any work begins"],
    notIncluded: ["Nothing is assumed until scope is discussed and agreed", "Third-party service and payment gateway fees are always separate"],
    timeline: "Discussed based on scope",
    revisions: "Agreed during scoping",
    hosting: "Static hosting can be provided through GitHub Pages where suitable, or a compatible platform depending on requirements.",
    domain: "Custom domain registration is billed separately and requires renewal according to the domain provider.",
  },

  // ---------------------------------------------------------
  // AUTOMATION
  // ---------------------------------------------------------
  {
    slug: "workflow-automation",
    category: "automation",
    name: "Business Workflow Automation",
    tagline: "Automate the repetitive steps that eat up your team's time.",
    price: 9999,
    priceLabel: "Starting from ₹9,999",
    bestFor: ["Small businesses with repetitive admin tasks", "Teams managing enquiries or bookings manually", "Founders wanting fewer manual steps"],
    includes: [
      "Review of your current process",
      "Setup of an automated workflow for the agreed task",
      "Connections between the tools you already use, where supported",
      "Basic documentation on how the workflow runs",
      "Testing before handover",
    ],
    notIncluded: ["Ongoing management of the automation (available as a separate maintenance add-on)", "Paid subscription costs for third-party automation tools"],
    timeline: "1–2 weeks",
    revisions: "2 rounds of adjustments included",
    hosting: "Not applicable — automation runs through the tools/services agreed during setup.",
    domain: "Not applicable.",
    featured: true,
  },
  {
    slug: "form-email-automation",
    category: "automation",
    name: "Form & Email Automation",
    tagline: "Turn form submissions into organized, automatic email handling.",
    price: 4999,
    priceLabel: "Starting from ₹4,999",
    bestFor: ["Businesses collecting enquiries through a website form", "Anyone tired of manually forwarding submissions", "Simple confirmation/notification workflows"],
    includes: [
      "Form-to-email setup and configuration",
      "Confirmation message handling for the person submitting",
      "Notification formatting so submissions are easy to read",
      "Testing to confirm delivery",
    ],
    notIncluded: ["The website or form itself (if not already built by us)", "Complex multi-step approval workflows"],
    timeline: "3–5 working days",
    revisions: "1 round of adjustments included",
    hosting: "Not applicable — runs through the form/email service agreed during setup.",
    domain: "Not applicable.",
  },
  {
    slug: "custom-automation",
    category: "automation",
    name: "Custom Automation",
    tagline: "A workflow solution designed around your specific process.",
    price: null,
    priceLabel: "Custom quote",
    bestFor: ["Multi-step or multi-tool processes", "Teams with a specific operational bottleneck", "Businesses wanting something built precisely to spec"],
    includes: ["A scope built entirely around the workflow you describe", "Direct discussion of features, timeline and pricing before any work begins"],
    notIncluded: ["Nothing is assumed until scope is discussed and agreed"],
    timeline: "Discussed based on scope",
    revisions: "Agreed during scoping",
    hosting: "Not applicable / depends on scope.",
    domain: "Not applicable.",
  },

  // ---------------------------------------------------------
  // OTHER DIGITAL SERVICES
  // ---------------------------------------------------------
  {
    slug: "website-maintenance",
    category: "other",
    name: "Website Maintenance",
    tagline: "Keep an existing site updated, accurate and running smoothly.",
    price: 1999,
    priceLabel: "Starting from ₹1,999 / month",
    bestFor: ["Businesses with an existing website", "Owners who'd rather not manage updates themselves"],
    includes: ["Content and small text/image updates", "Basic monitoring for broken links or issues", "Minor fixes and adjustments"],
    notIncluded: ["Full redesigns (quoted separately)", "Hosting or domain renewal fees themselves"],
    timeline: "Ongoing, monthly",
    revisions: "Reasonable update requests included each month",
    hosting: "Depends on where your site is currently hosted.",
    domain: "Custom domain registration/renewal is billed separately by the domain provider.",
  },
  {
    slug: "additional-landing-pages",
    category: "other",
    name: "Additional Landing Pages",
    tagline: "Extra campaign or product pages added to an existing site.",
    price: 2999,
    priceLabel: "Starting from ₹2,999 / page",
    bestFor: ["Seasonal campaigns", "New product or service launches", "Businesses that already have a site with us"],
    includes: ["One additional responsive page", "Matches your existing site's design system", "Basic on-page SEO"],
    notIncluded: ["A full new site structure", "Copywriting from scratch"],
    timeline: "2–4 working days",
    revisions: "1 round of revisions included",
    hosting: "Deployed to your existing hosting setup.",
    domain: "Not applicable — added to your existing domain.",
  },
  {
    slug: "ui-ux-design",
    category: "other",
    name: "UI/UX Design",
    tagline: "Design-only engagement — you handle development, or hand it back to us later.",
    price: 7999,
    priceLabel: "Starting from ₹7,999",
    bestFor: ["Teams with their own developers", "Founders validating a design direction first", "Product ideas that need a visual layer before build"],
    includes: ["Wireframes and visual design for agreed screens", "A consistent design system (colors, type, components)", "Exported design files"],
    notIncluded: ["Development / coding of the design", "Ongoing design support beyond the agreed screens"],
    timeline: "1–2 weeks",
    revisions: "2 rounds of revisions included",
    hosting: "Not applicable.",
    domain: "Not applicable.",
  },
  {
    slug: "digital-setup",
    category: "other",
    name: "Digital Setup",
    tagline: "Get the essentials in place — domain guidance, socials and basic online presence.",
    price: 2999,
    priceLabel: "Starting from ₹2,999",
    bestFor: ["Brand-new businesses starting from zero", "Anyone unsure where to begin online"],
    includes: ["Guidance on choosing and registering a domain", "Business social profile setup guidance", "Basic online presence checklist tailored to you"],
    notIncluded: ["Domain registration cost itself (paid to the domain provider)", "A full website (quoted separately)"],
    timeline: "3–5 working days",
    revisions: "N/A",
    hosting: "Not applicable.",
    domain: "Custom domain registration is billed separately and requires renewal according to the domain provider.",
  },
];

export function getPackageBySlug(slug: string): ServicePackage | undefined {
  return servicePackages.find((p) => p.slug === slug);
}

export function getPackagesByCategory(category: ServiceCategoryId): ServicePackage[] {
  return servicePackages.filter((p) => p.category === category);
}

export function formatPrice(pkg: Pick<ServicePackage, "price" | "priceLabel">): string {
  return pkg.priceLabel;
}

export const pricingDisclaimer =
  "Prices shown are starting prices. Final pricing may vary depending on requirements, content, integrations, revisions and third-party services.";
