//load playwright modules
const {test,expect}=require("@playwright/test")

//create a test
test("Booking APi call",async({request})=>{
    //create post API request
   const postAPIResponse= await request.post("/booking",{
        data:{
                "firstname" : "Playwright testing",
                "lastname" : "playwright api testing",
                "totalprice" : 111,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2024-01-01",
                    "checkout" : "2024-01-01"
                },
                "additionalneeds" : "Breakfast"
            }
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
})

