import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // experimental: {
  // ppr: 'incremental'
  // },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js'
      }
    }
  },
  images: {
    deviceSizes: [450, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost'
      }
    ],
    formats: ['image/webp'],
    loader: 'default',
    path: '/_next/image'
  },
  reactStrictMode: true,
  poweredByHeader: false
}

export default nextConfig
