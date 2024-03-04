const mongoose=require('mongoose')
const express=require('express')
const app=express();
const db=mongoose.connection;
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();
app.use(cors());
app.use(bodyParser.json())


const PORT=process.env.PORT || 3200;
const URL=process.env.DB_URL;



//create db connection 
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//const NormalRoutes=require('./Routers/Routes');
//app.use('/normalroutes',NormalRoutes);


db.on('error',(err)=>{
    console.error(`Mongodb connection error ${err}`)
})

db.once('open',()=>{
    console.log("db connection successs")
})


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})