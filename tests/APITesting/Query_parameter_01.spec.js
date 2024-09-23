//load playwright modules
const {test,expect, request}=require("@playwright/test")

var bookingId;
//create a test
test("Booking APi post call with query param",async({request})=>{
    //create post API request
   const postAPIResponse= await request.post("/booking",{
        data:{
                "firstname" : "GowthamMysore",
                "lastname" : "DoddiMaddur",
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

    expect(postApiResponseBody.booking).toHaveProperty("firstname" , "GowthamMysore")
    expect(postApiResponseBody.booking).toHaveProperty("lastname" , "DoddiMaddur")

    //validate nested json response
    expect(postApiResponseBody.booking.bookingdates).toHaveProperty("checkin" , "2024-01-01")
    expect(postApiResponseBody.booking.bookingdates).toHaveProperty("checkout" , "2024-01-01")

    console.log(postApiResponseBody.booking.bookingdates.checkin)

    // const getResponse=await request.get("/booking/"+bookingId)
    //  console.log(await getResponse.json())
    console.log("=========================POST=========================")
})


test("Get request of Booking based on id query param",async({request})=>{
    //create get request
    //instead of passing the booking id , if we pass the data that are present in the post request
    //then we will get the all the booking resources id which are created using that data
    const getResponse=await request.get("/booking/",{
        params:{
             "firstname" : "GowthamMysore",
                // "lastname" : "DoddiMaddur"
        }
    })
    let response=await getResponse.json()

    expect(getResponse.status()).toBe(200)
    console.log(await response)
    console.log("=========================GET=========================")
})

