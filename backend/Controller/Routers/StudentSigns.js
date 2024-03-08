const jwt=require('jsonwebtoken');
const cookieParser=require('cookie-parser');
const express=require('express');
const router=express.Router();
const cors=require('cors');

const app=express();
require('dotenv').config();
app.use(cookieParser());

app.use(cors());

const StudentActivation = require('../../Models/StudentSignup');

//Authorized User

const AuthorizedStudent=(req,res,next)=>{

     //get the corresponding token
       const token=req.cookies.token;
    
       if(!token){
        return res.json({error: 'Student unauthorized'});
       }
        try{
            const decode=jwt.verify(token,process.env.JWT_KEY);
            req.student=decode
            next();
        }catch(e){
            return res.json({error: 'Unauthorized'});
        }
       

}


router.post('/stsignin',async(req, res)=>{

    const Email=req.body.Email
    const Password=req.body.Password

    //check username and pass with database data
    const student=await StudentActivation.findOne({Email});
    console.log(student);

    if (!student || Password !== student.Password) {
        return res.json({ error: "Invalid credentials" });
      }
    
    //Create JWT Token 
    const jwt_key=process.env.JWT_KEY;

    const token=jwt.sign({Email:student.Email}, jwt_key,{expiresIn:'1h'});

    //set token as a cookie
    res.cookie('token',token,{httpOnly:true,secure:false});

    req.session.student={stEmail: student.Email};

    res.json({ message: 'Login successful' });
    console.log({message: 'Login successful'});

})


//sign out route
router.post('/stsignout',AuthorizedStudent,(req,res) =>{

    //kill the session
    req.session.destroy();

    //Clear the jwt token by expiring the cookie
    res.cookie('token','',{expires:new Date(),httpOnly:true,secure:false});

    res.json({message:"logout successfull"});
    console.log("logout Success");
})

module.exports = router;

