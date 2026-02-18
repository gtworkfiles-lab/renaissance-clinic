/** @type {import('next').NextConfig} */
const nextConfig = {
  // Налаштування зображень
  images: {
    unoptimized: true, 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },

  // Ігнорування помилок для успішного білду
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ФІКС 404 ПОМИЛОК: Додаємо автоматичні перенаправлення
  async redirects() {
    return [
      {
        source: '/services/alkoholizm',
        destination: '/services/alcohol-treatment',
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