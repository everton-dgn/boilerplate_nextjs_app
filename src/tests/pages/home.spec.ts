import { expect, test } from '@playwright/test'

test.describe('navigation', () => {
  test.beforeEach(async ({ page }) => await page.goto('/'))

  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle(/Home Page/)
  })

  test('has header', async ({ page }) => {
    const header = page.locator('header')
    await expect(header).toHaveText('Boilerplate')
  })

  test('must interact with the CounterButton', async ({ page }) => {
    await page.click('button[aria-label="COUNT: 0"]')

    const buttonText = await page.innerText('button[aria-label="COUNT: 1"]')
    expect(buttonText).toBe('COUNT: 1')

    await page.getByRole('button', { name: 'COUNT: 1' }).click()

    const buttonText2 = page.getByRole('button', { name: 'COUNT: 2' })
    await expect(buttonText2).toBeVisible()
  })
})
