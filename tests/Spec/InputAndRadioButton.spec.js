const {test,expect}=require("@playwright/test")
test.skip("Input Ele",async({page})=>{
    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F")
    const visi=await page.locator("#LastName")
    await expect.soft(visi).toBeVisible()
    await expect.soft(visi).toBeEmpty()
    await expect.soft(visi).toBeEnabled()
    await expect.soft(visi).toBeEditable()
    //Input -firstname
    await page.locator("#FirstName").fill("Sachin")
    await page.fill("#LastName","test@123")

    //waiting stmt
    await page.waitForTimeout(5000)
})

test.only("Radio Buttons/ Checkbox",async({page})=>{

    //Radio button
    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F")
    await page.locator("#gender-male").check()
    await expect.soft(await page.locator("#gender-male")).toBeChecked()

    await page.check("#gender-female")
    await expect.soft(await page.locator("#gender-female")).toBeEnabled()

    await page.locator("#gender-male").click()
    await page.click("#gender-female")

    await expect(await page.locator("#gender-female").isChecked()).toBeTruthy()
    await expect(await page.locator("#gender-male").isChecked()).toBeFalsy()

    await page.waitForTimeout(5000)//Pausing the execution for specified duration
})