const dataModel=require('../../Models/AdminUsers');
const requestTable=require('../../Models/RequestTableModel')
const studentDatamodel=require('../../Models/StudentDataModel')
const router=require('express').Router()
const express=require('express')
const nodemailer = require("nodemailer");

const app=express()

//Data add in register user
router.route("/add").post((req,res)=>{


     const Fname=req.body.Fname
     const Lname=req.body.Lname
     const pass=req.body.password
     const role=req.body.role
     const email=req.body.email
     const phone=req.body.phone

     const addingData=new dataModel({
        Fname:Fname,
        Lname:Lname,
        password:pass,
        role:role,
        email:email,
        phone:phone
      })

     addingData.save().then(()=>{
        res.send("data added")
        console.log('data added');
     }).catch((err)=>{
        console.log('data added error '+err.message);
     })

})

//data read in adminUsers
router.route("/allData").get(async(req,res)=>{
    dataModel.find().then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err.message);
        res.send({message:"Data not found"})
    })
})


//Data add in Students
router.route("/addStudent").post((req,res)=>{

    const Email=req.body.Email;
    const GroupNumber=req.body.GroupNumber;
    const IdNumber=req.body.IdNumber;
    const StudentName=req.body.StudentName;

    const addDataStudent=new studentDatamodel({
        Email:Email,GroupNumber:GroupNumber,IdNumber:IdNumber,StudentName:StudentName  //Semester:Semester
     })

    addDataStudent.save().then(()=>{
       res.send("data added")
       console.log('Student data added');
    }).catch((err)=>{
       console.log('Student Data Added Error '+err.message);
    })

})

//data read in adminUsers
router.route("/allData").get(async(req,res)=>{
   dataModel.find().then((data)=>{
       res.send(data)
   }).catch((err)=>{
       console.log(err.message);
       res.send({message:"Data not found"})
   })
})

//data read in requesttable
router.route("/allDataRequest").get(async(req,res)=>{
    requestTable.find().then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err.message);
        res.send({message:"Data not found requesttable"})
    })
})

//get one person data
router.route("/oneUser/:id").get(async(req,res)=>{
    const id=req.params.id;

   try {      
    dataModel.findById(id).then((data)=>{
        res.json(data)
    })

   } catch (error) {
     console.log("One data are read error "+error)
   }
})

//get one person email in requesttable
router.route("/oneUserEmail/:id").get(async(req,res)=>{
    const Uid=req.params.id;
    console.log(Uid);

   try {      
    dataModel.findById(Uid).then((data)=>{
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


//(Dont change this one)
//data update in requesttable and send emails to the Admin users
router.route("/updateReq/:id").put(async(req,res)=>{
    let id=req.params.id;

    
    const CurrentUser=await requestTable.findOne({_id:id});
    console.log(CurrentUser)

    const{name,email,role,RequestData}=req.body;
    const updateData=({name,email,role,RequestData})

    console.log("Sender True of the Access")
   
    try {
        await requestTable.findByIdAndUpdate(id,updateData).then(()=>{
            res.send({message:"data updated"});
            
            if(CurrentUser.RequestData===false){

                const transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 587,
                    secure: false, // Use `true` for port 465, `false` for all other ports
                    auth: {
                      user: "itpm322@gmail.com",
                      pass: "uipa omfn jvrt eatd",
                    },
                  });
                  
                  // async..await is not allowed in global scope, must use a wrapper
                  async function main() {
                    // send mail with defined transport object
                    const info = await transporter.sendMail({
                      from: "itpm322@gmail.com" , // sender address
                      to:CurrentUser.email, // list of receivers
                      subject: "[MarkitUp] Access Was Granted", // Subject line
                      text: "Hello world1", // plain text body
                      html: "<b> Welcome to the system and you can countinue working on the system from now on</b>", // html body
                    });
                  
                   
                    console.log("Message sent: %s", info.messageId,nodemailer.getTestMessageUrl(info));
                    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
                  }
                     
                  main().catch(console.error);
            }
            else if(CurrentUser.RequestData===true){


                const transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 587,
                    secure: false, // Use `true` for port 465, `false` for all other ports
                    auth: {
                      user: "itpm322@gmail.com",
                      pass: "uipa omfn jvrt eatd",
                    },
                  });
                  
                  // async..await is not allowed in global scope, must use a wrapper
                  async function main() {
                    // send mail with defined transport object
                    const info = await transporter.sendMail({
                      from: "itpm322@gmail.com" , // sender address
                      to:CurrentUser.email, // list of receivers
                      subject: "[MarkitUp]Acess Forbidden", // Subject line
                      text: "Hello world1", // plain text body
                      html: "<b>Your Access forbidden the System </b>", // html body
                    });
                  
                   
                    console.log("Message sent: %s", info.messageId,nodemailer.getTestMessageUrl(info));
                    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
                  }
                     
                  main().catch(console.error);

            }
        })
    } catch (error) {
        res.send({message:"Data not updated"})


    }
})


//data update
router.route("/update/:id").put(async(req,res)=>{
    let id=req.params.id;
    
    const{name,password,role}=req.body;

    const updateData=({name,password,role})

    try {
        await dataModel.findByIdAndUpdate(id,updateData).then(()=>{
            res.send("data updated");
        })
    } catch (error) {
        res.send("Data not updated")
    }
})


module.exports = router;