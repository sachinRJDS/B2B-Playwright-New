const {test,expect}=require("@playwright/test")

test("Different ENVIRONMENT",async({page})=>{ 

    await page.goto(process.env.URL)
    await page.click("#login2")
    await page.fill("#loginusername",process.env.USERNAME1)
    await page.fill("#loginpassword",process.env.PASSWORD)
    await page.click("//button[normalize-space(text())='Log in']")
    await page.waitForTimeout(5000)
})