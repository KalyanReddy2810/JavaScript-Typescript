import { test, expect } from '@playwright/test';

//Scenario 1: Extract text/attributes from all matching locators → map + Promise.all

test(' Extract button texts', async ({ page }) => {
  await page.goto("https://demoqa.com/buttons");

    const buttons = await page.locator('button').all();
    console.log(`Total buttons found: ${buttons.length}`);

    // map + Promise.all to extract text from all buttons parallelly
    const buttonTexts = await Promise.all(
        buttons.map( (button) =>  button.textContent())
    );

    console.log("Button Texts:", buttonTexts);   
    //output: Button Texts: [ '', 'Double Click Me', 'Right Click Me', 'Click Me' ]
    
})