const {test,expect}=require("@playwright/test")


test("Mouse Hover",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    // const page= await page.waitForEvent('page')
    await page.locator("//a[normalize-space()='OrangeHRM, Inc']").click()
    // await page
    await page.waitForTimeout(5000)

    

//    const desktop=await page.locator("//a[normalize-space()='Desktops']")
//     const mac=await page.locator("//a[@class='nav-link'][normalize-space()='Mac (1)']")

//     //mouse hover
//     await desktop.hover();
//     await mac.hover()

//     await page.waitForTimeout(5000)
})

// test.only("Tab",async({page})=>{
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//     const page= await page.waitForEvent('page')
//     await page.locator("//a[normalize-space()='OrangeHRM, Inc']").click()
//     await page
//     await page.waitForTimeout(5000)

//     await page.waitForTimeout(5000)
// })