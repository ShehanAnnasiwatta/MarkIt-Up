const mongoose=require('mongoose');
const sheet=mongoose.Schema;

const Ds_Sem2=new sheet({

    description:[{ type: sheet.Types.Mixed }],
    url:{type:String},
    sdate:{type:Date},
    edate:{type:Date},
    semester:{type:String,default:"Sem2"},
    speacialization:{type:String,default:"DS"},
    week:{type:String}
})

const Ds_Sem2_data=mongoose.model("Ds_SEM2",Ds_Sem2);
module.exports=Ds_Sem2_data;
