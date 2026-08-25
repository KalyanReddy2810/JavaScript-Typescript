// FILE: tests/visibility-assertions.spec.ts
import { test, expect } from '@playwright/test';

test('visibility assertions — all patterns', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  // ── toBeVisible ────────────────────────────────────────────────
  // The input field should be visible when page loads
  // Internally: retries every 100ms for up to 5s (default timeout)
  // Promise resolves when: element found + visible
  // Promise rejects when: 5s passes without becoming visible → test FAILS
  await expect(
    page.getByPlaceholder('What needs to be done?')
  ).toBeVisible();

  // ── toBeHidden — element not visible ──────────────────────────
  // The todo list footer is hidden when there are no todos
  // Retries until hidden OR timeout
  await expect(page.locator('.footer')).toBeHidden();

  // Add a todo — then footer becomes visible
  await page.getByPlaceholder('What needs to be done?').fill('Buy milk');
  await page.keyboard.press('Enter');

  // ── After adding a todo: footer should appear ─────────────────
  // This auto-waits — if footer takes 1s to animate in, it still passes
  await expect(page.locator('.footer')).toBeVisible();

  // ── toBeAttached — exists in DOM, even if CSS hides it ────────
  // The todo-list exists but might be empty (CSS: display:none on empty)
  // toBeAttached passes even if the element is not visible
  await expect(page.locator('.todo-list')).toBeAttached();

  // ── Practical: check error message appears after bad action ───
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.fill('#username', 'student');
  await page.fill('#password', 'wrongpass');
  await page.click('#submit');

  // Error should appear — toBeVisible auto-waits for it
  await expect(page.locator('#error')).toBeVisible();

  // Success page elements should NOT be visible
  await expect(
    page.getByRole('link', { name: 'Log out' })
  ).toBeHidden();
});