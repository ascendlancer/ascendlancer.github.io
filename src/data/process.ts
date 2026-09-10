export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

// Short version — used on the homepage teaser.
export const homeProcessSteps: ProcessStep[] = [
  { number: "01", title: "Tell Us Your Idea", description: "Share what you're building and what you need it to do." },
  { number: "02", title: "Choose Your Package", description: "Pick a service that fits, or ask us to help you decide." },
  { number: "03", title: "We Build", description: "We design and develop your project around your requirements." },
  { number: "04", title: "Review & Refine", description: "You review the work and we make adjustments together." },
  { number: "05", title: "Launch", description: "Your project goes live and is ready for your audience." },
];

// Full version — used on the How It Works page.
export const fullProcessSteps: ProcessStep[] = [
  { number: "01", title: "Choose a Service", description: "Browse our services and pricing, and pick the package that best matches what you need." },
  { number: "02", title: "Submit Requirements", description: "Fill in the project enquiry form with your business details, goals and preferences." },
  { number: "03", title: "We Review Your Project", description: "We look over your requirements and confirm we fully understand what you're trying to build." },
  { number: "04", title: "Receive Confirmation & Quotation", description: "We reply by email with a clear scope, timeline and confirmed pricing before anything begins." },
  { number: "05", title: "Development Begins", description: "Once you're happy to proceed, we start designing and building your project." },
  { number: "06", title: "Review", description: "You review the work in progress and share feedback within your included revision rounds." },
  { number: "07", title: "Final Delivery", description: "Once everything is approved, we prepare the final version of your project for handover." },
  { number: "08", title: "Launch", description: "Your website, store or automation goes live and is ready to work for you." },
];
