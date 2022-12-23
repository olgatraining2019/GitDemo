const {test, expect} = require ('@playwright/test');


test('Browser Playwright test', async({browser}) => 
{
    //chrome instance - can inject plugins, cookies - through "options" parameter
    const context = await browser.newContext(); //can inject plugins, cookies - through "options" parameter
    const page = await context.newPage();
    const userName = page.locator("#username");
    const signIn = page.locator('#signInBtn');
    const cardTitles = page.locator(".card-body a");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    //await expect(page).toHaveTitle();
    //css, xpath
    //userName const, incorrect input and error message
    // await userName.type("rahulshetty");
    // await page.locator("[type='password']").type("learning");
    // await signIn.click();
    // console.log (await page.locator("[style*='block']").textContent()); // error message with changing tyoe, block shows only when it shows on eth screen
    // await expect(page.locator("[style*='block']")).toContainText("Incorrect");

    //correcting the input (erase + type in) - "fill" method 
    await userName.fill(""); //clears up
    await userName.fill("rahulshettyacademy"); // can use "type" method as well
    await page.locator("[type='password']").type("learning");
   
   //WAIT METHOD FOR NON-SERVICE-ORIENTED APPS 
   await Promise.all(
    [
        page.waitForNavigation(), //target is written before click action 
            signIn.click(),

    ]

   );
   

    
    //console.log(await cardTitles.first().textContent()); //1st element of multiple, wait is implemented: tool is waiting until it is found (attached to the DOM) 
    //console.log(await cardTitles.nth(0).textContent()); //1st element of multiple
    //console.log(await cardTitles.nth(1).textContent()); //2nd element of multiple 
    const allTitles = await cardTitles.allTextContents(); // passing text from ALL cards to const (will be an array list, so NO SYNCHRONIZATION because array can be empty as valid result, no waits implemented by default for the first element)
    console.log(allTitles);




});

test('Page Playwright test', async({page}) => // can use page fixture if you do not need any options (plugins etc., just a fresh browser )
{
    await page.goto("https://google.com");
    //page title - assertion 
    console.log (await page.title());
    await expect(page).toHaveTitle("Google"); //expect is automatically included assertion library
});



test.only ('UI Controls', async({page}) =>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator("#username");
    const signIn = page.locator('#signInBtn');
    const dropdown = page.locator("select.form-control"); //parent - Dd menu
    await userName.fill(""); //clears up
    await userName.fill("rahulshettyacademy"); // can use "type" method as well
    await page.locator("[type='password']").type("learning");
    await dropdown.selectOption ("consult"); //value of the Dd menu item 
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    //assertion on radio btn #2 - option 1
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    //assertion on radio btn #2 - option 2, with colnsole log 
    console.log(await page.locator(".radiotextsty").last().isChecked());
    
    await page.locator("#terms").click();
    await expect (page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();
    await page.pause();


    

});








