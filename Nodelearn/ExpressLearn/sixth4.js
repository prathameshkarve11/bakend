 /////// Cookies 

 import express from "express"
 import cookieParser from "cookie-parser"

 const app = express()
 app.use(cookieParser());

 app.get("/login", (req,res)=>{
    res.cookie("username" , "Prathx11" , {
      httpOnly : true, /// prevents console.log(document.cookie)
      secure  : false, //// only works on httpS
      maxAge: 60000 //// expires in 60sec
    })
    res.send("login as prathx11")

 })

 app.get("/profile", (req,res)=>{
    res.send(`this is profile page of ${req.cookies.username}`)
 })

app.listen(3000, ()=>{
    console.log("running on port 3000")
})