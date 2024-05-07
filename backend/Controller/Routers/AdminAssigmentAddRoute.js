const router=require('express').Router()
const express=require('express')


const SeSem1=require('../../Models/AdminSpeacializationModel/SeSem1Model')
const SeSem2=require('../../Models/AdminSpeacializationModel/SeSem2Model')
const ItSem2=require('../../Models/AdminSpeacializationModel/ItSem2Model')
const ItSem1=require('../../Models/AdminSpeacializationModel/ItSem1Model')
const IsSem1=require('../../Models/AdminSpeacializationModel/IsSem1Model')
const IsSem2=require('../../Models/AdminSpeacializationModel/IsSem2Model')
const DsSem1=require('../../Models/AdminSpeacializationModel/DsSem1Model')
const DsSem2=require('../../Models/AdminSpeacializationModel/DsSem2Model')
const CsSem1=require('../../Models/AdminSpeacializationModel/CsSem1Model')
const CsSem2=require('../../Models/AdminSpeacializationModel/CsSem2Model')
const CSNESem1=require('../../Models/AdminSpeacializationModel/CSNESem1Model')
const CSNESem2=require('../../Models/AdminSpeacializationModel/CSNESem2Model')


router.route("/SeSem1").post(async(req,res)=>{

    const{ description,url,sdate,edate,week}=req.body;

    try {

        const AddAssi=new SeSem1({
            description:description,
            url:url,
            sdate:sdate,
            edate:edate,
            //semester:semester,
            //speacialization:speacialization,
            week:week
        })

        AddAssi.save().then(()=>{
            console.log("assignment data Added");
            res.json("Assignment submitted")
        })
        
    } catch (error) {
        
        console.log("assignment data Added Error");
        res.json("Assignment Not submitted");
    }

})



router.route("/SeSem2").post(async(req,res)=>{

    const{ description,url,sdate,edate,week}=req.body;

    try {

        const AddAssi=new SeSem2({
            description:description,
            url:url,
            sdate:sdate,
            edate:edate,
            //semester:semester,
            //speacialization:speacialization,
            week:week
        })

        AddAssi.save().then(()=>{
            console.log("assignment data Added");
            res.json("Assignment submitted")
        })
        
    } catch (error) {
        
        console.log("assignment data Added Error");
        res.json("Assignment Not submitted");
    }

})


router.route("/ItSem1").post(async(req,res)=>{

    const{ description,url,sdate,edate,week}=req.body;

    try {

        const AddAssi=new ItSem1({
            description:description,
            url:url,
            sdate:sdate,
            edate:edate,
            //semester:semester,
            //speacialization:speacialization,
            week:week
        })

        AddAssi.save().then(()=>{
            console.log("assignment data Added");
            res.json("Assignment submitted")
        })
        
    } catch (error) {
        
        console.log("assignment data Added Error");
        res.json("Assignment Not submitted");
    }

})


router.route("/ItSem2").post(async(req,res)=>{

    const{ description,url,sdate,edate,week}=req.body;

    try {

        const AddAssi=new ItSem2({
            description:description,
            url:url,
            sdate:sdate,
            edate:edate,
            //semester:semester,
            //speacialization:speacialization,
            week:week
        })

        AddAssi.save().then(()=>{
            console.log("assignment data Added");
            res.json("Assignment submitted")
        })
        
    } catch (error) {
        
        console.log("assignment data Added Error");
        res.json("Assignment Not submitted");
    }

})


router.route("/IsSem1").post(async(req,res)=>{

    const{ description,url,sdate,edate,week}=req.body;

    try {

        const AddAssi=new IsSem1({
            description:description,
            url:url,
            sdate:sdate,
            edate:edate,
            //semester:semester,
            //speacialization:speacialization,
            week:week
        })

        AddAssi.save().then(()=>{
            console.log("assignment data Added");
            res.json("Assignment submitted")
        })
        
    } catch (error) {
        
        console.log("assignment data Added Error");
        res.json("Assignment Not submitted");
    }

})


router.route("/IsSem2").post(async(req,res)=>{

    const{ description,url,sdate,edate,week}=req.body;

    try {

        const AddAssi=new IsSem2({
            description:description,
            url:url,
            sdate:sdate,
            edate:edate,
            //semester:semester,
            //speacialization:speacialization,
            week:week
        })

        AddAssi.save().then(()=>{
            console.log("assignment data Added");
            res.json("Assignment submitted")
        })
        
    } catch (error) {
        
        console.log("assignment data Added Error");
        res.json("Assignment Not submitted");
    }

})


router.route("/DsSem1").post(async(req,res)=>{

    const{ description,url,sdate,edate,week}=req.body;

    try {

        const AddAssi=new DsSem1({
            description:description,
            url:url,
            sdate:sdate,
            edate:edate,
            //semester:semester,
            //speacialization:speacialization,
            week:week
        })

        AddAssi.save().then(()=>{
            console.log("assignment data Added");
            res.json("Assignment submitted")
        })
        
    } catch (error) {
        
        console.log("assignment data Added Error");
        res.json("Assignment Not submitted");
    }

})


router.route("/DsSem2").post(async(req,res)=>{

    const{ description,url,sdate,edate,week}=req.body;

    try {

        const AddAssi=new DsSem2({
            description:description,
            url:url,
            sdate:sdate,
            edate:edate,
            //semester:semester,
            //speacialization:speacialization,
            week:week
        })

        AddAssi.save().then(()=>{
            console.log("assignment data Added");
            res.json("Assignment submitted")
        })
        
    } catch (error) {
        
        console.log("assignment data Added Error");
        res.json("Assignment Not submitted");
    }

})


router.route("/CsSem1").post(async(req,res)=>{

    const{ description,url,sdate,edate,week}=req.body;

    try {

        const AddAssi=new CsSem1({
            description:description,
            url:url,
            sdate:sdate,
            edate:edate,
            //semester:semester,
            //speacialization:speacialization,
            week:week
        })

        AddAssi.save().then(()=>{
            console.log("assignment data Added");
            res.json("Assignment submitted")
        })
        
    } catch (error) {
        
        console.log("assignment data Added Error");
        res.json("Assignment Not submitted");
    }

})


router.route("/CsSem2").post(async(req,res)=>{

    const{ description,url,sdate,edate,week}=req.body;

    try {

        const AddAssi=new CsSem2({
            description:description,
            url:url,
            sdate:sdate,
            edate:edate,
            //semester:semester,
            //speacialization:speacialization,
            week:week
        })

        AddAssi.save().then(()=>{
            console.log("assignment data Added");
            res.json("Assignment submitted")
        })
        
    } catch (error) {
        
        console.log("assignment data Added Error");
        res.json("Assignment Not submitted");
    }

})


router.route("/CSNESem1").post(async(req,res)=>{

    const{ description,url,sdate,edate,week}=req.body;

    try {

        const AddAssi=new CSNESem1({
            description:description,
            url:url,
            sdate:sdate,
            edate:edate,
            //semester:semester,
            //speacialization:speacialization,
            week:week
        })

        AddAssi.save().then(()=>{
            console.log("assignment data Added");
            res.json("Assignment submitted")
        })
        
    } catch (error) {
        
        console.log("assignment data Added Error");
        res.json("Assignment Not submitted");
    }

})


router.route("/CSNESem2").post(async(req,res)=>{

    const{ description,url,sdate,edate,week}=req.body;

    try {

        const AddAssi=new CSNESem2({
            description:description,
            url:url,
            sdate:sdate,
            edate:edate,
            //semester:semester,
            //speacialization:speacialization,
            week:week
        })

        AddAssi.save().then(()=>{
            console.log("assignment data Added");
            res.json("Assignment submitted")
        })
        
    } catch (error) {
        
        console.log("assignment data Added Error");
        res.json("Assignment Not submitted");
    }

})

module.exports=router;

