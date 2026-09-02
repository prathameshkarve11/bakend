import express from "express";
import session from "express-session";

const app = express();

app.use(
    session({
        secret: "my-secret-key",
        resave: false,
        saveUninitialized: false
    })
);


// Create / store session data
app.get("/login", (req, res) => {

    req.session.username = "Prathu";

    res.send("Logged in");
});


// Read session data
app.get("/profile", (req, res) => {

    console.log(req.session);

    res.send(`Hello ${req.session.username}`);
});


// Destroy session
app.get("/logout", (req, res) => {

    req.session.destroy((err) => {

        if (err) {
            return res.send("Could not logout");
        }

        res.send("Logged out");
    });
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});