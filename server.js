const express = require("express");
const recordRoutes = require("./routes/user.js");
const {DataBase} = require("./database/db.js")
require("dotenv");

const app = express();
const PORT = process.env.PORT || 3000;

// DataBase Connection 
DataBase()

// Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Welcome to the Server");
});

app.use("/api/user", recordRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
