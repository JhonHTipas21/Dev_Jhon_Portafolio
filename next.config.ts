import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      // para miniaturas de repos
      { protocol: "https", hostname: "opengraph.githubassets.com" }
    ]
  }
};

export default nextConfig;
