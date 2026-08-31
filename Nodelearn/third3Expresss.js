import express from "express"
const app  =  express()
app.get("/" , (req,res)=>{
    res.send("<h1>hii</h1>")
})
app.listen(3000 , ()=>{
    console.log("running on port 3k")
})
