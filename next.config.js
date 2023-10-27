/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'http',
      hostname: 'localhost'
    }],
    formats: ['image/webp'],
    loader: 'default',
    path: '/_next/image'
  },
  optimizeFonts: true,
  reactStrictMode: true
}

module.exports = nextConfig
