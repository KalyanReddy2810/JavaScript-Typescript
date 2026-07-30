import { test, expect } from '@playwright/test';

test('robust test with proper error handling', async ({ page }) => {
  try {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.fill('#username', 'student');
    await page.fill('#password', 'Password123');
    await page.click('#submitt');
    //await expect(page.locator('h1')).toHaveText('Logged In Successfully');

  } catch (err) {
    // Playwright throws specific error types — check with instanceof
    const e = err as Error;
    if (e.message.includes('timeout')) {
      console.error(`Timed out: ${e.message}`);
      // Take screenshot on timeout for debugging
      await page.screenshot({ path: 'timeout-failure.png' });
    }
    
    throw err; // ← re-throw so the test is still marked as FAILED
               // Without this, catch swallows the error → test passes incorrectly

  } finally {
    // This always runs — even if test throws above
    // Perfect for cleanup that must happen regardless
    console.log(`[finally] Test ended. Page URL: ${page.url()}`);
  }
});