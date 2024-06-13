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
    // FIXME: テスト用の設定追加なので、本番環境では削除する
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.jp",
        port: "",
      },
    ],
    domains: ["storage.googleapis.com"],
  },
  output: "export",
};

export default withVanillaExtract(nextConfig);
