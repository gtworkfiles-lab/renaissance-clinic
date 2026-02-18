/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, 
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  async redirects() {
    return [
      {
        // 1. Направляємо старе посилання з Google Search Console
        source: '/services/alkoholizm',
        destination: '/services/likuvannya-alkogolizmu',
        permanent: true,
      },
      {
        // 2. Направляємо посилання, яке у вас зараз видає 404 на скріншотах
        source: '/services/alcohol-treatment',
        destination: '/services/likuvannya-alkogolizmu',
        permanent: true,
      },
      {
        // 3. Направляємо ігроманію (перевірте, чи робоча сторінка має такий URL)
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