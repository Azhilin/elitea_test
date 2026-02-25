import { test, expect } from '@playwright/test';

// Test: EPAM Services -> Explore Our Client Work -> Verify Client Work text
test('EPAM Services explore client work', async ({ page }) => {
  // 1. Navigate to https://www.epam.com/
  await page.goto('https://www.epam.com/');
  await page.waitForLoadState('load');

  // 2. Select "Services" from the header menu
  // Use role=link with name 'Services' to find the header menu item
  await page.getByRole('link', { name: 'Services' }).click();
  await page.waitForLoadState('load');

  // 3. Click the "Explore Our Client Work" link.
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();
  await page.waitForLoadState('load');

  // 4. Verify that the "Client Work" text is visible on the page.
  const clientWork = page.getByText('Client Work');
  await expect(clientWork).toBeVisible();
});
