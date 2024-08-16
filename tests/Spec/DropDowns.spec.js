const {test,expect}=require("@playwright/test")
test("Using Select Tag",async({page})=>{
    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F")

    //Handling Drop Downs
    await page.locator("select[name=DateOfBirthDay]").selectOption({label:"3"}) //label/visibleText
    await page.locator("select[name=DateOfBirthMonth]").selectOption("January")//only visible Text
    await page.locator("select[name=DateOfBirthYear]").selectOption({value:"1998"})//using select by value
    await page.locator("select[name=DateOfBirthDay]").selectOption({index:7})//by using index
    await page.waitForTimeout(5000)
    //Another way to select
    await page.selectOption("select[name=DateOfBirthMonth]","September")
    await page.selectOption("select[name=DateOfBirthYear]",{value:"2017"})
    await page.waitForTimeout(5000)
    

    //to get the count of value which is in dropdown
    const option=await page.locator("select[name=DateOfBirthDay] option")//it will return in the form ao array
    await expect(option).toHaveCount(32)
        
    //to get the count of an array, we need to use same stmt inside $$ [findElements]
    const op=await page.$$("select[name=DateOfBirthDay] option")
    console.log(op.length);
    await expect(op.length).toBe(32)

    //to get the text from the dropdown
    // const text=await page.locator("select[name=DateOfBirthDay]").textContent()
    // console.log(text);

    const text=await page.locator("select[name=DateOfBirthMonth]").textContent()//here it will return all the ele in the form of String
    await expect(text.includes("September")).toBeTruthy()


})