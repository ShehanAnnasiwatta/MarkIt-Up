const dataModel=require('../../Models/StudentSignup');
const router=require('express').Router()
const express=require('express')

const app=express()

//Data add
router.route("/add").post((req,res)=>{

     const Sname=req.body.Sname
     const Password=req.body.Password
     const RegisterNum=req.body.RegisterNum
     const Email=req.body.Email
     const Phone=req.body.Phone
     const Batch=req.body.Batch
     const Specialization=req.body.Specialization

     const addingData=new dataModel({
        Sname:Sname,
        Password:Password,
        RegisterNum:RegisterNum,
        Email:Email,
        Phone:Phone,
        Batch:Batch,
        Specialization:Specialization,
      })

     addingData.save().then(()=>{
        res.send("data added")
        console.log('data added');
     }).catch((err)=>{
        console.log('data added error '+err.message);
     })

})

//data read
router.route("/").get(async(req,res)=>{
    dataModel.find().then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err.message);
        res.send(err.message)
    })
})

//get one person data
router.route("/oneStudent/:id").get(async(req,res)=>{
    const id=req.params.id;

   try {      
    dataModel.findById(id).then((data)=>{
        res.json(data)
    })

   } catch (error) {
     console.log("One data are read error "+error)
   }
})


//data delete
router.route("/delete/:id").delete(async(req,res)=>{
    let id=req.params.id;

    await dataModel.findByIdAndDelete(id).then(()=>{
         res.send("data deleted");
    }).catch((err)=>{
        res.send("Data not delete"+err)
    })
})

//data update
router.route("/update/:id").put(async(req,res)=>{
    let id=req.params.id;
    
    const{Password}=req.body;

    const updateData=({Password})

    try {
        await alldata.findByIdAndUpdate(id,updateData).then(()=>{
            res.send("data updated");
        })
    } catch (error) {
        res.send("Data not updated")
    }
})


module.exports = router;