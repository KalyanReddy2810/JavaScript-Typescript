import test from "@playwright/test";

test('dismiss optional modal', async ({ page }) => {
  await page.goto('https://galabingo.com');
  // Try to close a cookie banner that may not exist
  await page.locator('#onetrust-accept-btn-handler').click({ timeout: 3000 })
   .catch(() => {
      // Playwright throws if timeout expires
      // We catch it, return nothing → chain resumes
      console.log('No cookie banner accept button— skipping');
    });

await page.locator('#onetrust-reject-all-handler').click({ timeout: 3000 })
   .catch(() => {
      // Playwright throws if timeout expires
      // We catch it, return nothing → chain resumes
      console.log('No cookie banner rejected button — skipping');
    });

    
  // This always runs, banner available or not
  await page.locator("data-testid=signin").click();
  
});
