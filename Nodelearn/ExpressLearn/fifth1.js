import express from "express"
const app = express();

//////Midde wear 



// app.use((req ,res, next)=>{
//     if(req.url == "/"){
//         console.log("asking for home page!!!")
//     }

//     next()
    
// })

const checkurl = (req,res,next)=>{
     if(req.url == "/"){
        console.log("asking for home page!!!")
    }
    next()
}

app.get("/" , checkurl, (req, res)=>{
    res.send("home page hai ye")
})

app.listen(3000,  ()=>{
    console.log("running on port 3k")
})