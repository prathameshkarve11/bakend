import express from "express"
import router from "./sixth3router.js"
const app = express();

app.use("/users" , router)

app.listen(3000, ()=> console.log("running on port 3000"))