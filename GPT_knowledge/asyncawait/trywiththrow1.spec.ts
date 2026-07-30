import { test, expect } from '@playwright/test';


test('robust test with proper error handling1', async ({ page }) =>{
try {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.fill('#username', 'student');
    await page.fill('#password', 'Password123');
    await page.click('#submit');
    await expect(page.locator('.post-title')).toHaveText(`Logged In Successfully user${'username'}`);
  
} catch (error) {

    console.log('errror:',error)
    throw error; // Re-throw the error to ensure the test is marked as failed   
}
})