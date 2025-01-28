const IS_PRODUCTION = process.env.NODE_ENV === 'production'

/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      stage: 3,
      autoprefixer: {},
      features: {
        'custom-properties': false,
      }
    },
    ...(IS_PRODUCTION ? {cssnano: {}} : {})
  }
}
