import type { NextConfig } from "next";

// Allow basePath to be configured via environment variable
// If deploying to root, set NEXT_PUBLIC_BASE_PATH="" or don't set it
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (process.env.NODE_ENV === "production" ? "/Resume-Nextjs" : "");

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined, // undefined means root deployment
  assetPrefix: basePath || undefined,
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
