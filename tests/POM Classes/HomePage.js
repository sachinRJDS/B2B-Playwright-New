exports.HomePage=
class HomePage{
constructor(page){
    this.page=page
    this.prodlist="//*[@id='tbodyid']/div/div/div/h4/a"
    this.addtoCart="//a[text()='Add to cart']"
    this.cartTab="//a[text()='Cart']"
}
async addProductToCart(prod){
    await this.page.waitForSelector(this.prodlist)
    const list=await this.page.$$(this.prodlist)
    for(const prod1 of list){
        if(await prod1.textContent()==prod){
            await prod1.click()
            break
        }
    }
    await this.page.on('dialog',async dialog=>{
        if(dialog.message().includes("added")){
            await dialog.accept()
        }
    })
    await this.page.locator(this.addtoCart).click()
    
}

async gotoCart(){
    await this.page.locator(this.cartTab).click()
}


}