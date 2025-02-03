import type { NextConfig } from 'next'

const IS_DEVELOPMENT = process.env.NODE_ENV !== 'production'

const nextConfig: NextConfig = {
  // experimental: {
    // ppr: 'incremental'
  // },
  experimental: IS_DEVELOPMENT
    ? {
      turbo: {
        rules: {
          '*.svg': {
            loaders: ['@svgr/webpack'],
            as: '*.js',
          },
        },
      },
    }
    : {},
  webpack(config) {
    if (!IS_DEVELOPMENT) {
      config.module.rules.push({
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
      })
    }
    return config
  },
  images: {
    deviceSizes: [450, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [{
      protocol: 'http',
      hostname: 'localhost'
    }],
    formats: ['image/webp'],
    loader: 'default',
    path: '/_next/image'
  },
  reactStrictMode: true,
  poweredByHeader: false
}

export default nextConfig
