import { test, expect } from '@playwright/test';

test('fail fast on bad status', async ({ page }) => {
  await page
    .goto('https://www.myntra.com/shop/men')
    .then(response => {
      if (!response?.ok()) {
        throw new Error(
          `Page load failed: HTTP ${response?.status()}`
        );
        // All .then() below are SKIPPED
        // Jumps straight to .catch()
      }
    })
    .then(() => page.fill('#search', 'playwright'))
    .then(() => page.click('button#go'))
    .catch(err => {
      // Test fails with descriptive message
      throw err; // re-throw to fail the test
    });
});