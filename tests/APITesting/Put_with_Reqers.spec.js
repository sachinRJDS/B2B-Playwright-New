const {test,expect}=require("@playwright/test")

test("Put request",async({request})=>{
    const putResponse=await request.put("https://reqres.in/api/users/2",{
        headers:{
            "Content-Type":"application/json"
        },        
        data:{
             "name": "gowtham",
             "job": "BBMP President"
        }
    })
    const response=await putResponse.json()

    console.log(response)
})
