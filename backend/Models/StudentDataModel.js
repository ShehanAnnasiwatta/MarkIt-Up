const mongoose = require('mongoose');
const sheet=mongoose.Schema

const AllStudentData=new sheet({
    StudentName:{type:String, required:true}, 
    Email:{type:String, required:true},
    IdNumber:{type:String, required:true},
    RegistrationNo:{type:String,required:true},
    Specialization:{type:String, required:true},
    Semester:{type:Number, required:true},
    year: {
        type: Number,
        required: true,
        default: new Date().getFullYear() // Set default value to current year
    }
})

const StudentData=mongoose.model("StudentData",AllStudentData)
module.exports=StudentData;