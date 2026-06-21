# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: promisechaining_playwright1.spec.ts >> fail fast on bad status
- Location: promisechaining_playwright1.spec.ts:3:5

# Error details

```
Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.myntra.com/shop/men
Call log:
  - navigating to "https://www.myntra.com/shop/men", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('fail fast on bad status', async ({ page }) => {
  4  |   await page
> 5  |     .goto('https://www.myntra.com/shop/men')
     |      ^ Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.myntra.com/shop/men
  6  |     .then(response => {
  7  |       if (!response?.ok()) {
  8  |         throw new Error(
  9  |           `Page load failed: HTTP ${response?.status()}`
  10 |         );
  11 |         // All .then() below are SKIPPED
  12 |         // Jumps straight to .catch()
  13 |       }
  14 |     })
  15 |     .then(() => page.fill('#search', 'playwright'))
  16 |     .then(() => page.click('button#go'))
  17 |     .catch(err => {
  18 |       // Test fails with descriptive message
  19 |       throw err; // re-throw to fail the test
  20 |     });
  21 | });
```