const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PKDSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  published: {
    type: Number,
    required: true
  },
  publisher: {
    type: String
  },
  genre: {
    type: String,
    required: true
  },
  characters: {
    type: [String],
    // required: true
  },
  description: {
    type: String,
    required: true
  },
  read: {
    type: Boolean,
    default: false
  }

});

module.exports =
  mongoose.model('PKD', PKDSchema);
