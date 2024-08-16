const {test,expect}=require("@playwright/test")

test.skip("Single Upload",async({page})=>{
await page.goto("https://tus.io/demo")
// await page.locator("#P0-0").click()
await page.locator("#P0-0").setInputFiles("tests/UploadFiles/SachinRaj_4.2_years_IBM.docx")

const actual=await page.locator("//div[@class='_root_gq6c0_1']/descendant::a")
// await expect(actual).toHaveText("SachinRaj_4.2_years_IBM.docx")
await expect(actual).toContainText("SachinRaj_4.2_years_IBM.docx")
await page.waitForTimeout(5000)
})

test("Multiple Upload",async({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    await page.locator("#filesToUpload").setInputFiles(['tests/UploadFiles/Resume DR (1).docx','tests/UploadFiles/SachinRaj_4.2_years_IBM.docx'])
    await page.waitForTimeout(3000)

    //validation
    await expect(await page.locator("//ul[@id='fileList']/li[1]")).toHaveText("Resume DR (1).docx")
    await expect(await page.locator("//ul[@id='fileList']/li[2]")).toHaveText("SachinRaj_4.2_years_IBM.docx")

    //For removing the file
    await page.locator("#filesToUpload").setInputFiles([])
    await page.waitForTimeout(3000)

    //validation
    await expect(await page.locator("//ul[@id='fileList']/li[1]")).toHaveText("No Files Selected")
})