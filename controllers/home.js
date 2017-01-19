const nodemailer = require('nodemailer');
const async = require('async');
const User = require('../dbconection/bosquesconection');

exports.index = (req, res) => {
  res.render('bosquesvolar', {
    title: 'Bosque para Volar'
  });
};

exports.inscripcion = (req, res, next) => {
  
  async.waterfall([
    function(done){ 
      const user = new User(req.body);

      user.save(function(err) {
      if (err) {
        return res.send(err);
      }
      user.save((err) => {
            if (err) { return next(err); }
            req.logIn(user, (err) => {
              done(err, user);
            });
            res.redirect('/');
          });
  });
},
    function sendResetPasswordEmail(user, done) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'sarmiento@amatea.org',
          pass: 'cibsolar1609'
        }
      });
      const mailOptions = {
        to: user.correo,
        from: 'amatea@amatea.org',
        subject: 'Bosques para Volar',
        html: '<h2>' + 'Hola '+ user.nombre + '</h2>'+ `Gracias por inscribirte.\n` + 'En breve estaremos enviandote más información.\n\n'
              + '<h3> Gracias por contribuir a la armonía del Ser con la Naturaleza </h3>'
      };
      transporter.sendMail(mailOptions, function(err){
        done(err);
      });
    }
  ], (err) => {
    if (err) { return next(err); }
  });

}