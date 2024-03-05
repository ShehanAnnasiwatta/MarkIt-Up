// studentModel.js
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const studentSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

// studentSchema.statics.signup = async(email, password) => {
//     if(!email || !password){
//         throw Error('All fields must be filled')
//     }
//     if(!validator.isEmail(email)){
//         throw Error("Invalid Email")
//     }
//     if(!validator.isStrongPassword(password)) {
//         throw Error('Weak Password')
//     }

//     const exists = await this.findOne({ email }) // Corrected query

//     if(exists) {
//         throw Error('Email already in use')
//     }

//     const salt = await bcrypt.genSalt(10)
//     const hash = await bcrypt.hash(password, salt)

//     const student = await this.create({email, password: hash})

//     return student 
// }

// studentSchema.statics.login = async function(email, password){
//     if (!email || !password) {
//         throw Error('All fields must be filled')
//     }

//     const student = await this.findOne({ email })

//     if(!student) { // Corrected condition
//         throw Error('Incorrect email')
//     }

//     const match = await bcrypt.compare(password, student.password) // Fixed comparison

//     if (!match){
//         throw  Error('Incorrect password')
//     }

//     return student
// }

module.exports = mongoose.model("Student", studentSchema)
