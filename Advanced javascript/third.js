///// async and await in js

async function orderpizza(which , howmany) {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("you pizza is ready !!!")
            console.log("your bill is : " + which + " " + howmany + " "+ 3444)
        }, 3000);
    })
    
}
let res = await orderpizza("marg" , 3)
console.log(res)