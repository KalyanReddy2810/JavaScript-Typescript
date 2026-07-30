import test from "@playwright/test";

test('dismiss optional modal', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
await page.locator('#hide-textbox').click();
  const inputField = page.locator('#displayed-text');
  try {
       await page.pause();
    await inputField.fill('Kalyan');
  } catch {
    console.log('Input field not found — skipping');
    await page.locator('#show-textbox').click();
    await page.pause();
    await inputField.fill('Kalyankumar');

  }

});