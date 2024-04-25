const mongoose=require('mongoose');
const sheet=mongoose.Schema;

const Cs_Sem2=new sheet({

    description:[{ type: sheet.Types.Mixed }],
    url:{type:String},
    sdate:{type:Date},
    edate:{type:Date},
    semester:{type:String,default:"Sem2"},
    speacialization:{type:String,default:"CS"},
    week:{type:String}
})

const Cs_Sem2_data=mongoose.model("Cs_SEM2",Cs_Sem2);
module.exports=Cs_Sem2_data;
