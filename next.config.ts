import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export", // enables static export
  images: {
    unoptimized: true, // required for next/image in static export
  },
  trailingSlash: true, // helps with static hosting
  // Disable server-side features that don't work with static export
  experimental: {
    esmExternals: false,
  },
  // Ensure all routes are statically generated
  generateStaticParams: true,
};

export default nextConfig;
