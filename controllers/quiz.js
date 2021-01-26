/* eslint-disable linebreak-style */
const Answer = require('../models/Answer');

/**
 * GET /quiz
 * Quiz page.
 */
exports.index = (req, res) => {
  Answer.find({}, (err, answers) => {
    console.log(answers);
    Answer.find({quizQ1: 'B', quizQ2: 'C', quizQ3: 'B'}, (err, answers_valid) => {
      console.log(answers_valid);
      res.render('quiz', {
        title: 'Tổng hợp kết quả Quiz',
        answers: answers,
        answers_valid: answers_valid
      });
    });
  });
};

/**
 * POST /api/quiz/
 * Create a pin.
 */
exports.postAnswer = (req, res, next) => {
  Answer.findOne({
    sender_id: req.body.sender_id
  }, (err, answer) => {
    if (err) {
      return next(err);
    }
    console.log(answer);
    if (answer) {
      console.log('User is already answer this question. Try to update!');
      if (req.body.quizQuestion === 'Q1') {
        answer.quizQ1 = req.body.quizAnswer;
        answer.quizQ1Date = new Date();
        answer.save((err) => {
          if (err) {
            return next(err);
          }
          console.log(answer);
          res.sendStatus(200);
        });
      } else if (req.body.quizQuestion === 'Q2') {
        answer.quizQ2 = req.body.quizAnswer;
        answer.quizQ2Date = new Date();
        answer.save((err) => {
          if (err) {
            return next(err);
          }
          console.log(answer);
          res.sendStatus(200);
        });
      } else if (req.body.quizQuestion === 'Q3') {
        answer.quizQ3 = req.body.quizAnswer;
        answer.quizQ3Date = new Date();
        answer.save((err) => {
          if (err) {
            return next(err);
          }
          console.log(answer);
          res.sendStatus(200);
        });
      }
      
    } else {
      console.log('New answer! Try to add to database!');
      const answer = new Answer({
        sender_id: req.body.sender_id,
        sender_name: req.body.sender_name,
        quizQ1: '',
        quizQ1Date: null,
        quizQ2: '',
        quizQ2Date: null,
        quizQ3: '',
        quizQ3Date: null
      });
      if (req.body.quizQuestion === 'Q1') {
        answer.quizQ1 = req.body.quizAnswer;
        answer.quizQ1Date = new Date();
        answer.save((err) => {
          if (err) {
            return next(err);
          }
          console.log(answer);
          res.sendStatus(200);
        });
      } else if (req.body.quizQuestion === 'Q2') {
        answer.quizQ2 = req.body.quizAnswer;
        answer.quizQ2Date = new Date();
        answer.save((err) => {
          if (err) {
            return next(err);
          }
          console.log(answer);
          res.sendStatus(200);
        });
      } else if (req.body.quizQuestion === 'Q3') {
        answer.quizQ3 = req.body.quizAnswer;
        answer.quizQ3Date = new Date();
        answer.save((err) => {
          if (err) {
            return next(err);
          }
          console.log(answer);
          res.sendStatus(200);
        });
      }
    }
  });
};