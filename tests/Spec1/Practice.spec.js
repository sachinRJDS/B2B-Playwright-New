const{test,expect}=require("@playwright/test")

test("Practice Test",async({page})=>{
    await page.locator("").allTextContents()
    page.on("dialog",async dialog=>{
        dialog.message()
        dialog.type()
        dialog.accept()
        dialog.dismiss()
    })

    await page.frames()
    await page.locator(" ").frameLocator()
    const f=await page.frame()
    f.childFrames[1]
})