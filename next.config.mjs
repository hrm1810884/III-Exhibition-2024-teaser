import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/III-Exhibition-2024-teaser",
  assetPrefix: "/III-Exhibition-2024-teaser/",
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: "export",
  publicRuntimeConfig: {
    basePath: "/III-Exhibition-2024-teaser",
  },
};

export default withVanillaExtract(nextConfig);
