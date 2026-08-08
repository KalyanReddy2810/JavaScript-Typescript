import { test, expect } from '@playwright/test';

test('Double Click', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Double click button

    await page.locator('button:has-text("Copy Text")').dblclick();

    await expect(page.locator('#field2'))
        .toHaveValue('Hello World!');

});