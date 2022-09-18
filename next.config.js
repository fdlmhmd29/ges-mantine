/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["id"],
    defaultLocale: "id",
  },
  images: {
    domains: ["images.unsplash.com", "dummyimage.com", "ik.imagekit.io"],
    deviceSizes: [375, 640, 768, 1024, 1280, 1536],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
