import { test, expect } from '@playwright/test';

test('Right Click', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/context_menu');

    page.once('dialog', async dialog => {

        expect(dialog.message())
            .toContain('You selected a context menu');

        await dialog.accept();

    });

    await page.locator('#hot-spot')
        .click({ button: 'right' });

});