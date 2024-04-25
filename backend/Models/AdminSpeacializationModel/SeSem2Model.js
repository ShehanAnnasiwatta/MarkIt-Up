const mongoose=require('mongoose');
const sheet=mongoose.Schema;

const Se_Sem2=new sheet({

    description:[{ type: sheet.Types.Mixed }],
    url:{type:String},
    sdate:{type:Date},
    edate:{type:Date},
    semester:{type:String,default:"Sem2"},
    speacialization:{type:String,default:"SE"},
    week:{type:String}
})

const Se_Sem2_data=mongoose.model("Se_SEM2",Se_Sem2);
module.exports=Se_Sem2_data;
