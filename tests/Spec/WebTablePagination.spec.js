const {test,expect}=require("@playwright/test")
test("Webtable",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    
    const table=await page.locator("#productTable")

    //to get col count
    const allColumns=await table.locator("thead tr th")
    
    const colCount=await allColumns.count()   //4
    await expect(colCount).toBe(4)    

    //to get row count
   const allRows=await table.locator("tbody tr")
   const rowCount=await allRows.count()   //5
   await expect(rowCount).toBe(5)

    //select the checkbox based on the name of the product
    // const matchedRow=allRows.filter({
    //     has : page.locator("td"),
    //     hasText : "Product 1"
    // })

    // await  matchedRow.locator("input").check()
    

    // //select multiple checkbox using reusble fn
    // await selectProduct(allRows,page,"Product 1")
    // await selectProduct(allRows,page,"Product 3")
    // await selectProduct(allRows,page,"Product 5")

    // await page.waitForTimeout(5000)

    //print all the product details using loop
  
    // for(let i=0;i<await allRows.count();i++){
    //     const rows= await allRows.nth(i)
    //     const tds=await rows.locator("td")
    //     for(let j=0;j<await tds.count();j++){
    //         const text=await tds.nth(j).textContent()
    //         console.log(text)
    //     }
    // }
   
    //Read the data from the all the pages
    //get the page count
    const pages= await page.locator("#pagination li a")
    const pageCount=await pages.count()
    console.log(pageCount);

    for(let i=0;i<pageCount;i++){

        if(i>0){
            await pages.nth(i).click()
        }
d
        for(let i=0;i<await allRows.count();i++){
            const rows= await allRows.nth(i)
            const tds=await rows.locator("td")

            for(let j=0;j<await tds.count();j++){
                const text=await tds.nth(j).textContent()
                console.log(text)
            }
        }
        await page.waitForTimeout(5000)
    } 
   

})

async function selectProduct(row, page, name){
    const matchedRow=row.filter({
            has : page.locator("td"),
            hasText : name
        })
        await  matchedRow.locator("input").check()
}

async function readDataFromAllThePages(){
    for(let i=0;i<await allRows.count();i++){
        const rows= await allRows.nth(i)
        const tds=await rows.locator("td")
        for(let j=0;j<await tds.count();j++){
            const text=await tds.nth(j).textContent()
            console.log(text)
        }
    }
}