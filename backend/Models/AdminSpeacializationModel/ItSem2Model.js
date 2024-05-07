const mongoose=require('mongoose');
const sheet=mongoose.Schema;

const It_Sem2=new sheet({

    description:[{ type: sheet.Types.Mixed }],
    url:{type:String},
    sdate:{type:Date},
    edate:{type:Date},
    semester:{type:String,default:"Sem2"},
    speacialization:{type:String,default:"IT"},
    week:{type:String}
})

const It_Sem2_data=mongoose.model("It_SEM2",It_Sem2);
module.exports=It_Sem2_data;
