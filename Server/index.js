import mongoose from "mongoose";
import Cors from "cors";
import dotenv from "dotenv";
import express from "express"
import { CreateEmployee, DeleteEmployee, GetEmployee, UpdateEmployee } from "./Controller/Employee.js";

// import { configDotenv } from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT
app.use(express.json());
app.use(Cors());

app.post("/employee",CreateEmployee);
app.get("/employee",GetEmployee);
app.put("/employee",UpdateEmployee);
app.delete("/employee",DeleteEmployee);
 



mongoose.connect(process.env.DB_URL).then(()=>{
    //  app.listen(process.env.PORT()=>();)
console.log("database connected");
app.listen(process.env.PORT, () => console.log("Example app listening on port :!"+process.env.PORT));

}).catch((err)=>{
    console.log("Database Connection Error", err);
});