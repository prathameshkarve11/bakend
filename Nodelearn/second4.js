/////// even in node 

import { EventEmitter } from "events";


////// on login do this function    ,,,,, once is used to listen only once  ,,, off is uset o stop listeing 

const myevent  = new EventEmitter();
myevent.on("login" , (user)=>{
    console.log("user logged in " + user)
})

////// emmiting an event 

myevent.emit("login" , "prathu")