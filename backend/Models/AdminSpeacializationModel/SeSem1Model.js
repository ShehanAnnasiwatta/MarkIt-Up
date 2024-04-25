const mongoose=require('mongoose');
const sheet=mongoose.Schema;

const Se_Sem1=new sheet({

    description:[{ type: sheet.Types.Mixed }],
    url:{type:String},
    sdate:{type:Date},
    edate:{type:Date},
    semester:{type:String,default:"Sem1"},
    speacialization:{type:String,default:"SE"},
    week:{type:String,required:true}
})

const Se_Sem1_data=mongoose.model("Se_SEM1",Se_Sem1);
module.exports=Se_Sem1_data;
