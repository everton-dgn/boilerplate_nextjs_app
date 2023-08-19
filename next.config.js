/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  basePath: '',
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['localhost'],
    formats: ['image/webp'],
    loader: 'default',
    path: '/_next/image'
  },
  optimizeFonts: false,
  reactStrictMode: true,
  swcMinify: true,
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
