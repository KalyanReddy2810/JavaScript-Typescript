import { test, expect } from '@playwright/test';

test('plain value chaining', async ({ page }) => {
  const finalText = await page.goto('https://flipkart.com')
    .then(() => page.title())
    // .title() resolves to a string
    .then(title => title.toUpperCase())
    // plain string returned → wraps in
    // Promise.resolve("EXAMPLE DOMAIN")
    .then(upper => `Page: ${upper}`);
    // another plain string transform

  console.log(finalText);
  // "Page: EXAMPLE DOMAIN"
  expect(finalText).toContain('Page:');
});