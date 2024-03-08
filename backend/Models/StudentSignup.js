const mongoose=require('mongoose');
const sheet=mongoose.Schema;

const StudentData=new sheet({
    Sname:{
        type: 'string',
        required: true
    },
    
    Password: {
        type: 'string',
        required: true
    },
    RegisterNum: {
        type: 'string', 
        required: true
    },
    Email: {
        type: 'string', 
        required: true
    },
    Phone: {
        type: 'number', 
        required: true
    },
    Batch: {
        type: 'string', 
        required: true
    },
    Specialization: {
        type: 'string', 
        required: true
    }


})

const Student_Data=mongoose.model("Student_login_details", StudentData);
module.exports=Student_Data;