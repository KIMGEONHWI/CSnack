import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ESLint 대신 Biome을 사용하므로 Next.js의 ESLint 검사 비활성화
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
