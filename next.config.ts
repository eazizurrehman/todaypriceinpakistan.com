import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  cacheComponents: true,
  redirects() {
    return [
      {
        source: "/:slug((?!gold-rate-today).*gold.*)",
        destination: "/gold-rate-today",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
