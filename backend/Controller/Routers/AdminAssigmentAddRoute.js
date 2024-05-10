const router=require('express').Router()
const express=require('express')


const SeSem1=require('../../Models/AdminSpeacializationModel/SeSem1Model')
const SeSem2=require('../../Models/AdminSpeacializationModel/SeSem2Model')
const ItSem2=require('../../Models/AdminSpeacializationModel/ItSem2Model')
const ItSem1=require('../../Models/AdminSpeacializationModel/ItSem1Model')
const IsSem1=require('../../Models/AdminSpeacializationModel/IsSem1Model')
const IsSem2=require('../../Models/AdminSpeacializationModel/IsSem2Model')
const DsSem1=require('../../Models/AdminSpeacializationModel/DsSem1Model')
const DsSem2=require('../../Models/AdminSpeacializationModel/DsSem2Model')
const CsSem1=require('../../Models/AdminSpeacializationModel/CsSem1Model')
const CsSem2=require('../../Models/AdminSpeacializationModel/CsSem2Model')
const CSNESem1=require('../../Models/AdminSpeacializationModel/CSNESem1Model')
const CSNESem2=require('../../Models/AdminSpeacializationModel/CSNESem2Model')


router.route("/SeSem1").post(async(req,res)=>{

    const{ description,url,sdate,edate,week}=req.body;

    try {

        const AddAssi=new SeSem1({
            description:description,
            url:url,
            sdate:sdate,
            edate:edate,
            //semester:semester,
            //speacialization:speacialization,
            week:week
        })

        AddAssi.save().then(()=>{
            console.log("assignment data Added");
            res.json("Assignment submitted")
        })
        
    } catch (error) {
        
        console.log("assignment data Added Error");
        res.json("Assignment Not submitted");
    }

})



router.route("/SeSem2").post(async(req,res)=>{

    const{ description,url,sdate,edate,week}=req.body;

    try {

        const AddAssi=new SeSem2({
            description:description,
            url:url,
            sdate:sdate,
            edate:edate,
            //semester:semester,
            //speacialization:speacialization,
            week:week
        })

        AddAssi.save().then(()=>{
            console.log("assignment data Added");
            res.json("Assignment submitted")
        })
        
    } catch (error) {
        
        console.log("assignment data Added Error");
        res.json("Assignment Not submitted");
    }

})


router.route("/ItSem1").post(async(req,res)=>{

    const{ description,url,sdate,edate,week}=req.body;

    try {

        const AddAssi=new ItSem1({
            description:description,
            url:url,
            sdate:sdate,
            edate:edate,
            //semester:semester,
            //speacialization:speacialization,
            week:week
        })

        AddAssi.save().then(()=>{
            console.log("assignment data Added");
            res.json("Assignment submitted")
        })
        
    } catch (error) {
        
        console.log("assignment data Added Error");
        res.json("Assignment Not submitted");
    }

})


router.route("/ItSem2").post(async(req,res)=>{

    const{ description,url,sdate,edate,week}=req.body;

    try {

        const AddAssi=new ItSem2({
            description:description,
            url:url,
            sdate:sdate,
            edate:edate,
            //semester:semester,
            //speacialization:speacialization,
            week:week
        })

        AddAssi.save().then(()=>{
            console.log("assignment data Added");
            res.json("Assignment submitted")
        })
        
    } catch (error) {
        
        console.log("assignment data Added Error");
        res.json("Assignment Not submitted");
    }

})


router.route("/IsSem1").post(async(req,res)=>{

    const{ description,url,sdate,edate,week}=req.body;

    try {

        const AddAssi=new IsSem1({
            description:description,
            url:url,
            sdate:sdate,
            edate:edate,
            //semester:semester,
            //speacialization:speacialization,
            week:week
        })

        AddAssi.save().then(()=>{
            console.log("assignment data Added");
            res.json("Assignment submitted")
        })
        
    } catch (error) {
        
        console.log("assignment data Added Error");
        res.json("Assignment Not submitted");
    }

})


router.route("/IsSem2").post(async(req,res)=>{

    const{ description,url,sdate,edate,week}=req.body;

    try {

        const AddAssi=new IsSem2({
            description:description,
            url:url,
            sdate:sdate,
            edate:edate,
            //semester:semester,
            //speacialization:speacialization,
            week:week
        })

        AddAssi.save().then(()=>{
            console.log("assignment data Added");
            res.json("Assignment submitted")
        })
        
    } catch (error) {
        
        console.log("assignment data Added Error");
        res.json("Assignment Not submitted");
    }

})


router.route("/DsSem1").post(async(req,res)=>{

    const{ description,url,sdate,edate,week}=req.body;

    try {

        const AddAssi=new DsSem1({
            description:description,
            url:url,
            sdate:sdate,
            edate:edate,
            //semester:semester,
            //speacialization:speacialization,
            week:week
        })

        AddAssi.save().then(()=>{
            console.log("assignment data Added");
            res.json("Assignment submitted")
        })
        
    } catch (error) {
        
        console.log("assignment data Added Error");
        res.json("Assignment Not submitted");
    }

})


router.route("/DsSem2").post(async(req,res)=>{

    const{ description,url,sdate,edate,week}=req.body;

    try {

        const AddAssi=new DsSem2({
            description:description,
            url:url,
            sdate:sdate,
            edate:edate,
            //semester:semester,
            //speacialization:speacialization,
            week:week
        })

        AddAssi.save().then(()=>{
            console.log("assignment data Added");
            res.json("Assignment submitted")
        })
        
    } catch (error) {
        
        console.log("assignment data Added Error");
        res.json("Assignment Not submitted");
    }

})


router.route("/CsSem1").post(async(req,res)=>{

    const{ description,url,sdate,edate,week}=req.body;

    try {

        const AddAssi=new CsSem1({
            description:description,
            url:url,
            sdate:sdate,
            edate:edate,
            //semester:semester,
            //speacialization:speacialization,
            week:week
        })

        AddAssi.save().then(()=>{
            console.log("assignment data Added");
            res.json("Assignment submitted")
        })
        
    } catch (error) {
        
        console.log("assignment data Added Error");
        res.json("Assignment Not submitted");
    }

})


router.route("/CsSem2").post(async(req,res)=>{

    const{ description,url,sdate,edate,week}=req.body;

    try {

        const AddAssi=new CsSem2({
            description:description,
            url:url,
            sdate:sdate,
            edate:edate,
            //semester:semester,
            //speacialization:speacialization,
            week:week
        })

        AddAssi.save().then(()=>{
            console.log("assignment data Added");
            res.json("Assignment submitted")
        })
        
    } catch (error) {
        
        console.log("assignment data Added Error");
        res.json("Assignment Not submitted");
    }

})


router.route("/CSNESem1").post(async(req,res)=>{

    const{ description,url,sdate,edate,week}=req.body;

    try {

        const AddAssi=new CSNESem1({
            description:description,
            url:url,
            sdate:sdate,
            edate:edate,
            //semester:semester,
            //speacialization:speacialization,
            week:week
        })

        AddAssi.save().then(()=>{
            console.log("assignment data Added");
            res.json("Assignment submitted")
        })
        
    } catch (error) {
        
        console.log("assignment data Added Error");
        res.json("Assignment Not submitted");
    }

})


router.route("/CSNESem2").post(async(req,res)=>{

    const{ description,url,sdate,edate,week}=req.body;

    try {

        const AddAssi=new CSNESem2({
            description:description,
            url:url,
            sdate:sdate,
            edate:edate,
            //semester:semester,
            //speacialization:speacialization,
            week:week
        })

        AddAssi.save().then(()=>{
            console.log("assignment data Added");
            res.json("Assignment submitted")
        })
        
    } catch (error) {
        
        console.log("assignment data Added Error");
        res.json("Assignment Not submitted");
    }

})

//delete items

router.route("/SeSem1Delete/:id").delete(async(req,res)=>{ 
    let id=req.params.id;
    await SeSem1.findByIdAndDelete(id).then(()=>{   
        res.json({message:"Assignment deleted"});
    }).catch((err)=>{  
        console.log(err.message);
        res.json({message:"Error with delete Assignment"});
     })
});

router.route("/SeSem2Delete/:id").delete(async(req,res)=>{ 
    let id=req.params.id;
    await SeSem2.findByIdAndDelete(id).then(()=>{   
        res.json({message:"Assignment deleted"});
    }).catch((err)=>{  
        console.log(err.message);
        res.json({message:"Error with delete Assignment"});
     })
    });


router.route("/ItSem1Delete/:id").delete(async(req,res)=>{
    let id=req.params.id;
    await ItSem1.findByIdAndDelete(id).then(()=>{   
        res.json({message:"Assignment deleted"});
    }).catch((err)=>{  
        console.log(err.message);
        res.json({message:"Error with delete Assignment"});
     })
    });

router.route("/ItSem2Delete/:id").delete(async(req,res)=>{
    let id=req.params.id;
    await ItSem2.findByIdAndDelete(id).then(()=>{   
        res.json({message:"Assignment deleted"});
    }).catch((err)=>{  
        console.log(err.message);
        res.json({message:"Error with delete Assignment"});
     })
    });


router.route("/IsSem1Delete/:id").delete(async(req,res)=>{
    let id=req.params.id;
    await IsSem1.findByIdAndDelete(id).then(()=>{   
        res.json({message:"Assignment deleted"});
    }).catch((err)=>{  
        console.log(err.message);
        res.json({message:"Error with delete Assignment"});
     })
    }
    );

router.route("/IsSem2Delete/:id").delete(async(req,res)=>{
    let id=req.params.id;
    await IsSem2.findByIdAndDelete(id).then(()=>{   
        res.json({message:"Assignment deleted"});
    }).catch((err)=>{  
        console.log(err.message);
        res.json({message:"Error with delete Assignment"});
     })
    });


router.route("/DsSem1Delete/:id").delete(async(req,res)=>{
    let id=req.params.id;
    await DsSem1.findByIdAndDelete(id).then(()=>{   
        res.json({message:"Assignment deleted"});
    }).catch((err)=>{  
        console.log(err.message);
        res.json({message:"Error with delete Assignment"});
     })
    });

router.route("/DsSem2Delete/:id").delete(async(req,res)=>{
    let id=req.params.id;
    await DsSem2.findByIdAndDelete(id).then(()=>{   
        res.json({message:"Assignment deleted"});
    }).catch((err)=>{  
        console.log(err.message);
        res.json({message:"Error with delete Assignment"});
     })
    });

router.route("/CsSem1Delete/:id").delete(async(req,res)=>{
    let id=req.params.id;
    await CsSem1.findByIdAndDelete(id).then(()=>{   
        res.json({message:"Assignment deleted"});
    }).catch((err)=>{  
        console.log(err.message);
        res.json({message:"Error with delete Assignment"});
     })
    });

router.route("/CsSem2Delete/:id").delete(async(req,res)=>{
    let id=req.params.id;
    await CsSem2.findByIdAndDelete(id).then(()=>{   
        res.json({message:"Assignment deleted"});
    }).catch((err)=>{  
        console.log(err.message);
        res.json({message:"Error with delete Assignment"});
     })
    });

router.route("/CSNESem1Delete/:id").delete(async(req,res)=>{
    let id=req.params.id;
    await CSNESem1.findByIdAndDelete(id).then(()=>{   
        res.json({message:"Assignment deleted"});
    }).catch((err)=>{  
        console.log(err.message);
        res.json({message:"Error with delete Assignment"});
     })
    });

router.route("/CSNESem2Delete/:id").delete(async(req,res)=>{
    let id=req.params.id;
    await CSNESem2.findByIdAndDelete(id).then(()=>{   
        res.json({message:"Assignment deleted"});
    }).catch((err)=>{  
        console.log(err.message);
        res.json({message:"Error with delete Assignment"});
     })
    });


//get items
router.route("/GetItSem1").get((req,res)=>{
    ItSem1.find().then((data)=>{
        res.json(data)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/GetItSem2").get((req,res)=>{
    ItSem2.find().then((data)=>{
        res.json(data)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/GetSeSem1").get((req,res)=>{
    SeSem1.find().then((data)=>{
        res.json(data)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/GetSeSem2").get((req,res)=>{
    SeSem2.find().then((data)=>{
        res.json(data)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/GetIsSem1").get((req,res)=>{
    IsSem1.find().then((data)=>{
        res.json(data)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/GetIsSem2").get((req,res)=>{
    IsSem2.find().then((data)=>{
        res.json(data)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/GetDsSem1").get((req,res)=>{
    DsSem1.find().then((data)=>{
        res.json(data)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/GetDsSem2").get((req,res)=>{
    DsSem2.find().then((data)=>{
        res.json(data)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/GetCsSem1").get((req,res)=>{
    CsSem1.find().then((data)=>{
        res.json(data)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/GetCsSem2").get((req,res)=>{
    CsSem2.find().then((data)=>{
        res.json(data)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/GetCSNESem1").get((req,res)=>{
    CSNESem1.find().then((data)=>{
        res.json(data)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/GetCSNESem2").get((req,res)=>{
    CSNESem2.find().then((data)=>{
        res.json(data)
    }).catch((err)=>{
        console.log(err);
    })
})



module.exports=router;

