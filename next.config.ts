import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  // Image optimization for Vercel
  images: {
    unoptimized: false,
  },
};

export default nextConfig;
