const mongoose=require('mongoose');
const sheet=mongoose.Schema;

const It_Sem1=new sheet({

    description:[{ type: sheet.Types.Mixed }],
    url:{type:String},
    sdate:{type:Date},
    edate:{type:Date},
    semester:{type:String,default:"Sem1"},
    speacialization:{type:String,default:"IT"},
    week:{type:String}
})

const It_Sem1_data=mongoose.model("It_SEM1",It_Sem1);
module.exports=It_Sem1_data;
