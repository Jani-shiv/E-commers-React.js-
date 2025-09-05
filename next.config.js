const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
})

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['your-cdn.com', 'images.unsplash.com'],
  },
  i18n: {
    locales: ['en', 'es', 'fr', 'de'],
    defaultLocale: 'en',
  },
})
