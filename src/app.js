const express=require('express')

const app=express()
//order of routers matters here ..keep / route at last ..if anything matches /..it handles
app.use("/test/2",(req,res)=>{
    res.send("abraka dabra")
})
app.use("/test",(req,res)=>{
    res.send("hello")
})//here /test/anything..handles but not /test345

app.use("/",(req,res)=>{
    res.send("hello this home")
})
app.listen(3222,()=>{
    console.log("server succesfully");
});