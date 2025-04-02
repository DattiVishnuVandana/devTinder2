const express=require('express')

const app=express()

app.use("/test",(req,res)=>{
    res.send("hello")
})
app.use("/",(req,res)=>{
    res.send("hello this home")
})
app.listen(3222,()=>{
    console.log("server succesfully");
});