//load playwright modules
const {test,expect}=require("@playwright/test")

import { faker } from "@faker-js/faker"

import { DateTime } from "luxon"

//create a test
test("Booking APi call",async({request})=>{

    let firstName=faker.person.firstName()
    let lastName=faker.person.lastName()
    let totalPrice=faker.number.int(1000)

    let checkin=DateTime.now().toFormat("yyyy-MM-dd")
    let checkout=DateTime.now().plus({day:5}).toFormat("yyyy-MM-dd")
    //create post API request
   const postAPIResponse= await request.post("/booking",{
        data:{
                "firstname" : firstName,
                "lastname" : lastName,
                "totalprice" : totalPrice,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : checkin,
                    "checkout" : checkout
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

    expect(postApiResponseBody.booking).toHaveProperty("firstname" , firstName)
    expect(postApiResponseBody.booking).toHaveProperty("lastname" , lastName)

    //validate nested json response
    expect(postApiResponseBody.booking.bookingdates).toHaveProperty("checkin" , checkin)
    expect(postApiResponseBody.booking.bookingdates).toHaveProperty("checkout" , checkout)

    console.log(postApiResponseBody.booking.bookingdates.checkin)
})

