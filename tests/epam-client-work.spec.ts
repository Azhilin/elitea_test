import { test, expect } from '@playwright/test';

test('EPAM - Client Work exploration', async ({ page }) => {
  // Navigate to EPAM homepage
  await page.goto('https://www.epam.com/');
  await page.waitForLoadState('networkidle');

  // Select "Services" from the header menu
  const services = page.locator('text=Services');
  await services.first().click();

  // Click the "Explore Our Client Work" link
  const exploreLink = page.locator('text=Explore Our Client Work');
  await expect(exploreLink).toBeVisible({ timeout: 5000 });
  await exploreLink.click();

  // Verify that the "Client Work" text is visible on the page
  const clientWorkHeading = page.locator('text=Client Work');
  await expect(clientWorkHeading).toBeVisible({ timeout: 10000 });
});
