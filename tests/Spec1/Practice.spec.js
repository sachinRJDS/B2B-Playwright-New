const{test,expect}=require("@playwright/test")

test("Practice Test",async({page})=>{
    console.log("added")
    await page.locator("").allTextContents()
    page.on("dialog",async dialog=>{
        dialog.message()
        dialog.type()
        dialog.accept()
        dialog.dismiss()
    })
    await page.locator(" ").frameLocator()
    const f=await page.frame()
    f.childFrames[1]

    console.log("bye")
})
console.log("Hi")
