const{test,expect}=require("@playwright/test")

test.skip("iframe using name or url",async({page})=>{
await page.goto("https://ui.vision/demo/webtest/frames/")

//to get total count of frames
const count=await page.frames()
console.log(count.length);

//approch 1 using name 0r url
// const frame1=await page.frame('name')
const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_2.html'})
await frame1.fill("[name=mytext2]","sachin raj")
await page.waitForTimeout(5000)
await page.close()


})

test.skip("using frame locator",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")

    const frameSrc=await page.frameLocator("frame[src='frame_1.html']")
    await frameSrc.locator("[name=mytext1]").fill("sachin")
    await page.waitForTimeout(5000)
await page.close()
})

test("frame inside the another frame",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    const frame=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    await frame.fill("[name=mytext3]","sachin raj")

    //handling the nested frame or iframe
    const childFrames=await frame.childFrames()//here it will return the all the child frames which is present inside the parent frame
    //above it will return in the form of array
    await childFrames[0].locator("//*[@id='i5']/div[3]/div").check()
    await page.waitForTimeout(5000)



    await page.waitForTimeout(5000)
})