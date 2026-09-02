import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser("my-secret-key"));


// Create a signed cookie
app.get("/set", (req, res) => {
    res.cookie("username", "Prathu", {
        signed: true,
        httpOnly: true,
        maxAge: 60000
    });

    res.send("Signed cookie created");
});


// Read the signed cookie
app.get("/get", (req, res) => {
    console.log(req.signedCookies);

    res.send(`Username: ${req.signedCookies.username}`);
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});