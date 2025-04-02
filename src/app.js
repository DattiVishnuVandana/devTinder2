const express=require('express')

const app=express()
//order of routers matters here ..keep / route at last,(use also) ..if anything matches /..it handles
app.get("/test/2",(req,res)=>{
    res.send("abraka dabra...it only matches get call")
})
app.use("/test/2",(req,res)=>{
    res.send("abraka dabra")
})

//use-matches all http methods
app.use("/test",(req,res)=>{
    res.send("hello")
})//here /test/anything..handles but not /test345
app.get(/^\/ab?c$/, (req, res) => {
    res.send("abc  question testing..");
});
//+,*,/a/, /.*fl$/
app.get(/^\/ab+c$/, (req, res) => {
    res.send("abc  + testing..");
});
// app.get("/ab?c",(req,res)=>{
//     res.send("abc testing..")
// })//b is optional here(ac,abc..)
app.use("/",(req,res)=>{
    res.send("hello this home")
})
app.listen(3222,()=>{
    console.log("server succesfully");
});