async function validateElements(page, ...locators) {

    for(const locator of locators) {

        await page.locator(locator).waitFor();

        console.log(`${locator} visible`);

    }

}
await validateElements(
    page,
    '#username',
    '#password',
    '#loginBtn'
);