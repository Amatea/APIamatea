const nodemailer = require('nodemailer');
const User = require('../dbconection/bosquesconection');

exports.index = (req, res) => {
  res.render('bosquesvolar', {
    title: 'Bosque para Volar'
  });
};

exports.inscripcion = (req, res) => {
  
  var user = new User(req.body);

  user.save(function(err) {
    if (err) {
      return res.send(err);
    }
    res.redirect('/');
  });
};