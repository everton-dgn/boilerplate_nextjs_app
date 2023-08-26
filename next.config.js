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
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      issuer: /\.tsx?$/,
      test: /\.svg$/i,
      use: [{ loader: '@svgr/webpack', options: { exportType: 'named' } }]
    })
    return config
  }
}

module.exports = nextConfig
