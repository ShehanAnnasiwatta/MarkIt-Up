const mongoose = require('mongoose');
const sheet=mongoose.Schema

const RequestData=new sheet({
     name:{type:String, required:true},
     email:{type:String, required:true},
     role:{type:String, required:true},
     RequestData:{type:Boolean, required:true}
})

const reqData=mongoose.model("Requestdata_Handle",RequestData)
module.exports=reqData;