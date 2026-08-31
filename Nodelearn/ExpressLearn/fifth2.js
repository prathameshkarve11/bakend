////Error Handler 
import express from "express"

const app = express();

const checkurl = (req,res,next)=>{
     if(req.url == "/"){
        console.log("asking for home page!!!")
    }
    next()
}

app.get("/" , checkurl, (req, res , next)=>{
    
    return next(new Error("kuch toh gadbad hai"))
})
app.use((err,req,res ,next)=>{
    console.log(err.stack)
    res.status(500).send("something broke")
})

app.listen(3000,  ()=>{
    console.log("running on port 3k")
})