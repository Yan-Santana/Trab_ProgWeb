const path = require("path");   
const express = require("express");
const app = express();

app.use("/LYFM", express.static(path.resolve(__dirname, "views")));

app.use("/api", express.json());

app.listen(3000, ()=>{
    console.log("Running at http://localhost:3000");
});