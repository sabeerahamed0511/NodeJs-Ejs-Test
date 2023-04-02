const app = require("./app");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Users")
.then(() => console.log("Connected to DB..."))
.catch(() => console.log("Erroe while connecting to DB..."))

app.listen(3000, () => console.log("server listening on port 3000..."));