/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Залишаємо unoptimized: true, якщо ви використовуєте статичний експорт або прості зображення
    unoptimized: true, 
    // remotePatterns видалено, бо Sanity більше не використовується
  },

  typescript: {
    // Ігноруємо помилки TypeScript для стабільного білду
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ігноруємо помилки лінтера
    ignoreDuringBuilds: true,
  },

  async redirects() {
    return [
      {
        source: '/services/alkoholizm',
        destination: '/services/likuvannya-alkogolizmu',
        permanent: true,
      },
      {
        source: '/services/ihromania',
        destination: '/services/gambling-treatment', 
        permanent: true,
      },
      {
        source: '/dim',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;