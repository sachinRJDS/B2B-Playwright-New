const {test,expect}=require("@playwright/test")

test('Getting Base URL from config file',async ({page}) => {
    await page.goto('/docs/trace-viewer-intro')
    await expect(page).toHaveURL("https://playwright.dev/docs/trace-viewer-intro")

    await page.waitForTimeout(3000)
});