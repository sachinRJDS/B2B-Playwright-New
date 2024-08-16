const{test,expect}=require("@playwright/test")

test("Drag And Drop",async({page})=>{
    await page.goto("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")

    const src=await page.locator("#box1")
    const desti=await page.locator("#box107")

    //Approch 1
    // await src.hover()
    // await page.mouse.down()

    // await desti.hover()
    // await page.mouse.up()
    // await page.waitForTimeout(5000)

    //Approch 2
    await src.dragTo(desti)
    await page.waitForTimeout(5000)
})