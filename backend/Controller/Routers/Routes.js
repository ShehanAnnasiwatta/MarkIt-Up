const dataModel=require('../../Models/AdminUsers');
const requestTable=require('../../Models/RequestTableModel')
const studentDatamodel=require('../../Models/StudentDataModel')
const presentation = require('../../Models/presentationModel')
const router=require('express').Router()
const express=require('express')
const nodemailer = require("nodemailer");

const app=express()

//Data add in register user
router.route("/add").post(async(req,res)=>{


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

      const existingAdmin = await dataModel.findOne({ email:email });

        if (existingAdmin) {
            return res.send({error: `Already Used this email` });
        }

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
router.route("/addStudent").post(async (req, res) => {

    const { StudentName,Email,IdNumber,RegistrationNo,Specialization,Semester} = req.body;

    try {
        const existingStudent = await studentDatamodel.findOne({ Email: Email });

        if (existingStudent) {
            return res.send({ error: `Student already exists: ${existingStudent}` });
        }

        const addDataStudent = new studentDatamodel({
            StudentName: StudentName,
            Email: Email,
            IdNumber: IdNumber, 
            RegistrationNo:RegistrationNo,
            Specialization:Specialization,
            Semester:Semester
        });

        addDataStudent.save().then(() => {
            res.send("Data added");
            console.log('Student data added');
        });

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
                  to:Email,
                  subject: "[MarkitUp] Student Registered", // Subject line
                  text: "Hello world1", // plain text body
                  html: "<b> This is your final year projects working platform..Now your details registration was success.your password is :- Your Id card number and Your username is :- Your Student Registration number </b>", // html body
                });
              
               
                console.log("Message sent: %s", info.messageId,nodemailer.getTestMessageUrl(info));
                // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
              }
                 
              main().catch(console.error);

    } catch (err) {
        console.log('Error adding student data: ' + err.message);
        res.status(500).send("Error adding student data");
    }

});


//data read in adminUsers
router.route("/allData").get(async(req,res)=>{
   dataModel.find().then((data)=>{
       res.send(data)
   }).catch((err)=>{
       console.log(err.message);
       res.send({message:"Data not found"})
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

//get examiners only
router.route("/allExaminers").get(async (req, res) => {
    dataModel.find({ role: "Examinar" }).then((data) => {
        if (data.length > 0) {
            res.send(data);
        } else {
            res.send({ message: "No examiner data found" });
        }
    }).catch((err) => {
        console.log(err.message);
        res.send({ message: "Error retrieving data" });
    });
});



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



//get one person details using email in requesttable
router.route("/RequestTUserEmail/:email").get(async(req,res)=>{
    const email=req.params.email;
    console.log(email);

   try {      
    requestTable.findById(email).then((data)=>{
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

//create presentation
router.route("/addpresentation").post((req,res)=>{


    const type = req.body.type
    const group = req.body.group
    const date = req.body.date
    const startTime = req.body.startTime
    const endTime = req.body.endTime
    const location = req.body.location
    const examiners = req.body.examiners

    const addPresentation = new presentation({
       type,
       group,
       date,
       startTime,
       endTime,
       location,
       examiners
     })

     addPresentation.save().then(()=>{
       res.send("data added")
       console.log('data added');
    }).catch((err)=>{
       console.log('data added error '+err.message);
    })

})

//read all presentations
router.route("/presentations/all").get(async(req, res)=>{
    presentation.find().then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err.message);
        res.send({message:"Data not found"})
    })
 })

 //Delete presentations
router.route("/deletepresentation/:id").delete(async(req, res)=>{
    let id=req.params.id;

    await presentation.findByIdAndDelete(id).then(()=>{
         res.send("data deleted");
    }).catch((err)=>{
        res.send("presentation not delete" + err)
    })
})


//create marking rubric 
router.route('/addrubric')
  .post(async (req, res) => {
    try {
      const { specialization, criteria } = req.body;
      
      // Constructing the rubric object based on the model structure
      const rubric = new Rubric({ specialization, criteria });

      // Save the rubric to the database
      await rubric.save();

      res.status(201).json({ message: 'Rubric submitted successfully!' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

//read all marking rubrics
router.route("/rubrics/all").get(async(req,res)=>{
    Rubric.find().then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err.message);
        res.send({message:"Data not found"})
    })
 })


//read one marking rubric
router.route("/rubrics/:id").get(async(req,res)=>{
    const rid=req.params.id;
    console.log(rid);

   try {      
    Rubric.findById(rid).then((data)=>{
        res.json(data)
    })

   } catch (error) {
     console.log("Can not get rubric!" + error)
   }
})


module.exports = router;
