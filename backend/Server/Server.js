const mongoose=require('mongoose')
const express=require('express')
const session = require('express-session');
const app=express();
const db=mongoose.connection;
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const proRoutes = require('../Controller/Routers/projectRegRoutes')
const resRoutes = require('../Controller/Routers/resPaperRoute')
const markRoutes = require('../Controller/Routers/MarkRoutes')
const exRoutes = require('../Controller/Routers/ExaminerMarkRoutes')

const {SessionControl}=require('../Controller/SessionControl');
const {RequireRole}=require('../Controller/Authentication');

require('dotenv').config();
app.use(cors());
app.use(bodyParser.json())
app.use(express.json());

app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

app.use(cookieParser());

const PORT=process.env.PORT || 3200;
const URL=process.env.DB_URL;


app.use(
    session({
      secret:process.env.SESSION_KEY,
      resave: false,
      saveUninitialized: true,         
      cookie: {
        maxAge:SessionControl,
        secure: false, // Set to true if using HTTPS
        httpOnly: true,
      },
      rolling: true, // Reset the session expiration on every request    
    })   
);


//create db connection 
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const NormalRoutes=require('../Controller/Routers/Routes');
app.use('/normalroutes',NormalRoutes);

const SignAndLogout=require('../Controller/Routers/SignInAndLogOut');
app.use('/loginAndSign',/*RequireRole([''])*/SignAndLogout);

const StudentRoutes = require('../Controller/Routers/studentRoutes');
app.use('/stRoutes', StudentRoutes);

//student routes
//const studentRoutes = require('../Controller/Routers/studentRoutes')
//app.use("/student", studentRoutes);

const StSignAndLogout=require('../Controller/Routers/StudentSigns');
app.use('/stloginAndSign',/*RequireRole([''])*/StSignAndLogout);

const AssignmentAdd=require('../Controller/Routers/AdminAssigmentAddRoute')
app.use("/AddAssi",AssignmentAdd);

db.on('error',(err)=>{
    console.error(`Mongodb connection error ${err}`)
})

db.once('open',()=>{
    console.log("db connection successs")
})


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})


app.use('/projects', proRoutes)
app.use('/research', resRoutes)
app.use('/mark', markRoutes)
app.use('/examiner', exRoutes)