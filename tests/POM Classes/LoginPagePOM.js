
exports.LoginPage=
class LoginPage{
    constructor(page){
        this.page=page
        this.loginLink="#login2"
        this.userName="#loginusername"
        this.password="#loginpassword"
        this.loginButton="//button[text()='Log in']"
        
    }

    async gotoLoginPage(params) {
        await this.page.goto("https://www.demoblaze.com/index.html")
    }

    async login(username,password){
        await this.page.locator(this.loginLink).click()
        await this.page.locator(this.userName).fill(username)
        await this.page.locator(this.password).fill(password)
        await this.page.locator(this.loginButton).click()
    }
}
