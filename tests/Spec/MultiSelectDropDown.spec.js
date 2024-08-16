const {test,expect}=require("@playwright/test")
test.skip('MultiSelectDropDown', async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.selectOption("#colors",['Red','Green'])
    const option1=await page.locator("#colors").textContent()
    console.log(option1)
    await expect(await page.locator('#colors option')).toHaveCount(5)
    //validating the count of the dropdown value
    const option2=await page.$$("#colors option")
    await expect(option2.length).toBe(5)


    //validating the presence of the value
    await expect(option1.includes("Red")).toBeTruthy()
    await page.waitForTimeout(5000)
});


test.skip('Auto-Suggestion DropDown',async ({page}) => {
    await page.goto("https://www.redbus.in/")
    await page.fill("#src","Delhi")
    //here it's waiting for the ele in UI
    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")

    //here getting the all the value from the dropdown
    const option =await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")

    for(let op of option){
        let value=await op.textContent()
        
        if(value.includes("Mayur Vihar")){
            await op.click()
            break
        }
    }

    await page.waitForTimeout(5000)
    await page.close()
});

test.only("Hidden DropDown",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.fill("input[name=username]","Admin")
    await page.fill("input[name=password]","admin123")
    await page.click("button[type=submit]")

    await page.click("//ul[@class='oxd-main-menu']/li/descendant::span[text()='PIM']")

    //click on dropdown
    await page.click("//label[text()='Job Title']/../following-sibling::div/descendant::i")
    // await page.waitForSelector("//div[@role='listbox']")
    await page.waitForTimeout(3000)
    //select the value from the dropdown
    const option=await page.$$("//div[@role='listbox']//span")
    for(let op of option){
        const value=await op.textContent()        
        if(value.includes("Software Architect")){
            await op.click()
            break
        }
    }
    await page.waitForTimeout(5000)
    await page.close()
})