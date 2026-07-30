// FILE: tests/get-by-role.spec.ts
// SITE: https://practicetestautomation.com/practice-test-login/
import { test, expect } from '@playwright/test';

test('login using getByRole locators', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // getByRole('textbox') finds <input type="text">
  // {name:'Username'} narrows to the textbox with accessible name "Username"
  // The accessible name usually comes from its <label> element
  await page.getByRole('textbox', { name: 'Username' }).fill('student');

  // Password input — name comes from its label "Password"
  await page.getByRole('textbox', { name: 'Password' }).fill('Password123');

  // getByRole('button') finds <button>
  // {name:'Submit'} narrows to the button whose text says "Submit"
  await page.getByRole('button', { name: 'Submit' }).click();

  // Assert h1 heading — role 'heading' with level 1
  await expect(
    page.getByRole('heading', { name: 'Logged In Successfully' })
  ).toBeVisible();

  // getByRole('link') for <a> tags
  await expect(
    page.getByRole('link', { name: 'Log out' })
  ).toBeVisible();
});

test('getByRole options — exact, level, checked', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  // exact:true → name must match exactly (case sensitive, full string)
  // exact:false (default) → partial, case-insensitive match
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Buy milk');
  await page.keyboard.press('Enter');

  // heading with specific level — h2 only
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

  // checkbox — checked:false means find unchecked checkboxes
  const uncheckedTodos = page.getByRole('checkbox', { checked: false });
  console.log(`Unchecked count: ${await uncheckedTodos.count()}`);
});

test('getByRole options examples', async ({ page }) => {
 await page.goto('https://shop.qaautomationlabs.com/');
 await page.getByRole('textbox',{name: 'Email'}).fill('demo@demo.com');
 await page.getByRole('textbox',{name: 'Password'}).fill('demo');
 await page.getByRole('button',{name: 'Login'}).click();
  expect(page.url()).toContain('shop');
})