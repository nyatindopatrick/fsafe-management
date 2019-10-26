const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: { type: String },
  author: { type: String },
  content: { type: String },
  description: { type: String },
  url: { type: String },
  image: { type: String },
  date: { type: String }
});

module.exports = mongoose.model('News', newsSchema);
