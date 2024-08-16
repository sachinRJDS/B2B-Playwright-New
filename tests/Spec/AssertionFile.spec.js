// import {test,expect} from '@playwright/test'
const {test,expect}=require("@playwright/test")

test.skip('Hard Assert',async ({page}) => {
    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F")

    //validate the url
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register?returnUrl=%2F")

    //validate the title of the page
    await expect(page).toHaveTitle("nopCommerce demo store. Register")
    // await expect(page).not.toHaveTitle()

    //validate the webelement is    visible or not
    const logo=await page.locator(".header-logo")
    await expect(logo).toBeVisible()

    //to validate the element isEnabled or not
    const enable=await page.locator("input#small-searchterms")
    await expect(enable).toBeEnabled()

    //to validate checkbox/radio button is checked or not
    const radio=await page.locator("input#gender-male")
    //here we are 1st checking the radio button then we are validating wheather it's checked or not
    await page.locator("input#gender-male").click()
    await expect(radio).toBeChecked()
    //here the checkbox is already checked by default just we are validating wheather it's checked or not
    const check=await page.locator("input#Newsletter")
    await expect(check).toBeChecked()

    //to check wheather the given element having the particular attribute or not
    const attribute=await page.locator("#register-button")
    //here it's accepting two args 1=>attribute name 2=>attribute value
    await expect(attribute).toHaveAttribute('type','submit')

    //to validate the element having text or not [full text]
    await expect(await page.locator(".page-title h1")).toHaveText("Register")
    //contains [partial text]
    await expect(await page.locator(".page-title h1")).toContainText("Regi")

    //if i want to check the input box is having the value or not toHaveValue()
    let inp=await page.locator("#Email")
    //first we have to fill the value and then validating the same value in the asserstion
    await inp.fill("sachin@gmail.com")
    await expect(inp).toHaveValue("sachin@gmail.com")

    //if i want to validate count the options like dropdowns etc using toHaveCount()
    const options=await page.locator("select[name=DateOfBirthDay] option")
    await expect(options).toHaveCount(32)
    await expect(options).not.toHaveCount(34)
    });


    test.only("Soft Assert",async({page})=>{
        await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F")

        //validate the url
        await expect.soft(page).toHaveURL("Amazon")

         //validate the title of the page
       await expect.soft(page).toHaveTitle("nopCommerce demo store. Register")

       //validate the webelement is    visible or not
        const logo=await page.locator(".header-logos")
        await expect.soft(logo).toBeVisible()

        //to validate the element isEnabled or not
        const enable=await page.locator("input#small-searchterms")
        await expect(enable).toBeEnabled()

    
    })

    