const {test, expect} = require('@playwright/test');




test('Client App login', async ({page})=>
{
   //js file- Login js, DashboardPage
    const email = "rahulshetty@gmail.com";
    const productName = 'Zara Coat 4';
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").type("Iamking@000");
    await page.locator("[value='Login']").click();
    
    //wait until all the calls are made
    await page.waitForLoadState('networkidle'); //WAIT METHOD FOR SERVICE-ORIENTED APPS 
   const titles= await page.locator(".card-body b").allTextContents();
   console.log(titles);
//    const count = await products.count();
//    for(let i =0; i < count; ++i)
//    {
//    if(await products.nth(i).locator("b").textContent() === productName)
//    {
//        //add to cart
//        await products.nth(i).locator("text= Add To Cart").click();
//        break;
//     }
//    }
});