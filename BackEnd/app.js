require("dotenv").config();
const cors = require("cors");

const express = require("express");
const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));

const path = require("path");

app.use("/Uploads", express.static(path.join(__dirname, "Uploads")));

app.use(express.json());

app.get('/test',(req,res)=>{
    res.json({msg:'test'})
});

const connect = require("./Config/db")
connect();

const adminRoutes = require("./Routes/usersRoutes");
const glRoutes = require("./Routes/glRoutes");
const accperRoutes = require("./Routes/accperRoutes");
const jour_lRoutes = require("./Routes/Journal_lRoutes")

app.use('/api/dashboard', adminRoutes)
app.use('/api/gl', glRoutes);
app.use('/api/accper', accperRoutes);
app.use('/api/jour_l', jour_lRoutes);

const port = process.env.PORT || 3000;
    
app.listen(port,()=>{
    console.log("Server Running");
});