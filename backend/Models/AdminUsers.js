const mongoose=require('mongoose');
const sheet=mongoose.Schema;

const UsersData=new sheet({
    name:{
        type: 'string',
        required: true
    },
    
    password: {
        type: 'string',
        required: true
    },
    role: {type: 'string', required: true},
    email: {type: 'string', required: true},
    phone: {type: 'string', required: true}

})

const Users_Data=mongoose.model("Admin_login_details", UsersData);
module.exports=Users_Data;