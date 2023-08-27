module.exports = {
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    'src/app/page.tsx',
    'src/app/layout.tsx',
    'src/app/global-error.tsx',
    'src/app/components/index.tsx',
    'src/app/components/atoms/index.tsx',
    'src/app/components/molecules/index.tsx',
    'src/app/components/organisms/index.tsx',
    'src/app/components/templates/index.tsx',
    'src/app/not-found.tsx',
    'src/theme/',
    'src/globalStyles/',
    'src/providers/',
    'src/assets/',
    'src/tests/providers/',
    'src/@types/',
    'src/testHelpers/',
    'types.ts',
    'styles.module.scss'
  ],
  fakeTimers: {
    enableGlobally: true
  },
  globalSetup: '<rootDir>/.jest/timezoneMock.ts',
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  moduleNameMapper: {
    '^.+\\.scss$': '<rootDir>/src/testHelpers/mocks/style.ts',
    '^.+\\.svg$': '<rootDir>/src/testHelpers/mocks/svg.ts'
  },
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  passWithNoTests: true,
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.tsx?$',
  transform: {
    '\\.(webp|png|gif|svg|jpg)$':
      '<rootDir>/src/testHelpers/mocks/assetsTransformer.js',
    '^.+\\.tsx?$': ['babel-jest', { presets: ['next/babel'] }]
  }
}
