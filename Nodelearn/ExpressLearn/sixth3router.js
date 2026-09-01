import express from "express"

const router = express.Router();

///controler 
const getusers = (req,res)=>{
    res.send("all users")
}

router.get("/", getusers);
router.get("/:id", (req, res) => {
    res.send("onee user");
});

export default router