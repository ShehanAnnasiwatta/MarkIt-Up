const jwt=require('jsonwebtoken');
const cookieParser=require('cookie-parser');
const express=require('express');
const router=express.Router();
const cors=require('cors');
const nodemailer = require("nodemailer");
const ReqdataModel=require('../../Models/RequestTableModel')

const app=express();
require('dotenv').config();
app.use(cookieParser());

app.use(cors());

const UserActivation = require('../../Models/AdminUsers');

//get students data model
const StudentData = require('../../Models/StudentDataModel');

//get Staff data model
const StaffData = require('../../Models/StaffModel');

//If have the Problem time format and time value 
const options = { timeZone: 'Asia/Colombo', hour12:true};
const CurrentDate = new Date().toLocaleString('en-US', options);


//Authorized User

const AuthorizedUser=(req,res,next)=>{

     //get the corresponding token
       const token=req.cookies.token;
    
       if(!token){
        return res.json({message: 'User unauthorized'});
       }

        try{
            const decode=jwt.verify(token,process.env.JWT_KEY);
            req.user=decode
            next();
        }catch(e){
            return res.json({message: 'Unauthorized'});
        }
       

}


router.post('/signin', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // check username and pass with database data
  const user = await UserActivation.findOne({ email });
  console.log(user);

  // check username and pass with database data
  const userStudent = await StudentData.findOne({ Email: email });
  console.log(userStudent);

  const userStaff = await StaffData.findOne({ email: email });
  console.log(userStaff);

  if (user && (password === user.password) ) {
      // Create JWT Token
      const jwt_key = process.env.JWT_KEY;
      const token = jwt.sign({user:user}, jwt_key, { expiresIn: '1h' });

      // set token as a cookie
      res.cookie('token', token, { httpOnly: true, secure: false });

      req.session.user = { userEmail: user.email, role: user.role,Fname:user.Fname,Lname:user.Lname};

      console.log({ message: 'Login successful' });

      return res.json({ message: 'Login success as admin', user:user});
  } else if (userStudent && password === userStudent.IdNumber) {
      // Create JWT Token
      const jwt_key = process.env.JWT_KEY;
      const token = jwt.sign(
          { userStudent:userStudent},
          jwt_key,
          { expiresIn: '1h' }
      );

      // set token as a cookie
      res.cookie('token', token, { httpOnly: true, secure: false });

      req.session.user = { userEmail: userStudent.Email, role: userStudent.Specialization, StudentName: userStudent.StudentName};

      console.log({ message: 'Login successful' });

      return res.json({ message: 'Login success as student',user:userStudent});

  }else if(userStaff && password === userStaff.IdNumber){
    // Create JWT Token
    const jwt_key = process.env.JWT_KEY;
    const token = jwt.sign(
        {userStaff:userStaff},
        jwt_key,
        { expiresIn: '1h' }
    );

    // set token as a cookie
    res.cookie('token', token, { httpOnly: true, secure: false });

    req.session.user = { userEmail: userStaff.email,name:userStaff.name,role1: userStaff.role1, role2: userStaff.role2, role3: userStaff.role3, role4: userStaff.role4};

    console.log({ message: 'Login successful' });

    return res.json({ message: 'Login success as staff',user:userStaff});

  } else {
      // If no user found or incorrect password
      return res.json({ message: 'Login failed' });
  }
});


//Create student registration

router.post('/StudentRegister',async(req, res)=>{

  
  //Create JWT Token 
  const jwt_key=process.env.JWT_KEY;

  const token=jwt.sign({email:user.Email}, jwt_key,{expiresIn:'1h'});

  //set token as a cookie
  res.cookie('token',token,{httpOnly:true,secure:false});

  req.session.user={useEmail: user.Email};

  res.json({ message: 'Login successful',UserId:user._id});

  console.log({message: 'Login successful'});

})




router.route("/addReg").post((req,res)=>{

    const Fname=req.body.fname
    const Lname=req.body.lname
    const pass=req.body.password
    const role=req.body.role
    const email=req.body.email
    const phone=req.body.phone
    
   
    //To request table
    const RequestData=false;

    const addReqdata=new ReqdataModel({
          name:Fname+' '+Lname,
          email: email,
          role: role,
          RequestData:RequestData,
          currentDate:CurrentDate
    })

    const addingData=new UserActivation({
       Fname:Fname,
       Lname:Lname,
       password:pass,
       role:role,
       email:email,
       phone:phone
     })

    try {
        addReqdata.save()
        addingData.save()

       res.send({message:"Registratrion data added"})
       console.log('Registration data added');

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
          to:addingData.email, // list of receivers
          subject: "[MarkitUp]Registration Success", // Subject line
          text: "Hello world1", // plain text body
          html: "<b>Your registration was Success ..Please wait to the Cordinator accept your request </b>", // html body
        });
      
       
        console.log("Message sent: %s", info.messageId,nodemailer.getTestMessageUrl(info));
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
      }
         
      main().catch(console.error);
      
    } catch (error) {
         res.send({message:"Registratrion data added error: " + error.message})
    }


})

module.exports = router;

