import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    ignoreIssue: [
      { path: /node_modules\/@uploadthing/ },
    ],
  },
};

export default nextConfig;
