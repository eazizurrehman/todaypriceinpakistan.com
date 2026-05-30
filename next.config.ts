import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  cacheComponents: true,
  cacheLife: {
    eightHours: {
      stale: 60 * 60 * 24,
      revalidate: 60 * 60 * 8,
      expire: 60 * 60 * 24,
    },
  },
  redirects() {
    return [
      {
        source: "/:slug((?!gold/rate-today|images/gold/).*gold.*)",
        destination: "/gold/rate-today",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
