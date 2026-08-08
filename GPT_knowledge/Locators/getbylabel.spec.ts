// FILE: tests/get-by-label.spec.ts
// SITE: https://www.w3schools.com/html/html_form_elements.asp
// We use a real site with proper form labels
import { test, expect } from '@playwright/test';

test('fill form using getByLabel', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/login');

  // getByLabel('Username') — finds the input whose label says "Username"
  // Works regardless of what id="" the developer assigned to the input
  // If developer renames id="user" to id="login-user", this still works
  await page.getByLabel('Username').fill('practice');

  // getByLabel is case-insensitive by default
  // 'Password' finds label "Password" or "password" or "PASSWORD"
  await page.getByLabel('Password').fill('SuperSecretPassword!');

  await page.getByRole('button', { name: 'Login' }).click();
 // await expect(page.getByRole('alert', { name: 'You logged into a secure area!' })).toBeVisible({timeout: 10000});

await expect(page.locator('text=You logged into a secure area!')).toBeVisible({timeout: 10000});
});

test('getByLabel exact match option', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/login');

  // exact: true — must match label text EXACTLY (case-sensitive, full string)
  // exact: false (default) — partial, case-insensitive
  await page.getByLabel('Username', { exact: true }).fill('practice');

  // Checking that a field IS associated with a label — isVisible returns Promise<boolean>
  const visible = await page.getByLabel('Password').isVisible();
  console.log(`Password field visible: ${visible}`); // true
});