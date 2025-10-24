import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    deps: {
      optimizer: {
        client: {
          enabled: true
        }
      }
    },
    coverage: {
      provider: 'v8',
      include: ['**/src/**/*.ts', '**/src/**/*.tsx'],
      exclude: [
        '**/tests/**',
        '**/theme/**',
        '**/src/app/error.tsx',
        '**/src/app/not-found.tsx',
        '**/src/app/global-error.tsx',
        '**/src/**/layout.tsx',
        '**/src/**/page.tsx',
        '**/src/**/loading.tsx',
        '**/src/**/types.ts',
        '**/src/@types/**',
      ]
    },
    environment: 'jsdom',
    globals: true,
    passWithNoTests: true,
    setupFiles: ['./vitest.setup.ts'],
    include: ['src/**/test.{ts,tsx}'],
    exclude: ['**/node_modules/**', '**/playwright/**']
  },
  resolve: {
    conditions: ['development', 'browser']
  }
})
