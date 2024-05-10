const mongoose = require('mongoose')

const rubricmarkSchema = mongoose.Schema({
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