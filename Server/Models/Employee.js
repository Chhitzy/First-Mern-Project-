import mongoose from "mongoose";

const EmployeeSchema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }
});

const EmployeeModel = mongoose.model("employee",EmployeeSchema);

export default EmployeeModel;