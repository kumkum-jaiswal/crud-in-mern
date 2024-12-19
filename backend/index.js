const express = require("express");
const app=express();
const bodyparser = require('body-parser')
const cors= require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const stuRoute= require("./routes/studentRoute");
mongoose.connect(process.env.DBCONNECTION).then(()=>{
    console.log("DB Succesfully Connected");
});
const port=process.env.PORT || 3000
app.use(cors());
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use("/students", stuRoute);
app.listen(port, ()=>{
    console.log(`server run on ${port}!!!`);
})