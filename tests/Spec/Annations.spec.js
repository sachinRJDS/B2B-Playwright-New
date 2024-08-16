const {test}=require("@playwright/test")
const { log } = require("console")
test.only("only",async()=>{

})

test.skip("skip",async({page})=>{

})
//based on conditions
test("skip based on condition",async({page,browserName})=>{
    if(browserName==='chromium'){
        test.skip()
    }
})

test("fixme",async({page,browserName})=>{
    test.fixme()
    console.log("Hi");
    
})
//direct fail without any validation or condition
test.fail("fail",async()=>{

})

//fail based on condition
test("fail based on condition",async({page,browserName})=>{
    if(browserName==='chromium'){
        test.fail()
    }
})

test.slow("slow",async({page})=>{
    console.log("Hi");
    
})

test("slow",async({page})=>{
    test.slow()//here it will multiple the default timeout *3
    console.log("Hi");
    
})