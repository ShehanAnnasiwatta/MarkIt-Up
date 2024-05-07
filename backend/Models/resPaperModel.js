const mongoose = require("mongoose");

const resPaperSchema = mongoose.Schema({
    groupId: {
        type: String,
        unique: true,
    },
    title: {
        type: String,
        required: [true, 'Please add title']
    },
    student: {
        type: String,
        required: [true, 'Please add student']
    },
    supervisor: {
        type: String,
        required: [true, 'Please add supervisor']
    },
    coSupervisor: {
        type: String,
        required: [true, 'Please add co supervisor']
    },
    conference: {
        type: String,
        required: [true, 'Please add conference']
    },
    journal: {
        type: String,
        required: [true, 'Please add journal']
    },
    issnNum: {
        type: String,
        required: [true, 'Please add ISSN Number']
    },
    conJouLink: {
        type: String,
        required: [true, 'Please add con/journal link']
    },
    verLink: {
        type: String,
        required: [true, 'Please add verification link']
    },
    acceptPhoto: {
        type: String,
        required: [true, 'Please add acceptence photo']
    },
    successPhoto: {
        type: String,
        required: [true, 'Please add success photo']
    },
    selectedCurrency: {
        type: String,
        required: [false, 'Please add usd']
    },
   
    fee: {
        type: String,
        required: [false, 'Please add fee']
    },
}, {
    timestamps: true
})

resPaperSchema.index({
    groupId: 'text',
    title: 'text',
    student: 'text',
    supervisor: 'text',
    coSupervisor: 'text',
    conference: 'text',
    journal: 'text',
    issnNum: 'text',
    conJouLink: 'text',
    verLink: 'text',
    acceptPhoto: 'text',
    successPhoto: 'text',
    usd: 'text',
    lkr: 'text',
    fee: 'text',
})

module.exports = mongoose.model('research', resPaperSchema);
