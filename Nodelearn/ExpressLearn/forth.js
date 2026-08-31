import express from "express"
const app = express();
app.get("/" , (req,res)=>{
    res.send("hiu this is home good moring  page")
})
app.get("/about" , (req,res)=>{
    res.send("this is about about the cript  page")
})

app.listen(3000,()=>{
    console.log("running on port 3k")
})