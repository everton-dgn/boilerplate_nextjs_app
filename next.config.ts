import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    turbopackFileSystemCacheForDev: true
  },
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
  typedRoutes: true,
  reactCompiler: true,
  reactStrictMode: true,
  cacheComponents: false,
  poweredByHeader: false
}

export default nextConfig
