const mongoose=require('mongoose');
const sheet=mongoose.Schema;

const Ds_Sem1=new sheet({

    description:[{ type: sheet.Types.Mixed }],
    url:{type:String},
    sdate:{type:Date},
    edate:{type:Date},
    semester:{type:String,default:"Sem1"},
    speacialization:{type:String,default:"DS"},
    week:{type:String}
})

const Ds_Sem1_data=mongoose.model("Ds_SEM1",Ds_Sem1);
module.exports=Ds_Sem1_data;
