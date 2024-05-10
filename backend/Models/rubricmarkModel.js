const mongoose = require('mongoose')

const rubricmarkSchema = mongoose.Schema({
    specialization: {
        type: String,
        required: true
    },
    assignment: {
        type: String,
        required: true
    },
    SID: {
        type: String,
        required: true
    },
    totalMarks: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('rubricMark', rubricmarkSchema);

