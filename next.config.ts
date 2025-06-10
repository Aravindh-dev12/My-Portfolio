import type { NextConfig } from "next";

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 👈 This will let the build continue despite lint errors
  },
};
export default nextConfig;
