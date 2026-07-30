import {test,expect } from '@playwright/test';

test('verifying Promise.all', async ({ page }) =>{
    await page.goto('https://www.amazon.in/');
    await Promise.all([
        page.getByRole('link', { name: 'Fashion' ,exact: true}).click(),
      //  page.locator('[data-csa-c-content-id="nav_cs_fashion"]').click(),
        page.locator("img[alt='Amazon Fashion']").isVisible()
    ])

   //await page.getByRole('link', { name: 'Fashion', exact: true }).click(); await expect(page.locator('h1')).toHaveText('Buy Again');
})


test('login and verify navigation', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.fill('#username', 'student');
  await page.fill('#password', 'Password123');

  // WHY Promise.all here:
  // waitForURL registers a navigation listener.
  // click() triggers the navigation.
  // If you await click first, navigation might finish BEFORE
  // waitForURL starts listening → it misses the event → timeout.
  // With Promise.all, both start at the same time.
  // waitForURL is first in array — listener is ready before click fires.
  await Promise.all([
    page.waitForURL('**/logged-in-successfully/**'), // listener first
    page.click('#submit'),                          // trigger second
  ]);

  await expect(page.locator('h1')).toHaveText('Logged In Successfully');
});