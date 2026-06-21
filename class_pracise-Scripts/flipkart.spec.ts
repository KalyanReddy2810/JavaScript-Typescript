import { test, expect } from '@playwright/test';

test('Flipkart Search Test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');

  // Close the login popup if it appears
  const closePopup = page.locator('.q7ywiQ .b3wTlE');
  if (await closePopup.count()) {
    await closePopup.click();
  }

  await expect(page).toHaveURL(/flipkart\.com/);

  await page.fill('input[name="q"]', 'mobiles');
  await page.press('input[name="q"]', 'Enter');

  const products = page.locator('.lvJbLV.col-12-12');
  await page.waitForSelector('.lvJbLV.col-12-12');
  await products.first().waitFor();

  const matches: Array<{ title: string; price: string }> = [];

  async function captureMotorolaSignaturePrices() {
    const count = await products.count();
    console.log(`Products on current page: ${count}`);

    for (let index = 0; index < count; index++) {
      const item = products.nth(index);
      const titleLocator = item.locator('.ZFwe0M.row .RG5Slk').first();
      const title = (await titleLocator.textContent({ timeout: 500 }).catch(() => ''))?.trim() ?? '';

      if (title.includes('MOTOROLA Signature')) {
        const price = (await item.locator('._30jeq3._1_WHN1').first().textContent({ timeout: 500 }).catch(() => 'Price not found'))?.trim() ?? 'Price not found';
        matches.push({ title, price });
        console.log(`Matched: ${title} -> ${price}`);
      }
    }
  }

  await captureMotorolaSignaturePrices();

  async function waitForProductsToStabilize(previousCount: number) {
    await page.waitForSelector('.lvJbLV.col-12-12');
    await page.waitForFunction(
      async ({ selector, previousCount }) => {
        const elements = document.querySelectorAll(selector);
        return elements.length > 0 && elements.length !== previousCount;
      },
      { selector: '.lvJbLV.col-12-12', previousCount },
      { timeout: 10000 }
    ).catch(() => null);
    await products.first().waitFor();
  }

  const next = page.locator('.iu0OAI .jgg0SZ', { hasText: 'Next' });

  while (await next.isVisible()) {
    const previousCount = await products.count();

    await Promise.all([
      next.click(),
      page.waitForLoadState('networkidle'),
    ]);

    await waitForProductsToStabilize(previousCount);
    await captureMotorolaSignaturePrices();
  }

  if (matches.length === 0) {
    console.log('No MOTOROLA Signature products found across pagination pages.');
  }
   
    

   

 
   
}); 