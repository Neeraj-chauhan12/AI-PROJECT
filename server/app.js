const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors");
const {connectDB}=require("./src/dbConnections/connection");
dotenv.config();


const app=express();

app.use(express.json());
app.use(cors());



connectDB();


const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})