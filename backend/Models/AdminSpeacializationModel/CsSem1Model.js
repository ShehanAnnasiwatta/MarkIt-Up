const mongoose=require('mongoose');
const sheet=mongoose.Schema;

const Cs_Sem1=new sheet({

    description:[{ type: sheet.Types.Mixed }],
    url:{type:String},
    sdate:{type:Date},
    edate:{type:Date},
    semester:{type:String,default:"Sem1"},
    speacialization:{type:String,default:"CS"},
    week:{type:String}
})

const Cs_Sem1_data=mongoose.model("Cs_SEM1",Cs_Sem1);
module.exports=Cs_Sem1_data;
