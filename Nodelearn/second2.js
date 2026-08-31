import path from "path";
import fs from "fs";

//// path.join() for file path
const ghadress = path.resolve( "Nodelearn" , "gh.txt")

console.log(ghadress)

fs.writeFile(ghadress , "huuu" , (err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("writeen ")
})
