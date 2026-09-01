import express from "express"
const app = express()

const users = [
    {id: 1, navv: "prathu"},
    {id: 2, navv: "prem"},
    {id: 3, navv: "nathu"},
    {id: 4, navv: "rahul"},
    {id: 5, navv: "priya"},
    {id: 6, navv: "aman"},
    {id: 7, navv: "kiran"},
    {id: 8, navv: "sanjay"},
    {id: 9, navv: "meena"},
    {id: 10, navv: "vikas"},
    {id: 11, navv: "pooja"},
    {id: 12, navv: "arjun"},
    {id: 13, navv: "neha"},
    {id: 14, navv: "rohit"},
    {id: 15, navv: "sneha"},
    {id: 16, navv: "kunal"},
    {id: 17, navv: "divya"},
    {id: 18, navv: "manoj"},
    {id: 19, navv: "anita"},
    {id: 20, navv: "suresh"},
    {id: 21, navv: "kavya"},
    {id: 22, navv: "ravi"},
    {id: 23, navv: "shreya"},
    {id: 24, navv: "vijay"},
    {id: 25, navv: "asha"},
    {id: 26, navv: "deepak"},
    {id: 27, navv: "rekha"},
    {id: 28, navv: "sunil"},
    {id: 29, navv: "geeta"},
    {id: 30, navv: "ajay"},
    {id: 31, navv: "usha"},
    {id: 32, navv: "mohan"},
    {id: 33, navv: "lata"},
    {id: 34, navv: "naresh"},
    {id: 35, navv: "seema"},
    {id: 36, navv: "harish"},
    {id: 37, navv: "vandana"},
    {id: 38, navv: "yogesh"},
    {id: 39, navv: "radha"},
    {id: 40, navv: "sachin"},
    {id: 41, navv: "kirti"},
    {id: 42, navv: "gaurav"},
    {id: 43, navv: "anjali"},
    {id: 44, navv: "pankaj"},
    {id: 45, navv: "sunita"},
    {id: 46, navv: "vivek"},
    {id: 47, navv: "manisha"},
    {id: 48, navv: "raj"},
    {id: 49, navv: "swati"},
    {id: 50, navv: "abhishek"}
]

app.get("/user" , (req, res)=>{
    // const user = users.find((u)=>{
    //     return u.id === parseInt(req.query.id)
    // })

    // res.send(`<h1> The userr is : Name : ${user.navv}`)
    res.send(req.query.navv )
})

app.listen(3000,()=>{
    console.log("runni g oin port 3000")
}
)

