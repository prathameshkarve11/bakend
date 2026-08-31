// ////importing fs (file system)

// //  const fs = require("fs")
 
import fs from "fs";

// /// reading from  file 
 
// fs.readFile("./Nodelearn/msg.txt" , "utf8" ,  (err  , data)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(data)
// })

////// can same with readFileSync

// ////// directly writing in to the file 

// fs.writeFile("./Nodelearn/msg.txt" , "\n goood morning" , (err)=>{
//     if(err){
//         console.log(err)
//         return    
//     }
//     console.log("wrtien in file")

// })


/// same use appendFile 
/// same use rename 


//// now Delete file unlink

// fs.unlink("./Nodelearn/msg.txt" , (err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log("FIle deleted")
// })
