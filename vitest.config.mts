import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    coverage: {
      provider: 'v8'
    },
    environment: 'happy-dom',
    globals: true,
    passWithNoTests: true,
    setupFiles: ['./vitest.setup.ts'],
    root: './src',
    exclude: [
      'types.ts',
      'testHelpers/**/*',
      'src/**/global-error.tsx',
      'src/**/not-found.tsx',
      'src/**/layout.tsx',
      'src/**/loading.tsx',
      'src/**/types.ts',
      'theme'
    ]
  }
})
