  import { test, expect, Page, Locator } from '@playwright/test';
  
  test('End to End Testing', async ({ page }) => {

   // Locator Factory
   function createLocator(page: Page) {

      return function(selector: string): Locator {

         return page.locator(selector);

      }
   }
   const getLocator = createLocator(page);
   
   const email = getLocator("[type='email']");
   const password = getLocator("#userPassword");
   const submitbutton = getLocator("[type='submit']");



   type FormElement = {
      locator: Locator;
      action: 'fill' | 'click';
      value?: string;
   }

   async function performActions(
      ...elements: FormElement[]
   ) {

      for (const element of elements) {

         await expect(element.locator).toBeVisible();

         switch (element.action) {

            case 'fill':

               await element.locator.fill(element.value || "");

               console.log(`Filled successfully`);

               break;

            case 'click':

               await element.locator.click();

               console.log(`Clicked successfully`);

               break;
         }
      }
   }

   const emailid = "kalyank@gmail.com";
   const passwordd = "Test@1234";

   await page.goto("https://rahulshettyacademy.com/client/");

   await performActions(

      {
         locator: email,
         action: 'fill',
         value: emailid
      },

      {
         locator: password,
         action: 'fill',
         value: passwordd
      },

      {
         locator: submitbutton,
         action: 'click'
      }
   );

});