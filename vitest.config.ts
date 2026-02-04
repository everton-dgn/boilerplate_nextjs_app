import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vitest/config'

import react from '@vitejs/plugin-react-swc'

const alias = {
  '@': fileURLToPath(new URL('./src', import.meta.url))
}

const shared = {
  pool: 'threads' as const,
  css: false,
  experimental: { fsModuleCache: true },
  globals: true,
  passWithNoTests: true,
  clearMocks: true,
  exclude: ['**/node_modules/**', '**/playwright/**']
}

export default defineConfig({
  resolve: { alias },
  plugins: [react()],
  test: {
    ...shared,
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
    projects: [
      {
        resolve: { alias },
        test: {
          ...shared,
          name: 'node',
          environment: 'node',
          include: ['src/**/test.ts']
        }
      },
      {
        plugins: [react()],
        resolve: {
          alias,
          conditions: ['development', 'browser']
        },
        test: {
          ...shared,
          name: 'dom',
          environment: 'happy-dom',
          deps: {
            optimizer: {
              client: { enabled: true }
            }
          },
          setupFiles: ['./vitest.setup.ts'],
          include: ['src/**/test.tsx']
        }
      }
    ]
  }
})
