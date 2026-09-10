import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/data/site";
import { withBase } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Ascend Lancer | Websites, E-Commerce & Digital Solutions",
    template: "%s | Ascend Lancer",
  },
  description: site.shortDescription,
  keywords: [
    "Ascend Lancer",
    "website design",
    "website development",
    "e-commerce website",
    "digital automation",
    "affordable website India",
    "business website design",
  ],
  icons: {
    icon: [
      { url: withBase("/images/logo/favicon-32.png"), sizes: "32x32", type: "image/png" },
      { url: withBase("/images/logo/favicon-16.png"), sizes: "16x16", type: "image/png" },
    ],
    apple: withBase("/images/logo/apple-touch-icon.png"),
  },
  openGraph: {
    title: "Ascend Lancer | Websites, E-Commerce & Digital Solutions",
    description: site.shortDescription,
    url: site.url,
    siteName: "Ascend Lancer",
    images: [
      {
        url: withBase("/images/brand/launch-post.png"),
        width: 1254,
        height: 1254,
        alt: "Ascend Lancer — Building Your Digital Future",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ascend Lancer | Websites, E-Commerce & Digital Solutions",
    description: site.shortDescription,
    images: [withBase("/images/brand/launch-post.png")],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col bg-al-bg text-al-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-al-ink focus:px-4 focus:py-2 focus:text-al-cream"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
