const mongoose = require("mongoose");

const proSchema = mongoose.Schema({
    regNum: {
        type: String,
        unique: true,
    },
    stName: {
        type: String,
        required: [true, 'Please add student name']
    },
    telephone: {
        type: String,
        required: [true, 'Please add telephone number']
    },
    email: {
        type: String,
        required: [true, 'Please add email address']
    },
    batch: {
        type: String,
        required: [true, 'Please add the batch']
    },
    specialization: {
        type: String,
        required: [true, 'Please add specialization']
    },
    proTitle: {
        type: String,
        required: [true, 'Please add project title']
    },
    resArea: {
        type: String,
        required: [true, 'Please add research area']
    },
    classification: {
        type: String,
        required: [true, 'Please add classification']
    },
    supervisor: {
        type: String,
        required: [true, 'Please add supervisor']
    },
    coSupervisor: {
        type: String,
        required: [true, 'Please add profile co-supervisor']
    },
}, {
    timestamps: true
})

proSchema.index({
    regNum: 'text',
    stName: 'text',
    telephone: 'text',
    email: 'text',
    batch: 'text',
    specialization: 'text',
    proTitle: 'text',
    resArea: 'text',
    classification: 'text',
    supervisor: 'text',
    coSupervisor: 'text',
})

module.exports = mongoose.model('Projects', proSchema);
