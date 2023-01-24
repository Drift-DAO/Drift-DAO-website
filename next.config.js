/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    loader: "akamai",
    path: ".",
  },
  trailingSlash: true,
  assetPrefix: isProd ? "https://drift-dao-website-d9489f.spheron.app/" : ".",
};

module.exports = nextConfig;
