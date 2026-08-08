import { test } from '@playwright/test';
test('fill, pressSequentially, clear', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/login');

    //using fill to enter username and password
    await page.locator('#username').fill('practice');
    const passwordInput = page.locator('#password');
    await passwordInput.fill('SuperSecretPassword');
    // claer the password 
    await passwordInput.clear();
    await page.pause();
    // enter the password again using pressSequentially with a delay of 50ms between each key press
   await passwordInput.pressSequentially('SuperSecretPassword!',{delay: 50});

})