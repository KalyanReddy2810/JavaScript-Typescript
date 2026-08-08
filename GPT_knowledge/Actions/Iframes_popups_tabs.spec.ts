import {test, expect}  from '@playwright/test';

test('New Tab Handling', async ({ page }) => {

    await page.goto('https://demo.automationtesting.in/Windows.html');
    await page.getByRole('link', {name: 'Open New Seperate Windows'}).click();

     const [newTab] = await Promise.all([
    page.waitForEvent('popup'),        // register listener FIRST
   // page.getByRole('link', { name: 'Click Here' }).click(), // trigger
     page.getByRole('button', {name: 'click'}).click()

     ])

       await newTab.waitForLoadState('load'); // Promise<void>
      console.log(`New tab URL: ${newTab.url()}`); // sync
     // await expect(newTab.title()).toBe('Selenium logo green'); // sync

      // move timeout to the expect assertion; getByTitle does not accept timeout option
      await expect(newTab.locator('h1')).toHaveText("Selenium automates browsers. That's it!", { timeout: 5000 }); // Promise<void>
      await newTab.close(); // Promise<void>

})

test('iframe  Handling', async ({ page }) => {

    await page.goto('https://practice-automation.com/iframes/');

    const frame = page.frameLocator('#iframe-1');
   
    await frame.getByRole('link',{name:'Docs'}).click();
    await expect(frame.locator('h1')).toHaveText('Installation', { timeout: 10000 });    

})


test('Alert pop up handling', async({page})=> {

await page.goto('https://practice-automation.com/popups/');
await page.locator('#alert').click();
page.on('dialog',async dialog => {
    await dialog.accept();
})
})


test.only('prompt pop up handling', async({page})=> {

await page.goto('https://practice-automation.com/popups/');
await page.locator('#prompt').click();
page.on('dialog',async dialog => {
    await dialog.accept("kalyan kumar reddy");
   
})
})