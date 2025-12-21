import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vitest/config'

import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    conditions: ['development', 'browser']
  },
  plugins: [react()],
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
        '**/src/@types/**'
      ]
    },
    environment: 'jsdom',
    globals: true,
    passWithNoTests: true,
    clearMocks: true,
    setupFiles: ['./vitest.setup.ts'],
    include: ['src/**/test.{ts,tsx}'],
    exclude: ['**/node_modules/**', '**/playwright/**']
  }
})
