const{test,expect}=require("@playwright/test")
test.skip("Alert Pop-Up's",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    //Enabling the alert handling or we can say registering the alert
     page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain("alert")
        expect(dialog.message()).toContain("box")
        await dialog.accept()
     })
     //clicking on the buttom which will get the alert
     await page.click("//button[@onclick='myFunctionAlert()']")
     await page.waitForTimeout(5000)
})

test.skip("Confirmation pop-Up with ok or cancel",async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/")

   //Enabling the alert handling or we can say registering the alert
    page.on('dialog',async dialog=>{
       expect(dialog.type()).toContain("confirm")
       expect(dialog.message()).toContain("Press a button!")
      //  await dialog.dismiss()//to close using cancel
       await dialog.accept()

    })
    //clicking on the buttom which will get the confirmation alert
    await page.click("//button[@onclick='myFunctionConfirm()']")
    await expect(await page.locator("#demo")).toHaveText("You pressed OK!")
    await page.waitForTimeout(5000)
})

test("Dialog Prompt",async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/")

   //Enabling the alert handling or we can say registering the alert
    page.on('dialog',async dialog=>{
       expect(dialog.type()).toContain("prompt")
       expect(dialog.message()).toContain("Please enter your name:")
       expect(dialog.defaultValue()).toContain("Harry Potter")
      //  await dialog.dismiss()//to close using cancel
       await dialog.accept("Sachin Raj")

    })
    //clicking on the buttom which will get the confirmation alert
    await page.click("//button[@onclick='myFunctionPrompt()']")
    await expect(await page.locator("#demo")).toContainText("Sachin Raj")
    await page.waitForTimeout(5000)
})