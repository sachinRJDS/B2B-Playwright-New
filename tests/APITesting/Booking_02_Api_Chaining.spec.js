//load playwright modules
const {test,expect, request}=require("@playwright/test")

var bookingId;
//create a test
test("Booking APi post call",async({request})=>{
    //create post API request
   const postAPIResponse= await request.post("/booking",{
        data:{
                "firstname" : "Gowtham",
                "lastname" : "Doddi",
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
    // console.log(postApiResponseBody)
    console.log(postApiResponseBody.bookingid)
    bookingId= postApiResponseBody.bookingid;

    expect(postApiResponseBody.booking).toHaveProperty("firstname" , "Gowtham")
    expect(postApiResponseBody.booking).toHaveProperty("lastname" , "Doddi")

    //validate nested json response
    expect(postApiResponseBody.booking.bookingdates).toHaveProperty("checkin" , "2024-01-01")
    expect(postApiResponseBody.booking.bookingdates).toHaveProperty("checkout" , "2024-01-01")

    console.log(postApiResponseBody.booking.bookingdates.checkin)

    // const getResponse=await request.get("/booking/"+bookingId)
    //  console.log(await getResponse.json())
})


test("Get request of Booking based on id",async({request})=>{
    //create get request
    const getResponse=await request.get("/booking/"+bookingId)
    let response=await getResponse.json()
    console.log(response)
    expect(getResponse.status()).toBe(200)
    expect(response).toHaveProperty("firstname" , "Gowtham")
    expect(response).toHaveProperty("lastname" , "Doddi")

    expect(response.bookingdates).toHaveProperty("checkin" , "2024-01-01")
    expect(response.bookingdates).toHaveProperty("checkout" , "2024-01-01")
    
})

