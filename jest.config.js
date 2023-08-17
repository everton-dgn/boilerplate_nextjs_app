module.exports = {
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    'src/pages/_app.page.tsx',
    'src/pages/index.page.tsx',
    'src/pages/_document.page.tsx',
    'src/ui/theme/',
    'src/ui/components/index.tsx',
    'src/ui/globalStyles/',
    'src/ui/providers/',
    'src/ui/assets/',
    'src/tests/providers/',
    'src/@types/',
    'src/testHelpers/',
    'stories.tsx',
    'types.ts'
  ],
  fakeTimers: {
    enableGlobally: true
  },
  globalSetup: '<rootDir>/.jest/timezoneMock.ts',
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  moduleNameMapper: {
    '^.+\\.css$': '<rootDir>/src/testHelpers/mocks/style.ts',
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
