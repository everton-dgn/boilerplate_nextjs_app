/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  images: {
    domains: ['localhost'],
    formats: ['image/webp'],
    loader: 'default',
    path: '/_next/image'
  },
  optimizeFonts: true,
  reactStrictMode: true
}

module.exports = nextConfig
