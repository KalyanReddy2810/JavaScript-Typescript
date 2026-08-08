import {test, expect} from '@playwright/test'
test('dropdown — selectOption all patterns', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/dropdown');

 // await page.locator('#dropdown1').waitFor({state: 'visible', timeout: 10000});

 //scroll down to the dropdown element
  await page.locator('#dropdown').scrollIntoViewIfNeeded();
  await page.locator('#dropdown').click();

  await page.locator('#dropdown').selectOption({label : 'Option 2'});
  await expect(page.locator('#dropdown')).toHaveValue('2')

//selected by the attribute value
  await page.locator('#elementsPerPageSelect').selectOption({value : '20'});

  await expect(page.locator('#elementsPerPageSelect')).toHaveValue('20')

  await page.locator('#country').selectOption({label: 'India'});

  await expect(page.locator('#country')).toHaveValue('IN')

  
})