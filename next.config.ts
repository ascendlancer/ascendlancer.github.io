import type { NextConfig } from "next";

// GitHub Pages project-site base path support.
// If deploying to https://<user>.github.io/<repo>/, set NEXT_PUBLIC_BASE_PATH="/<repo>"
// as a build-time env var (see .github/workflows/deploy.yml). Leave unset for a
// user/organization root site (https://<user>.github.io/) or local development.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
