const{test,expect}=require("@playwright/test")

// const testdata=JSON.parse(JSON.stringify(require("../JSONFiles/CreateUser.json")))
const testdata=require("../JSONFiles/CreateUser.json")

const testForJson=require("../JSONFiles/PracticeFile.json")

test('testing',async ({request}) => {
    console.log(testForJson.accounting[0].age);
    console.log(testForJson.accounting[0].firstName);
    console.log(testForJson.accounting[0].lastName);
    
});

var userId;
test('Get User',async ({request}) => {

    //To get multiple user
    // const response=await request.get("https://reqres.in/api/users?page=2")
    // console.log(response.status());
    // console.log(await response.json());
    // await expect(response.status()).toBe(200)

    //To get a single user
    const response=await request.get("https://reqres.in/api/users/3")   
    expect(response.status()).toBe(200)
    console.log(await response.json());

    
    
});

test('Create User',async ({request}) => {

   const response= await request.post("https://reqres.in/api/users",{
        data:testdata,
        headers:{
            "content-type":"application/json"
        },
        
    })

    await expect(response.status()).toBe(201)
    // console.log(await response.json());
    var res=await response.json()
    userId=res.id;

    
       
    
});

test('Update User',async ({request}) => {
   const response= await request.put("https://reqres.in/api/users/"+userId,{
        data:{
            "name": "Sachin Raj",
            "job": "Cenear MGR"
        }
    })

    

    await expect(response.status()).toBe(200)
});

test('Delete User',async ({request}) => {
    const response=await request.delete("https://reqres.in/api/users/"+userId)
    await expect(response.status()).toBe(204)
});