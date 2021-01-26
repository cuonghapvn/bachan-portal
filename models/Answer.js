const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  sender_id: String,
  sender_name: String,
  quizQ1: String,
  quizQ1Date: Date,
  quizQ2: String,
  quizQ2Date: Date,
  quizQ3: String,
  quizQ3Date: Date
});

const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;
