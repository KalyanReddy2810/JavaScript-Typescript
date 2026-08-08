import { test, expect } from '@playwright/test';

test('Hover -- image', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/hovers');

    const image = page.locator('.figure').first();

    await image.hover();

    await expect(page.getByText('name: user1'))
        .toBeVisible();

});



test('hover - input field', async ({ page }) => {

    await page.goto('https://jqueryui.com/tooltip/');

    const frame = page.frameLocator('.demo-frame');

    await frame.locator('#age').hover();

    await expect(page.getByText('We ask for your age only for statistical purposes.'))

});



test('Tooltip verification', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/tooltips');

    await page.locator('#btn1').hover();

    //await expect(page.locator('.tooltip')).toBeVisible();

    await expect(page.locator('#btn1')).toHaveAttribute('aria-describedby', /tooltip/);

});


test('Hover on dropdown', async ({page}) => {
 await page.goto('https://www.lambdatest.com/selenium-playground/');
 await page.getByRole('link', {name: 'AI Agents'}).first().hover();

 await page.locator('.chfw-agents-section').isVisible();
 await page.getByText('Test Authoring Agent').click();
})