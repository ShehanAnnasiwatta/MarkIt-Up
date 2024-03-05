// studentController.js
const express = require('express')
const Student = require('../Models/studentModel')
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
   return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

const loginStudent = async (req, res) => {
    const {email, password} = req.body
    try {
        const student = await Student.login(email, password) 
        const token = createToken(student._id)
        res.status(200).json({email: student.email, token}) // Fixed response
    } catch(error) {
        res.status(401).json({error: error.message})
    }
}

const signupStudent = async (req, res) => {
    const {email, password} = req.body
    try {
        const student = await Student.signup(email,password);
        const token = createToken(student._id)
        res.status(200).json({email: student.email, student}) // Fixed response
    } catch(error) {
        res.status(409).json({error: error.message})
    }
}

module.exports = { loginStudent, signupStudent }
