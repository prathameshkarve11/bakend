////// re viving http

import http, { Server } from "http";

const server = http.createServer((req,res)=>{
    console.log("request recieved")
    console.log(req.method)
    req.statusCode = 403
    res.setHeader("Content-Type" , "text/plain")
    res.write("Hii this is reswrite")

    const myuser = {
        age:23,
        Name : "prathu"
    }
    res.end(JSON.stringify(myuser))

})

server.listen(3000 ,()=>{
    console.log("server is runing on port 3000")
})