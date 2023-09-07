module.exports = {
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    'src/app/page.tsx',
    'src/app/layout.tsx',
    'src/app/global-error.tsx',
    'src/app/not-found.tsx',
    'src/theme/',
    'src/providers/',
    'src/assets/',
    'src/tests/providers/',
    'src/@types/',
    'src/testHelpers/',
    'types.ts',
    'loading.tsx',
    'styles.module.scss'
  ],
  fakeTimers: {
    enableGlobally: true
  },
  globalSetup: '<rootDir>/.jest/timezoneMock.ts',
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': '<rootDir>/src/testHelpers/mocks/style.ts',
    '^.+\\.svg$': '<rootDir>/src/testHelpers/mocks/svg.ts'
  },
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  passWithNoTests: true,
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  transform: {
    '\\.(webp|png|gif|svg|jpg)$':
      '<rootDir>/src/testHelpers/mocks/assetsTransformer.js',
    '^.+\\.tsx?$': ['babel-jest', { presets: ['next/babel'] }]
  }
}
