const mongoose=require('mongoose');
const sheet=mongoose.Schema;

const AssignmentAdd=new sheet({

    description:[{ type: sheet.Types.Mixed }],
    url:{type:String},
    sdate:{type:Date},
    edate:{type:Date}
})

const Assi_Data=mongoose.model("Assignment_Details",AssignmentAdd);
module.exports=Assi_Data;
