const {test, expect} = require('@playwright/test');

test("Popup validations", async ({page}) =>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();

    // invoke pop-up dialog
    // java-related pop-up - listen to js events, click "Cancel" option
    // page.on('dialog', dialog => dialog.dismiss()); //listener is implemented BEFORE the click 
    // await page.locator("#confirmbtn").click();
    // await page.pause();

    //invoke pop-up dialog
    //java-related pop-up - listen to js events, click "Confirm" option
    page.on('dialog', dialog => dialog.accept());
    await page.locator("#confirmbtn").click(); //listener is implemented BEFORE the click
    //await page.pause();
  

});