const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  sender_id: String,
  sender_name: String,
  quizQuestion: String,
  quizAnswer: String,
  quizAnswerDate: Date
});

const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;
