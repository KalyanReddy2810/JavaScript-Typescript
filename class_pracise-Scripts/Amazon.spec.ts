import { test, expect } from '@playwright/test';

test('Amazon Search Test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('button', { name: 'Continue shopping' }).click();
  await page.waitForSelector('#nav-xshop');
  const links = await page.locator('.nav-li a').all();
  await page.waitForTimeout(10000); // Wait for 2 seconds to ensure all links are loaded
  console.log(`Total links found: ${links.length}`);
    const linkTexts = await Promise.all( 
        links.map(link => {
            return link.textContent();
        })
    );
    console.log(linkTexts);


    const results = await Promise.all(
        links.map(
            async(link):Promise<{text: string |null; href:string |null}> => ({
                text : await link.textContent(),
                href : await link.getAttribute('href')

            }) 

        )
    )
    console.log(results)
})
