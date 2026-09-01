 /////// Cookies 

 import express from "express"
 import cookieParser from "cookie-parser"

 const app = express()
 app.use(cookieParser());

 app.get("/login", (req,res)=>{
    res.cookie("username" , "Prathx11")
    res.send("login as prathx11")

 })

 app.get("/profile", (req,res)=>{
    res.send(`this is profile page of ${req.cookies.username}`)
 })

app.listen(3000, ()=>{
    console.log("running on port 3000")
})