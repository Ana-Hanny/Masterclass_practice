import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://i-calc-masterclass1.s3-website.eu-north-1.amazonaws.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Practice change/);
});
