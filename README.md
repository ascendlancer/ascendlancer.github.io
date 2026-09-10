# Ascend Lancer — Official Website

**Building Your Digital Future**

A premium, conversion-focused marketing and service-ordering website for Ascend Lancer, built with Next.js
(static export), TypeScript and Tailwind CSS. The site is fully static and designed to be hosted for free on
GitHub Pages.

---

## 1. Project Structure

```
ascend-lancer/
├─ .github/workflows/deploy.yml   # GitHub Actions — auto-deploys to GitHub Pages
├─ public/
│  ├─ .nojekyll                   # Required so GitHub Pages serves the _next/ folder
│  └─ images/
│     ├─ logo/                    # Favicons, apple-touch-icon, logo mark (all sizes)
│     ├─ brand/                   # Instagram launch post (used as OG/social preview image)
│     └─ projects/                # (empty — see "Adding portfolio images" below)
├─ src/
│  ├─ app/                        # Every route in the site (Next.js App Router)
│  │  ├─ page.tsx                 # Homepage
│  │  ├─ layout.tsx               # Root layout — nav, footer, global <head> metadata
│  │  ├─ globals.css              # Design tokens (colors, fonts, animations)
│  │  ├─ services/page.tsx        # Services listing (grouped by category)
│  │  ├─ services/[slug]/page.tsx # Individual service/package detail page
│  │  ├─ portfolio/page.tsx       # Portfolio / Our Work grid
│  │  ├─ portfolio/[slug]/page.tsx# Individual project case-study page
│  │  ├─ pricing/page.tsx         # Full pricing comparison page
│  │  ├─ how-it-works/page.tsx
│  │  ├─ about/page.tsx
│  │  ├─ faq/page.tsx
│  │  ├─ contact/page.tsx
│  │  ├─ order/page.tsx           # "Get Started" project enquiry form
│  │  ├─ custom-project/page.tsx  # Custom project enquiry form
│  │  ├─ privacy-policy/page.tsx
│  │  ├─ terms/page.tsx
│  │  ├─ not-found.tsx            # Custom 404 page
│  │  ├─ sitemap.ts               # Auto-generated sitemap.xml
│  │  └─ robots.ts                # Auto-generated robots.txt
│  ├─ components/                 # Reusable UI building blocks
│  │  ├─ Navbar.tsx, Footer.tsx, Logo.tsx, Button.tsx
│  │  ├─ EnquiryForm.tsx          # The order/custom project form (FormSubmit integration)
│  │  ├─ PackageCard.tsx, ProjectCard.tsx, ServiceCategoryCard.tsx
│  │  ├─ SectionHeading.tsx, CTABanner.tsx, Reveal.tsx (scroll animation), Icons.tsx
│  │  └─ FaqAccordion.tsx
│  ├─ data/                       # ← EDIT THESE FILES TO UPDATE SITE CONTENT
│  │  ├─ site.ts                  # Business name, email, Instagram, nav links
│  │  ├─ services.ts              # ALL services, packages & prices
│  │  ├─ projects.ts              # Portfolio / demo projects
│  │  ├─ faqs.ts                  # FAQ questions & answers
│  │  ├─ process.ts               # "How It Works" steps
│  │  └─ why-us.ts                # "Why Ascend Lancer" feature list
│  └─ lib/utils.ts                # Small helpers (reference ID generator, basePath helper)
├─ next.config.ts                 # Static export config + GitHub Pages base path handling
└─ package.json
```

---

## 2. Running Locally

Requirements: Node.js 20+.

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

---

## 3. Building For Production

```bash
npm run build
```

This generates a fully static site in the `out/` folder (`output: "export"` in `next.config.ts`). To preview
the exact static build locally before deploying:

```bash
npm run serve
```

---

## 4. Deploying to GitHub Pages

A ready-to-use GitHub Actions workflow is included at `.github/workflows/deploy.yml`. It builds the site and
publishes the `out/` folder automatically on every push to `main`.

**One-time setup:**

1. Push this project to a GitHub repository.
2. In the repo, go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab). Your site will be live at:
   - `https://<your-username>.github.io/` if this is a **user/organization site** repo (named
     `<your-username>.github.io`), or
   - `https://<your-username>.github.io/<repo-name>/` if this is a **project site** (any other repo name).

**If deploying as a project site** (with a `/repo-name/` subpath), the workflow already passes the correct
`NEXT_PUBLIC_BASE_PATH` automatically via `actions/configure-pages`, and all internal links, assets, icons and
the sitemap are built to respect it — no manual changes needed.

**Recommended:** update `url` in `src/data/site.ts` to your final live URL (custom domain or GitHub Pages URL)
so that Open Graph tags, the sitemap and canonical links are fully accurate.

---

## 5. What To Change Before Launch

- [ ] `src/data/site.ts` — confirm the final live `url`, email and Instagram link.
- [ ] `src/data/services.ts` — review every price and package description (see below).
- [ ] Activate the enquiry form — see **Section 6**. **This step is required** or form submissions will not
      reach your inbox.
- [ ] Optionally replace the concept/demo portfolio projects in `src/data/projects.ts` with real projects once
      you have them (keep the "Concept Project" / "Demo Project" labelling honest until you do).
- [ ] Double-check `src/data/site.ts`'s `formEndpoint` still points to the FormSubmit address you activated.

---

## 6. Configuring the Enquiry / Order Form (Important)

The site has no backend, so project enquiries are sent using **[FormSubmit](https://formsubmit.co)** — a free
form-to-email service that works with static sites. The form already targets `ascendlancer@gmail.com` via:

```
src/data/site.ts → formEndpoint: "https://formsubmit.co/ajax/ascendlancer@gmail.com"
```

**Activation is required before the form will deliver email — do this once:**

1. Deploy the site (or run it locally) and submit the order/custom-project form once yourself with a test entry.
2. FormSubmit will send a one-time **"Activate Form"** confirmation email to `ascendlancer@gmail.com`.
3. Click the activation link in that email. After that, all future submissions are delivered automatically.

Submissions arrive as a formatted table email with the subject `New Project Enquiry — [Service] — [Name]`,
including the customer's details, selected service/package, project requirements and a generated reference ID
(e.g. `AL-2026-4821`).

**If you'd rather use a different form backend later** (e.g. a custom endpoint), only one line needs to
change — `formEndpoint` in `src/data/site.ts`. The rest of `EnquiryForm.tsx` will keep working unchanged as
long as the endpoint accepts a JSON POST body.

**Fallback contact:** Even if the form backend is ever misconfigured, every form screen and page also shows
direct `mailto:` and Instagram links, so customers are never blocked from reaching you.

---

## 7. Where To Change Prices & Packages

Open **`src/data/services.ts`**. Every package (Landing Page, Business Website, Basic Online Store, etc.) is a
single object in the `servicePackages` array with a `price`, `priceLabel`, `includes`, `notIncluded`,
`timeline`, `revisions`, `hosting` and `domain` field. Editing any of these updates the Services page, Pricing
page, individual service detail pages and the order form dropdown automatically — no other file needs to
change.

To add a **new package**, copy an existing object in `servicePackages`, give it a unique `slug`, and set its
`category` to one of `"website" | "ecommerce" | "automation" | "other"`.

To add a **new category**, add an entry to the `serviceCategories` array at the top of the same file.

---

## 8. Where To Add Portfolio / Demo Projects

Open **`src/data/projects.ts`** and add a new object to the `projects` array with a unique `slug`. Each project
automatically gets a portfolio grid card and a full case-study page at `/portfolio/[slug]`. Set `tag` to
`"Concept Project"` or `"Demo Project"` — never present demo work as a real client project.

Currently, project visuals are elegant CSS/gradient mockups (no broken image placeholders). To use a real
photo instead, add the image to `public/images/projects/` and update `ProjectCard.tsx` /
`portfolio/[slug]/page.tsx` to render it with `next/image` in place of the gradient block.

---

## 9. Where To Add New Services (Other Digital Services)

The "Other Digital Services" category in `src/data/services.ts` (category id `"other"`) is designed to grow.
Add a new object there the same way as any other package — it will appear automatically on the Services and
Pricing pages under that category.

---

## Notes

- No AI-related wording appears anywhere on the public site, per brand requirements.
- No personal name or phone number appears anywhere on the site.
- No fabricated testimonials, client counts, or results are used anywhere — trust is built through transparent
  pricing, clear process and honest project labelling instead.
- The site passes `next build` and `eslint` with zero errors and zero warnings.
