// fetch("https://bored-api.appbrewery.com/random")
// .then(response=>{
//     return response.json()
// })
// .then(data=>{
//     console.log(data)
// })
// .catch(err=>{
//     console.log(err)
// })

async function getdata(){
    try{
        let name = prompt("Enter name");
    const response = await fetch(`https://api.agify.io?name=${name}`);
    const data  =  await response.json();
    console.log(response.status)
    console.log(data)
    }
    catch(err){
        console.log(err)
    }
}

getdata()


///// run with browser not node