import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv'

dotenv.config({ path: '.env.test' })

export default defineConfig({
  testDir: './src/tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  testMatch: '**/*.spec.ts',
  use: {
    // bypassCSP: true,
    // headless: false,
    // launchOptions: {
    //   slowMo: 600,
    // },
    // video: 'on',
    // screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    baseURL: process.env.BASE_URL_TEST
  },
  projects: [
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // },
    // {
    //   name: 'Edge',
    //   use: { ...devices['Desktop Edge'] },
    // }
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 7'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 14'] },
    // },
    // {
    //   name: 'Mobile Firefox',
    //   use: { ...devices['Pixel 7'], browserName: 'firefox' },
    // }
  ],
  webServer: {
    command: 'pnpm dev',
    url: process.env.BASE_URL_TEST,
    reuseExistingServer: !process.env.CI,
  }
});
