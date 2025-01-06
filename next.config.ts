import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  swcMinify: true,
  output: "standalone",
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    APP_API_URL: process.env.NEXT_PUBLIC_APP_API_URL,
  },
  httpAgentOptions: {
    keepAlive: false,
  },
  images: {
    minimumCacheTTL: 60,
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
