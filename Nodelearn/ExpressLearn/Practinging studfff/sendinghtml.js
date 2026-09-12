import express from  "express"
const app = express()
app.get("/", (req,res)=>{
    res.sendFile("./views/index.html" , {root : "."});
})

app.listen(3000)