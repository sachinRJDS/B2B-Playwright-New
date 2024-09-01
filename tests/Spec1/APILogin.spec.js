
const{test,expect}=require("@playwright/test")

test.skip("Login into Application",async({request})=>{

    let response=await request.get("https://api.demoblaze.com/entries")
    console.log(await response.json());
    
})

test("Login into Application 2nd",async({request})=>{

    let response=await request.post("https://api.demoblaze.com/check",{
        data:{
            token: "dGVzdGluZ2NvZGUxNzI1MzQ1"
        }
    })
    console.log(await response.json());
    
})