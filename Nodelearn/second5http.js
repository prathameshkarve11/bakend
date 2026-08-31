///////learning http module 

// import { resolve } from "dns"
// import http from "http"

// const server = http.createServer((req, res)=>{
//     console.log("request recieved")
//     res.end("<h1>herllo from node js</h1>")
// })

// server.listen(3000, ()=>{
//     console.log("server riunning on port 3000")
// })


import http from "http"
import { url } from "inspector"

const server = http.createServer((req ,res)=>{
    console.log("request recieved")
    console.log("method "+ req.method)
    console.log("url "+ req.url)
    res.end("this is hi from the backend team!!+")
})

server.listen(3000, ()=>{
    console.log("server running on port 3000")
})