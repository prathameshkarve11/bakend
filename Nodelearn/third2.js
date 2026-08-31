
import fs from "fs"
import { Transform } from "stream";
// //// writable stream 

// const streamw = fs.createWriteStream("Nodelearn/gh2.txt")

// streamw.write("hello \n")
//  streamw.write("whats you name?")
//  streamw.end()

const uppercase = new Transform({
    transform(chunk , encoding , callback){
        callback(
            null,
            chunk.toString().toUpperCase()
        )
    }
})

const readable  = fs.createReadStream("Nodelearn/gh.txt");
const writable = fs.createWriteStream("Nodelearn/gh2.txt")

readable.pipe(uppercase).pipe(writable)
