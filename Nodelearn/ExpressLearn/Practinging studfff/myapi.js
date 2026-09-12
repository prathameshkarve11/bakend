import express from "express"
const app = express()

app.use(express.json())
// app.set("view engine" , "html")
// app.get("/" , (req,res)=>{
//     res.render("index.html")
// })
app.get("/api/users" , (req,res)=>{
    res.json([{id:1 ,  Name : "Prathamesh"} , {id : 2 , Name : "Arjun"}])
})

app.listen(3000)