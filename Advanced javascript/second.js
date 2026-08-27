/////objec in javascript



// let user = {
//     name : "prathu", 
//     age : 56,
//     rollno : 45.334
// }

// console.log(user.age)

////// parsing json iinto javasript object 

// const data = '{"Name" : "prathu" , "age": 56}'

// const user = JSON.parse(data)
// console.log(data)
// console.log(user)


///// stringify converting object into json 

// let ubj = {
//     color : "yellow",
//     num : 45
// }

// const data = JSON.stringify(ubj)

// console.log(data)

////// APi style json fetching for browser

// fetch('./sec.json')
// .then(response => response.json())
// .then(data =>{
//     console.log(data)
// })



///// callback in javascriopt

// function show(a , callback){
//     console.log(a)
//     callback(a)
// }

// show(34,(a)=>{
//     console.log("this is arrow function inside callback" + a)
// } )

// function breakk(a , carstop){
//     console.log("car breakes up at km :"+ a)
//     carstop()
// }

// breakk(12, ()=>{
//     console.log("car stopped")
// })

//////// promise 

// const download  = new Promise((resolve, reject)=>{
//     let downloadecomplete =false

//     if(downloadecomplete){
//         resolve("the downlod is complete");
//     }
//     else{
//         reject("the file not downloadeds")
//     }
// })

// download
// .then(msg =>{
//     console.log(msg)
// })
// .catch(err =>{
//     console.log(err)
// })


// const call = new Promise((resolve , reject)=>{
//     let callpicked = 0

//     if(callpicked){
//         resolve("call picked") ;

//     }
//     else{
//         reject("call rejected")

//     }
// })

// call 
// .then(msg=>{
//     console.log(msg)
// })
// .catch(err=>{
//     console.log(err)
// })




