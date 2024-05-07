const mongoose = require("mongoose");

const examinerMarkSchema = mongoose.Schema({
    groupNum: {
        type: String,
        unique: true,
    },
    proposal: {
        type: [String],
        default: [false, 'Please add proposal'],
    },
    progress1: {
        type: String,
        required: [false, 'Please add progress 1']
    },
    progress2: {
        type: String,
        required: [false, 'Please add progress 2']
    },
    fPresentation: {
        type: String,
        required: [false, 'Please final presentation']
    },
   
}, {
    timestamps: true
})



module.exports = mongoose.model('ExaminerMarks', examinerMarkSchema);
