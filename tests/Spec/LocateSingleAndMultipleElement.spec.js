import {test,expect} from '@playwright/test'
import { log } from 'console'

test("Login Page",async({page})=>{
    await page.goto("https://www.demoblaze.com/")
    await expect(page).toHaveURL("https://www.demoblaze.com/")
    await expect(page).toHaveTitle("STORE")
    //click on login button
    await page.click("#login2")
    // await page.locator("h5[id=logInModalLabel]~button[class=close]").click()
    //fill user name and password
    await page.locator("#loginusername").fill("testingcode")
    await page.fill("#loginpassword","test@123")
    await page.click("//button[@onclick='logIn()']")

    //validating logout link in show page
    const actual=await page.locator("#logout2")
    await expect(actual).toBeVisible()
    

    //Fetch all the links in show page like findElements
    const allLinks=await page.$$("//a")
    for(const link of allLinks){
        console.log(await link.textContent());
    }
    
    await page.close()

})