const mongoose = require('mongoose');

const presentationSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },

    group: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true
    },

    startTime: {
        type: String,
        required: true
    },

    endTime: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    examiners: {
        type: [String],
        required: true
    }
  
});

const Presentation = mongoose.model('Presentation', presentationSchema);

module.exports = Presentation;