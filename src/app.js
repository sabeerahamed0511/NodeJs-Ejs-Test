const express = require("express");
const app = express();
const ejs = require("ejs");
const User = require("./models/userModel");

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.get("/", async (req, res) => {
    try {
        res.status(200).render("pages/Table.ejs")
    } catch (err) {
        res.status(404).send("404 Not found")
    }
})

app.get("/allUser", async (req, res) => {
    try {
        let allUser = await User.find();
        res.status(200).json(allUser);
    } catch (err) {
        res.status(404).send("404 Not found")
    }
})

app.post("/user", async (req, res) => {
    try {
        let newUser = await User(req.body);
        await newUser.save();
        res.redirect("/")
    } catch (err) {
        res.status(404).send("404 Not found")
    }
})

app.get("/user/add", async (req, res) => {
    try {
        res.status(200).render("pages/Form.ejs");
    } catch (err) {
        res.status(404).send("404 Not Found")
    }
})




module.exports = app;