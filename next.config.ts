import type { NextConfig } from "next";

// Allow basePath to be configured via environment variable
// If deploying to root, set NEXT_PUBLIC_BASE_PATH="" or don't set it
// In development, always use empty basePath
const isDev = process.env.NODE_ENV === "development";

// Get basePath from environment, with smart defaults
let basePath = "";
if (!isDev) {
  // In production, use env var or default to /Resume-Nextjs
  basePath = process.env.NEXT_PUBLIC_BASE_PATH !== undefined 
    ? process.env.NEXT_PUBLIC_BASE_PATH 
    : "/Resume-Nextjs";
}

// Normalize basePath: empty string means root, undefined means no basePath
const normalizedBasePath = basePath === "" ? undefined : basePath;

const nextConfig: NextConfig = {
  // Only use static export in production builds
  // In development, use normal Next.js server mode
  ...(isDev ? {} : { output: "export" }),
  // Only set basePath in production builds, not in development
  basePath: isDev ? undefined : normalizedBasePath,
  assetPrefix: isDev ? undefined : normalizedBasePath,
  images: {
    unoptimized: true,
    // Allow external images from CDN
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
        pathname: '/**',
      },
    ],
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
