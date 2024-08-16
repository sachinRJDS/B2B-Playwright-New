const {test,expect}=require("@playwright/test")
test("First Case",async({page})=>{
//    const context= await browser.newContext()
//    let page=await context.newPage()
   await page.goto("https://www.flipkart.com/")
//    await expect(page).toHaveURL("https://playwright.dev/docs/intro#installing-playwright")
   await page.locator('input.Pke_EE').fill("shoes")
   
})