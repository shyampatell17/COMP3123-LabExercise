const mongoose = require('mongoose');


//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

// Define the Note schema
const noteSchema = new mongoose.Schema({
    noteTitle: {
      type: String,
      required: true,
    },
    noteDescription: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      enum: ['HIGH', 'MEDIUM', 'LOW'],  // Limit to specific values
      required: true,
    },
    dateAdded: {
      type: Date,
      default: Date.now,  // Automatically set the current date
    },
    dateUpdated: {
      type: Date,
      default: Date.now,  // Automatically set the current date on creation
    },
  });
  
  // Create the Note model from the schema
  const Note = mongoose.model('Note', noteSchema);
  
  module.exports = Note;