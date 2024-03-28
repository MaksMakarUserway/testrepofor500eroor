import { test, expect } from '@playwright/test';

test('should have the right text in the headline', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('.slider-area')).toContainText(/property Searching Just Got So Easy/);
});
