import { test, expect } from '@playwright/test';

//Scenario 2: Get only visible/enabled/matching elements → async filter (flags pattern)

test("Get only enabled buttons", async ({ page }) => {
    await page.goto("https://practice-automation.com/");

    const buttons = await page.locator('button').all();

    // Step 1: map → create flags (true/false) for each button
    const enabledFlags = await Promise.all(
        buttons.map(button =>  button.isEnabled())
    );

    // Step 2: filter → keep only enabled buttons using flags
    const enabledButtons = buttons.filter((button, index) => enabledFlags[index]);

    console.log("Enabled Button Count:", enabledButtons.length);

    const ButtonNames = await Promise.all(
        enabledButtons.map(button => (button.innerText()))
    );
    console.log("Enabled Buttons Names:", ButtonNames);
});