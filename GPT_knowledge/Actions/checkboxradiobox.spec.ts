import{test,expect} from '@playwright/test'

test('checkbox and radio box' , async({page})=>{

    await page.goto('https://testing.qaautomationlabs.com/checkbox.php');
     
    //isChecked() method returns a boolean value indicating whether the checkbox is checked or not. It returns true if the checkbox is checked, and false if it is not checked.
    const status = await page.getByTestId('checkbox-single').isChecked();

    if(status){
        await page.getByTestId('checkbox-single').uncheck();

    }else{
        await page.getByTestId('checkbox-single').check();
        const message = await page.getByTestId('checkbox-message').textContent();
        console.log(`Checked box confirmation message: ${message}`);
    }


    // Verify that the element is already disabled
    const disabledCheckbox =  page.locator('#chk3');
    await expect(disabledCheckbox).toBeDisabled({timeout: 10000});

})


test('checkboxes and radio buttons', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  // Add items
  const input = page.getByPlaceholder('What needs to be done?');
  await input.fill('Buy milk'); await page.keyboard.press('Enter');
  await input.fill('Write tests'); await page.keyboard.press('Enter');

  // ── check(): tick the checkbox ────────────────────────────────
  // Waits for element, verifies it's a checkbox, clicks if unchecked.
  // If already checked → does nothing (idempotent — safe to call twice)
  await page.locator('.todo-list li').first().getByRole('checkbox').check();

  // ── isChecked(): verify state ─────────────────────────────────
  // Returns Promise<boolean> — await to get the value
  const checked = await page.locator('.todo-list li').first()
    .getByRole('checkbox').isChecked();
  expect(checked).toBe(true);

  // ── Asserting checked state with expect (auto-retries) ────────
  await expect(
    page.locator('.todo-list li').first().getByRole('checkbox')
  ).toBeChecked();

  // ── uncheck(): untick the checkbox ───────────────────────────
  // If already unchecked → does nothing
  await page.locator('.todo-list li').first().getByRole('checkbox').uncheck();
  await expect(
    page.locator('.todo-list li').first().getByRole('checkbox')
  ).not.toBeChecked();
});

test('radio buttons', async ({ page }) => {
  // Radio buttons use check() too — same API
  // getByRole('radio') finds radio inputs
  await page.goto('https://practice.expandtesting.com/checkboxes');

  // getByLabel finds the radio by its associated label text
  const checkboxes = page.getByRole('checkbox');
  const count = await checkboxes.count(); // Promise<number>
  console.log(`Found ${count} checkboxes`);

  // Check all checkboxes using a loop
  for (let i = 0; i < count; i++) {
    await checkboxes.nth(i).check();
  }

  // Verify all checked — allChecked() on the locator
  for (let i = 0; i < count; i++) {
    await expect(checkboxes.nth(i)).toBeChecked();
  }
});