const mongoose = require('mongoose');

const criterionSchema = new mongoose.Schema({
  name: [{
    type: String,
    required: true,
  }],
  score: {
    type: Number,
    default: 0,
  },
});

const rubricSchema = new mongoose.Schema({
  specialization: {
    type: String,
    required: true,
  },
  criteria: [criterionSchema],
});

module.exports = mongoose.model('Rubric', rubricSchema);
