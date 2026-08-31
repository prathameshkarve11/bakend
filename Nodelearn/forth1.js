import fs from "fs"
//// using stream to get ddata in chunks  

const strm = fs.createReadStream("Nodelearn/gh.txt" , {
    highWaterMark : 1024*2   /// /*2 for 2kb at a time
})

strm.on("data" ,(chunk)=>{
    console.log("chunk size is : " , chunk.length , "bytes")
    console.log(chunk.toString())
})

strm.on("end" , ()=>{
    console.log("fininshed reading")
})