const {test, expect} = require ('@playwright/test');
//Parameters file: JSON -> string -> JS object
const registerTestData = JSON.parse(JSON.stringify(require( "../testdata/registerTestData.json")));



test ('A_Registration', async({page}) =>
{
    await page.goto("https://arcteryx.com/ca/en/account/register");
    await page.waitForLoadState("networkidle");
    

    const emailReg = page.locator('#email-register');
    const firstNameReg = page.locator('#firstName');
    const lastNameReg = page.locator('#lastName');
    const postCode = page.locator("#postCode");
    const passwordReg = page.locator("#password-register");
    const confirmPasswordReg = page.locator("#confirmPassword-register");
    const signUp = page.locator('[type="submit"]')


    //accept cookied in the pop-up dialog
    await page.locator("#onetrust-accept-btn-handler").click();
    //enver valid input in all fields
    const countryDd = page.locator('[data-testid="country"]');
    await emailReg.fill(registerTestData.email);
    await firstNameReg.fill(registerTestData.firstname);
    await lastNameReg.fill (registerTestData.lastname);
    await countryDd.selectOption(registerTestData.country);
    //await page.pause(); //pauses the page and opend Playwright inspector 
    await postCode.fill(registerTestData.postalcode);
    await passwordReg.fill(registerTestData.password);
    await confirmPasswordReg.fill(registerTestData.confpassword);
    await page.pause();
    //await signUp.click();
    await page.pause();







});

test ('A_Snow_Shopping for her', async ({page}) =>
{
    const shopSnowWomen = page.locator('[data-analytics-label="home_t2_shop_ski-and-snowboard-product-guide_womens"]');
    await page.goto("https://arcteryx.com/ca/en/");
    await shopSnowWomen.click();
    await page.waitForLoadState("networkidle"); //wait for all calls to be made

});

test ('A_Shopping_Women', async ({page}) =>
{
    const shopSnowWomen = page.locator('[data-analytics-label="home_t2_shop_ski-and-snowboard-product-guide_womens"]');
    await page.goto("https://arcteryx.com/ca/en/c/womens");
    await page.waitForLoadState("networkidle"); //wait for all product cards to load


});
test.only ('A_Add to Cart', async ({page}) =>
{
    //go to page
    await page.goto("https://arcteryx.com/ca/en/shop/womens/alpha-parka");
    //accept cookied in the pop-up dialog
    await page.locator("#onetrust-accept-btn-handler").click();
    //choose size
    await page.locator('[data-size-value="L"]').click(); //[aria-label="size2"]
    //await page.pause();
    //click add to cart
    await page.locator('button[class="es__ButtonWrapper-sc-1637uwf-1 gbVwiF button button--Outdoor button--Add-To-Cart"]').click();
    await page.pause();
    
    //human challenge - press & hold button 
    await expect(page.locator('text*="Press & Hold"')).toBeVisible();
    //await page.getByText('Press & Hold').click({ button: 'right', delay: 10000}); //right cick 


    //'#px-captcha' ; [style*=block] x3 ; div[class="es__ButtonContainer-sc-17clqes-1 fseXHY"]
    await page.locator('div[class="es__ButtonContainer-sc-17clqes-1 fseXHY"]').click({
        delay: 15000
    });
    //await page.pause();

    //second #NqJRetVpXoVcHHb ; [class="KHtqkHqLeYGJUDB"], '#bfiLGYqlhBBproN [class="KHtqkHqLeYGJUDB"]'; p[class="KHtqkHqLeYGJUDB"]

    if (await page.locator("#toILlZrVjSlDoqj").isVisible()){
        await page.locator('p[class="KHtqkHqLeYGJUDB"]').click({
            delay: 15000
    })
    };
    //confirm quantity added
    //expect (await page.locator('input[class="es__Input-rq8fyk-60 cOPYek qa-cart-item-quantity"]').textContent()).toBe("1");


});








