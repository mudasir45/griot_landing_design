import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow refreshed public/ images to show without stale optimizer cache in dev
    minimumCacheTTL: process.env.NODE_ENV === "development" ? 0 : 14400,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
    ],
  },
};

export default nextConfig;
