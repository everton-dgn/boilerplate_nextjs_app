import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    deps: {
      optimizer: {
        web: {
          enabled: true
        }
      }
    },
    coverage: {
      provider: 'v8'
    },
    environment: 'happy-dom',
    globals: true,
    passWithNoTests: true,
    setupFiles: ['./vitest.setup.ts'],
    testTransformMode: { web: ["/\.tsx?$/"] },
    include: ['src/**/__tests__/**/*.{ts,tsx}']
  }
})
