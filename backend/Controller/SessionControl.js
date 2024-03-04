const express=require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');

app.use(cors());
app.use(cookieParser());
require('dotenv').config();

// Current user userId
const getUserRole = (req) => {
    return req.session.role;
};

const sessionControl = (req, res, next) => {
   
    try {
        req.session.cookie.maxAge== expireTime(getUserRole(req));
        return expireTime(getUserRole(req));
        
    } catch (e) {
       res.json({error:e});
    }
    
   
    next();
};


const expireTime=(userType)=>{

    if(userType=='examinner'){
        return 60*60*1000;  //for 1 hour
    }
    else if(userType=='member') {
        return 60*60*1000;
    }
    else if(userType=='Suppervisor' || userType=='CoSuppervisor'){
        return 60*60*1000;
    }


}

module.exports ={sessionControl};
