require("dotenv").config();
const cors = require("cors");

const express = require("express");
const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

app.get('/test',(req,res)=>{
    res.json({msg:'test'})
});

const connect = require("./Config/db")
connect();

const adminRoutes = require("./Routes/usersRoutes");
const glRoutes = require("./Routes/glRoutes");
const accperRoutes = require("./Routes/accperRoutes");

app.use('/api/dashboard', adminRoutes)
app.use('/api/gl', glRoutes);
app.use('/api/accper', accperRoutes);

const port = process.env.PORT || 3000;
    
app.listen(port,()=>{
    console.log("Server Running");
});