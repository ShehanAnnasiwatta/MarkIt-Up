const mongoose=require('mongoose');
const sheet=mongoose.Schema;

const UsersData=new sheet({
    Fname:{
        type:String,
        required: true
    },

    Lname:{
        type: String,
        required: true
    },
    
    password: {
        type: String,
        required: true
    },
    role: {type:String, required: true},
    email: {type:String, required: true},
    phone: {type:String, required: true}

})

const Users_Data=mongoose.model("Admin_login_details", UsersData);
module.exports=Users_Data;