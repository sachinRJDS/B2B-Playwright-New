const {test}=require("@playwright/test")
const { parseEnv } = require("util")

test("Page screenhot",async({page})=>{
await page.goto("https://demowebshop.tricentis.com/")
await page.screenshot({path:"tests/Screenshot/"+Date.now()+"Homepage.png"})
//here it will take the screen level screenshot

})

test("Full page screenhot",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
    await page.screenshot({path:"tests/Screenshot/"+Date.now()+"Fullpage.png",fullPage:true})
    //it will capture the full page (header & footer) screenshot
})


test.only("Element screenhot",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
    await page.locator("(//div[@class='product-item'])[1]").screenshot({path:'tests/Screenshot/'+Date.now()+"Element.png"})
})