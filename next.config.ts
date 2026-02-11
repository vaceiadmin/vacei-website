import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.livechat-static.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
