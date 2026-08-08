import { test } from '@playwright/test';

test('Ctrl Click', async ({ browser, page }) => {

    await page.goto('https://playwright.dev');

    await page.getByRole('link', { name: 'Docs' })
        .click({

            modifiers: ['Control']

        });


        await page.waitForTimeout(2000);

      //capture all tabs titles and urls
      const pages = browser.contexts().flatMap(context => context.pages());
      const tabs = await Promise.all(pages.map(async page => {
        const title = await page.title();
        const url = page.url();
        return { title, url };
      }));

      console.log('All tabs:', tabs);

});