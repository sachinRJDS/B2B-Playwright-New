const {test,expect}=require("@playwright/test")
import { LoginPage } from "./POM Classes/LoginPagePOM"
import { HomePage } from "./POM Classes/HomePage"
import { CartPage } from "./POM Classes/CartPage"

test("Login to Application",async({page})=>{
//Login
const login=new LoginPage(page)
await login.gotoLoginPage()
await login.login("testingcode", "test@123")
await page.waitForTimeout(5000)

//Home
const home=new HomePage(page)
await home.addProductToCart("Samsung galaxy s6")
await home.gotoCart()

// //Cart
const cart=new CartPage(page)
const res=cart.checkProductInCart("Samsung galaxy s6")
await expect(res).toBeTruthy()
await page.waitForTimeout(5000)

})