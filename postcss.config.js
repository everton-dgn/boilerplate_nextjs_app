const IS_PRODUCTION = process.env.NODE_ENV === 'production'

/** @type {import('postcss-load-config').Config} */
export default {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      stage: 3,
      autoprefixer: {},
      features: {
        'custom-properties': true,
      },
    },
    ...(IS_PRODUCTION ? { cssnano: {} } : {}),
  },
}
