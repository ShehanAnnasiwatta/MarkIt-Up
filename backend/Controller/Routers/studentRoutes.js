//const dataModel=require('../Model/Users_model');
const router=require('express').Router()
const express=require('express')

const app=express()



//Data add
router.route("/addStudent").post((req,res)=>{
     const email=req.body.email
     const password=req.body.password
    
     const addingData=new dataModel({
        email:email,
        password:password,
      })

     addingData.save().then(()=>{
        res.send("data added")
        console.log('data added');
     }).catch((err)=>{
        console.log('data added error'+err.message);
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
    let id=req.params.id;

   try {      
    dataModel.findById(id).then((data)=>{
        res.json(data)
    })

   } catch (error) {
     console.log("One data are read error "+error)
   }
})


//data delete
router.route("/deleteStudent/:id").delete(async(req,res)=>{
    let id=req.params.id;

    await dataModel.findByIdAndDelete(id).then(()=>{
         res.send("data deleted");
    }).catch((err)=>{
        res.send("Data not delete"+err)
    })
})

//data update
router.route("/updateStudent/:id").put(async(req,res)=>{
    let id=req.params.id;
    
    const{email,password}=req.body;

    const updateData=({email,password})

    try {
        await alldata.findByIdAndUpdate(id,updateData).then(()=>{
            res.send("data updated");
        })
    } catch (error) {
        res.send("Data not updated")
    }
})


module.exports = router;