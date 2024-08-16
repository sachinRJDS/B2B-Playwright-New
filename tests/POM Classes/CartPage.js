
exports.CartPage=class CartPage{

    constructor(page){
        this.page=page
        this.noOfProd="//tbody/tr/td[2]"
    }

    async checkProductInCart(product){
        await this.page.waitForSelector(this.noOfProd)
       const list =await this.page.$$(this.noOfProd)
        for(const pro of list ){
            if(await pro.textContent()==product){
                return true
                break
            }
        }
    }
}