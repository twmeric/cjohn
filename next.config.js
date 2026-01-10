/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['zh-HK'],
    defaultLocale: 'zh-HK',
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
