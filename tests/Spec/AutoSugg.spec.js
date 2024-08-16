const {test,expect}=require("@playwright/test")
const { describe } = require("node:test")


// test("Auto Suggestions",async({page})=>{
// await page.goto("https://www.amazon.com/")
// await page.locator("input#twotabsearchtextbox").fill("phones")
// // let arr=await page.locator("div[class='s-suggestion s-suggestion-ellipsis-direction']").nth(1).textContent()
// // console.log(arr);
// // let arr1=await page.locator("div[class='s-suggestion s-suggestion-ellipsis-direction']").allTextContents()
// // console.log(arr1);
// const arr1=await page.waitForSelector("div[class='s-suggestion s-suggestion-ellipsis-direction").textContent()
// console.log(arr1);
// })

describe("1st",async()=>{
    test("Auto Suggestions",async({page})=>{
        await page.goto("https://www.amazon.com/")
        const title=await page.title()
        await expect(title).toContain("Amazon")
       await expect(page).toHaveTitle("Amazon.com. Spend less. Smile more.")
       await expect(page).toHaveURL("https://www.amazon.com/")
        await page.locator("input#twotabsearchtextbox").fill("i phone15 pro max")
        // await page.locator("div[class='s-suggestion s-suggestion-ellipsis-direction']").nth(1).click()
        await page.locator("div[class='s-suggestion s-suggestion-ellipsis-direction']").first().click()
    //    await page.pause()

        })
})