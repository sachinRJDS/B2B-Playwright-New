const {test,expect, chromium}=require("@playwright/test")
test.skip("First Page2",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const page1= page.waitForEvent('page')
    await page.locator("//a[normalize-space()='OrangeHRM, Inc']").click()
    const secondPage=await page1
    await secondPage.waitForSelector("#Form_submitForm_action_request")
    await secondPage.click("#Form_submitForm_action_request")
    
    
    // await page
    await page.waitForTimeout(5000)
})


    test.skip("1st cases",async()=>{
        const browser=await chromium.launch()
        const context=await browser.newContext()

        const page1=await context.newPage()
        const page2=await context.newPage()
        const pagesCount=context.pages()
        console.log(pagesCount.length);
        
        await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await expect(page1).toHaveTitle("OrangeHRM")

        await page2.goto("https://playwright.dev/docs/intro")
        await expect(page2).toHaveTitle("OraInstallation | PlaywrightngeHRM")

    


    })

    test("2nd",async()=>{
        const browser=await chromium.launch()
        const context=await browser.newContext()

        const page1=await context.newPage()
        await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        const promiseObj= context.waitForEvent('page')

        await page1.click("//a[normalize-space()='OrangeHRM, Inc']")
        const newPage=await promiseObj

        await newPage.waitForSelector("#Form_submitForm_action_request")
        await newPage.click("#Form_submitForm_action_request")
    
        await newPage.waitForTimeout(5000)

    })