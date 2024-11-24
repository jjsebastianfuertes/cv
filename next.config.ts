import type { NextConfig } from "next";

const isProd = process.env.ENV === "PROD";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? "/cv/" : "",
  basePath: isProd ? "/cv" : "",
  output: "export",
};

export default nextConfig;
