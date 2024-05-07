const mongoose = require("mongoose");

const proSchema = mongoose.Schema({
    regNum: {
        type: String,
        unique: true,
    },
    leader: {
        type: String,
        required: [false, 'Please add leader']
    },
    students: {
        type: [String],
        default: [],
    },
    telephone: {
        type: String,
        required: [false, 'Please add telephone number']
    },
    email: {
        type: String,
        required: [false, 'Please add email address']
    },
    batch: {
        type: String,
        required: [false, 'Please add the batch']
    },
    specialization: {
        type: String,
        required: [false, 'Please add specialization']
    },
    proTitle: {
        type: String,
        required: [false, 'Please add project title']
    },
    resArea: {
        type: String,
        required: [false, 'Please add research area']
    },
    classification: {
        type: String,
        required: [false, 'Please add classification']
    },
    supervisor: {
        type: String,
        required: [false, 'Please add supervisor']
    },
    coSupervisor: {
        type: String,
        required: [false, 'Please add profile co-supervisor']
    },
}, {
    timestamps: true
})

proSchema.index({
    regNum: 'text',
    students: 'text',
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
