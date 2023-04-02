const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
    city : String,
    profession : String
});

const User = new mongoose.model("users", userSchema);

module.exports = User;