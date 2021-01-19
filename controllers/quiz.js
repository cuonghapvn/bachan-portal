/* eslint-disable linebreak-style */
const Answer = require('../models/Answer');

/**
 * GET /quiz
 * Quiz page.
 */
exports.index = (req, res) => {
  Answer.find({}, (err, answers) => {
    console.log(answers);
    res.render('quiz', {
      title: 'Tổng hợp kết quả Quiz',
      answers: answers
    });
  });
};

/**
 * POST /api/quiz/
 * Create a pin.
 */
exports.postAnswer = (req, res, next) => {
  Answer.findOne({
    sender_id: req.body.sender_id,
    quizQuestion: req.body.quizQuestion
  }, (err, answer) => {
    if (err) {
      return next(err);
    }
    console.log(answer);
    if (answer) {
      console.log('User is already answer this question. Try to update!');
      answer.quizAnswer = req.body.quizAnswer;
      answer.quizAnswerDate = new Date();
      answer.save((err) => {
        if (err) {
          return next(err);
        }
        console.log(answer);
        res.sendStatus(200);
      });
    } else {
      console.log('New answer! Try to add to database!');
      const answer = new Answer({
        sender_id: req.body.sender_id,
        sender_name: req.body.sender_name,
        quizQuestion: req.body.quizQuestion,
        quizAnswer: req.body.quizAnswer,
        quizAnswerDate: new Date()
      });
      answer.save((err) => {
        if (err) {
          return next(err);
        }
        console.log(answer);
        res.sendStatus(200);
      });
    }
  });
};