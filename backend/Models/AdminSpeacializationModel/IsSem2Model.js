const mongoose=require('mongoose');
const sheet=mongoose.Schema;

const Is_Sem2=new sheet({

    description:[{ type: sheet.Types.Mixed }],
    url:{type:String},
    sdate:{type:Date},
    edate:{type:Date},
    semester:{type:String,default:"Sem2"},
    speacialization:{type:String,default:"IS"},
    week:{type:String}
})

const Is_Sem2_data=mongoose.model("Is_SEM2",Is_Sem2);
module.exports=Is_Sem2_data;
