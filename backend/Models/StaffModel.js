const mongoose=require('mongoose');
const sheet=mongoose.Schema;

const StaffData=new sheet({

    name:{
        type:String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    IdNumber:{
        type: String,
        required: true
    },
    role1:{
        type: String,
        //required: true
    },
    role2:{
        type: String,
       // required: true
    },
    role3:{
        type: String,
        //required: true
    },
    role4:{
        type: String,
        //required: true
    }

});

const Staff_Data=mongoose.model("Staff_Data", StaffData);
module.exports=Staff_Data;