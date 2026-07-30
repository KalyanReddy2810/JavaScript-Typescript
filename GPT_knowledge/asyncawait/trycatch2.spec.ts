import { test, expect } from '@playwright/test';


test('robust test with proper error handling1', async ({ page }) =>{
try {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.fill('#username', 'student');
    await page.fill('#password', 'Password123');
    await page.click('#submit');
    await expect(page.locator('.post-title')).toHaveText(`Logged In Successfully user${'username'}`);


} catch (error) {
    ///console.error('Test failed:', error.message); // 'error' is of type 'unknown'.ts(18046) 
console.log('Test failed:', (error as Error).message); // Type assertion to 'Error' type

console.log('Test failed:', (error as Error).name); // Type assertion to 'Error' type

console.log('Test failed:', (error as Error).cause); // Type assertion to 'Error' type
console.log('Test failed:', (error as Error).stack); // Type assertion to 'Error' type

}
})



test('robust test with proper error handling2', async ({ page }) => {
    try {
      await page.goto('https://practicetestautomation.com/practice-test-login/');
      await page.fill('#username', 'student');
      await page.fill('#password', 'Password123');
      await page.click('#submit');
      await expect(page.locator('.post-title')).toHaveText(`Logged In Successfully user${'username'}`);
    } catch (error) {
      //instead of type assertion, you can also use a type guard to check if the error is an instance of Error
if (error instanceof Error) {
    console.error('Error message:', error.message);
    console.error('Error name:', error.name);
    console.error('Stack trace:', error.stack);
        console.error('Stack trace:', error.cause);
}     
        else {
    console.error('Unknown error type:', error);
    throw error;

  }  
}   
})

