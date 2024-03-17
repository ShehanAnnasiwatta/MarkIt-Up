// models/Rubric.js

const mongoose = require('mongoose');

const rubricSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  criteria: [
    {
      type: String,
      required: true,
    },
  ],
  scores: [
    {
      type: Number,
      default: 0,
    },
  ],
});

module.exports = mongoose.model('Rubric', rubricSchema);
