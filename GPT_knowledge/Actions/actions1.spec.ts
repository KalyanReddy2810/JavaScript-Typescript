import {test} from '@playwright/test';

test('Actions - click , dbclick, right click', async ({ page }) => {

      await page.goto('https://demo.playwright.dev/todomvc');
      await page.getByPlaceholder('What needs to be done?').click();
      await page.getByPlaceholder('What needs to be done?').fill('Buy milk');
     await page.keyboard.press('Enter');
      await page.getByPlaceholder('What needs to be done?').fill('Buy teapowder');
       await page.keyboard.press('Enter');
      await page.getByPlaceholder('What needs to be done?').fill('Buy suger');
      await page.keyboard.press('Enter');


       const todoItems = await page.getByTestId('todo-title').all();


       for(const item of todoItems){
        if(await item.textContent() === 'Buy milk'){
            await item.dblclick(); // double click to edit mode
            const editInput = item.locator("xpath=ancestor::li//input[@class='edit']");
            await editInput.waitFor();
            await editInput.fill('Buy milk and bread');
            await editInput.press('Enter');
        }
    }


           console.log(`Total todo items: ${todoItems.length}`);


    

  


})