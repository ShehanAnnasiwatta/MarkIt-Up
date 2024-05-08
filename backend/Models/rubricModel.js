const mongoose = require('mongoose');

// Define the criterion schema
const criterionSchema = {
  name: {
    type: [String], // Array of strings
    required: true
  }
};

// Define the rubric schema
const rubricSchema = {
  specialization: {
    type: String,
    required: true
  },
  criteria: [criterionSchema] // Array of criterion objects
};

// Create the Rubric model
const Rubric = mongoose.model('Rubric', rubricSchema);

module.exports = Rubric;
