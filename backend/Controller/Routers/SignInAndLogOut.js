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



//get one Staff member data

router.route('/oneStaff/:aid').get((req, res) => {

  console.log(req.params.aid);

  StaffData.findOne({ email: req.params.aid })
    .then((staff) => {
      res.json(staff)
     console.log(staff)
    }
  )
    .catch((err) => res.status(400).json("data fetch error"));
});





module.exports = router;

