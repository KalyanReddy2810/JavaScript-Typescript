import {test, expect}  from '@playwright/test';

test('File download', async ({ page }) => {

    await page.goto('https://demoqa.com/upload-download');   


    //download a file
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', {name: 'Download'}).click()
    ]); 

    //wait for the download to complete
    const path = await download.path();
    console.log('Downloaded file path:', path); 

})


test('File Upload1', async ({ page }) => {

    await page.goto('https://qa-automation-practice.netlify.app/file-upload.html');

    //upload file
    const filePath = "C:\\Users\\Kalyan Sushmitha\\Downloads\\sampleFile.jpeg"; // Replace with the actual path to your file
    await page.locator('input[type="file"]').setInputFiles(filePath);
    await page.getByRole('button', {name: 'Submit'}).click();   
  

})
test.only('File Upload2', async ({ page }) => {

    await page.goto('https://qa-automation-practice.netlify.app/file-upload.html');
    //2nd Way to upload file
    const filePath = "C:\\Users\\Kalyan Sushmitha\\Downloads\\sampleFile.jpeg"; // Replace with the actual path to your file
    const fileName:any = filePath.split(/[\\/]/).pop(); // Extract the file name from the path

    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.locator('input[type="file"]').click(); // trigger the file chooser dialog
    const fileChooser = await fileChooserPromise;                  // get the dialog object
    await fileChooser.setFiles(filePath);
    // Submit and verify
    await page.getByRole('button', {name: 'Submit'}).click();   

    // Verify success text and that the response includes the filename
   // await expect(page.locator("#file_upload_response")).toContainText('you have successfully uploaded', {timeout: 10000});
    await expect(page.locator("#file_upload_response")).toContainText(fileName);


    })