const mongoose=require('mongoose');
const sheet=mongoose.Schema;

const CSNE_Sem2=new sheet({

    description:[{ type: sheet.Types.Mixed }],
    url:{type:String},
    sdate:{type:Date},
    edate:{type:Date},
    semester:{type:String,default:"Sem2"},
    speacialization:{type:String,default:"CSNE"},
    week:{type:String}
})

const CSNE_Sem2_data=mongoose.model("CSNE_SEM2",CSNE_Sem2);
module.exports=CSNE_Sem2_data;
