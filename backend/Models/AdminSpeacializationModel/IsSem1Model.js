const mongoose=require('mongoose');
const sheet=mongoose.Schema;

const Is_Sem1=new sheet({

    description:[{ type: sheet.Types.Mixed }],
    url:{type:String},
    sdate:{type:Date},
    edate:{type:Date},
    semester:{type:String,default:"Sem1"},
    speacialization:{type:String,default:"IS"},
    week:{type:String}
})

const Is_Sem1_data=mongoose.model("Is_SEM1",Is_Sem1);
module.exports=Is_Sem1_data;
