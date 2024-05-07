const mongoose = require("mongoose");

const markSchema = mongoose.Schema({
    groupId: {
        type: String,
        unique: true,
    },
    proposal: {
        type: String,
        required: [true, 'Please add student name']
    },
    progress1: {
        type: String,
        required: [true, 'Please add telephone number']
    },
    progress2: {
        type: String,
        required: [true, 'Please add email address']
    },
    finalPresentation: {
        type: String,
        required: [true, 'Please add the batch']
    },
}, {
    timestamps: true
})

markSchema.index({
    groupId: 'text',
    proposal: 'text',
    progress1: 'text',
    progress2: 'text',
    finalPresentation: 'text',
})

module.exports = mongoose.model('Marks', markSchema);
