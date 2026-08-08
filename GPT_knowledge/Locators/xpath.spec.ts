import { test, expect } from '@playwright/test';

test('xpath locators', async ({ page }) => {

await page.goto('https://www.myntra.com/');

await Promise.all([
     page.locator('//a[text()="Men"]').filter().click(),
 page.locator('//a[text()="Men"]/ancestor::li').click()
])




})