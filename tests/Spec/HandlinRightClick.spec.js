const {test,expect}=require("@playwright/test")

test("Right Click",async({page})=>{
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")

    const right=await page.locator("//span[@class='context-menu-one btn btn-neutral']")

    //right click action
    await right.click({button:'right'})
    await page.click("//span[normalize-space()='Copy']")

    await page.waitForTimeout(5000)
})