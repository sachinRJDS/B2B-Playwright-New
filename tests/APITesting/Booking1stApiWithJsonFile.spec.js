//load playwright modules
const {test,expect}=require("@playwright/test")
const bookingPath=require("../JSONFiles/PostRequestBody.json")
const { log } = require("console")
//create a test
test("Booking APi call with static json file",async({request})=>{
    //create post API request
   const postAPIResponse= await request.post("/booking",{
        data:bookingPath
    })

    //validate status code
     expect(postAPIResponse.ok()).toBeTruthy()
     expect(postAPIResponse.status()).toBe(200)

     //validate json response
    const postApiResponseBody=await postAPIResponse.json()
    console.log(postApiResponseBody)

    expect(postApiResponseBody.booking).toHaveProperty("firstname" , "Playwright testing")
    expect(postApiResponseBody.booking).toHaveProperty("lastname" , "playwright api testing")

    //validate nested json response
    expect(postApiResponseBody.booking.bookingdates).toHaveProperty("checkin" , "2024-01-01")
    expect(postApiResponseBody.booking.bookingdates).toHaveProperty("checkout" , "2024-01-01")

    console.log(postApiResponseBody.booking.bookingdates.checkin)
    console.log(Date.now());
    
})

