import express from "express"


const app = express()

const users = [
    {id: 1, navv : "prathu"},
        {id: 2, navv : "prem"},
            {id: 4, navv :"nathu"}

]

app.get("/user/:id/:navv" , (req, res)=>{
    const user = users.find((u)=>{
       return (u.id === parseInt(req.params.id));
    })
    // res.json(user )
    res.send(`<h1> The USer id is ${user.id} and name is  ${user.navv} </h1>`)
})

app.listen(3000,()=>{
    console.log("runni g oin port 3000")
}
)

