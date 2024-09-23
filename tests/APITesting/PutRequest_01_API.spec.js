//load playwright modules
const {test,expect}=require("@playwright/test")
const tokenPath=require("../JSONFiles/Put_Request_Token.json")
const putPath=require("../JSONFiles/Put_Request.json")
import { faker } from "@faker-js/faker"
import { DateTime } from "luxon"


var bookingId;
//create a test
test("Booking APi call with post and put",async({request})=>{

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

     //read booking id
     bookingId= postAPIResponse.bookingid;

     //validate json response
    const postApiResponseBody=await postAPIResponse.json()
    // console.log(postApiResponseBody)

    expect(postApiResponseBody.booking).toHaveProperty("firstname" , firstName)
    expect(postApiResponseBody.booking).toHaveProperty("lastname" , lastName)

    //validate nested json response
    expect(postApiResponseBody.booking.bookingdates).toHaveProperty("checkin" , checkin)
    expect(postApiResponseBody.booking.bookingdates).toHaveProperty("checkout" , checkout)

    console.log(postApiResponseBody.booking.bookingdates.checkin)
})

test("Put request and generate the token ",async({request})=>{

    //generate the token as below
   const tokenResponse= await request.post("/auth",{
        data:tokenPath
    })

    const tokenNum=await tokenResponse.json();
    const tokenNumber=tokenNum.token;
    console.log("token number :"+tokenNumber)

    //put request
   const putApiResponse= await request.put("/booking/"+bookingId,{
        headers:{
            "Content-Type":"application/json",
            "Cookie":`token=${tokenNumber}`
        },
        data:putPath
    })

    const putRes=putApiResponse.json()
    console.log(putRes)

})