const mongoose=require('mongoose');
const sheet=mongoose.Schema;

const CSNE_Sem1=new sheet({

    description:[{ type: sheet.Types.Mixed }],
    url:{type:String},
    sdate:{type:Date},
    edate:{type:Date},
    semester:{type:String,default:"Sem1"},
    speacialization:{type:String,default:"CSNE"},
    week:{type:String}
})

const CSNE_Sem1_data=mongoose.model("CSNE_SEM1",CSNE_Sem1);
module.exports=CSNE_Sem1_data;
