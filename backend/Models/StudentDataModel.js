const mongoose = require('mongoose');
const sheet=mongoose.Schema

const AllStudentData=new sheet({
    Email:{type:String, required:true},
    GroupNumber:{type:String, required:true},
    IdNumber:{type:String, required:true},
    StudentName:{type:String, required:true}, 
    //Semester:{type:Number, required:true},
    year: {
        type: Number,
        required: true,
        default: new Date().getFullYear() // Set default value to current year
    }
})

const StudentData=mongoose.model("StudentData",AllStudentData)
module.exports=StudentData;