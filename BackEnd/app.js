require("dotenv").config();


const express = require("express");
const app = express();

app.use(express.json());

app.get('/test',(req,res)=>{
    res.json({msg:'test'})
});

const connect = require("./Config/db")
connect();

const port = process.env.PORT || 3000;
    
app.listen(port,()=>{
    console.log("Server Running");
});