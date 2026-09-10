import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { servicePackages } from "@/data/services";
import { projects } from "@/data/projects";

export const dynamic = "force-static";

const staticRoutes = [
  "",
  "/services",
  "/portfolio",
  "/pricing",
  "/how-it-works",
  "/about",
  "/custom-project",
  "/contact",
  "/order",
  "/faq",
  "/privacy-policy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${base}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const serviceEntries: MetadataRoute.Sitemap = servicePackages.map((pkg) => ({
    url: `${base}/services/${pkg.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${base}/portfolio/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticEntries, ...serviceEntries, ...projectEntries];
}
