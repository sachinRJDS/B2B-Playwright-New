const {test,expect}=require('@playwright/test')
// test("valid password",async({page})=>{
//     await page.goto("https://practicetestautomation.com/practice-test-login/")
//     await page.locator("input#username").fill("student")
//     await page.locator("input#password").fill("Password123")
//     await page.locator("button#submit").click()
// })
// test("invalid",async({page})=>{
//     await page.goto("https://practicetestautomation.com/practice-test-login/")
//     await page.locator("input#username").fill("swfdent")
//     await page.locator("input#password").fill("Paffword123")
//     await page.locator("button#submit").click()
//     let a=await page.locator("div#error").textContent()
//     await expect(a).toContain("invalid")
// })

test('auto suggestions', async({page}) => {
    await page.goto("https://www.amazon.com/")
    await page.locator("input#twotabsearchtextbox").fill("shoes")
    let aa=await page.locator("s-suggestion s-suggestion-ellipsis-direction").nth(2).click()
    console.log(aa);
});