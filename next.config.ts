import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Disable TypeScript type checking during production builds
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
