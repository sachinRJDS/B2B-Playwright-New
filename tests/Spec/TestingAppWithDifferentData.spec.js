const {test,expect}=require("@playwright/test");
const { name } = require("../../playwright.config");
const diff=[{
    username:"sachin",
    password:26
},{
    username:"Darshan",
    password:27
},{
    username:"Prajwal",
    password:29
}]
diff.forEach(ele=>{
    test(`${Date.now()}`,async ({page})=>{
       console.log(ele.username);
       console.log(ele.password);
       
    })
})

