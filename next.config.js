import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Ми дозволяємо збірку, навіть якщо є помилки TypeScript
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ми ігноруємо помилки лінтера під час збірки
    ignoreDuringBuilds: true,
  },
  // Це дозволить Sanity працювати стабільно
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

export default nextConfig;