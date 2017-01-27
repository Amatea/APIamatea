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
        html: '<h2>' + 'Hola '+ user.nombre + '</h2>'+ `Gracias por inscribirte.\n` + 
        'Te recordamos que antes de llegar al punto de encuentro, debes haber cancelado el valor de la actividad.<br>' +
        'La inscripción incluye: Transporte, Refrigerio, Caminata avistamiento de Aves - interpretación ambiental - Arbol.\n' +
        '<a href="https://amatea.org/#/pagos"><h2>Realiza tu Pago<h2></a>\n\n' +
        '<h1>Siembra de Arboles Domingo 29</h1>\n\n' +
        'Punto de Encuentro: Parque del Perro.<br>' + 
        'Hora: 7:30 am.<br>' +
        'Lugar de la actividad: Vereda el Faro, PNN Farallones de Cali, Area de Restauración Ecológica Amatea.\n\n' +
        '<h2>Actividades:</h2>\n' +
        '1. Charla - Introducción.<br>' + '2. Caminata Ecológica (recorrido suave por senderos apto para todo publico).<br>' +
        '3. Actividad de conexión con la naturaleza.<br>' + '4. Siembra de Arboles.<br>' + '5. Refrigerio.<br>' + '6. Regreso<br><br>' +
        'Cualquier duda puedes escribirnos a este correo o comunicarte con Beatriz Guevara, Cel : 3128959947<br><br>' +
        'Gracias, te esperamos!!\n\n' +
        '<h3> Gracias por contribuir a la armonía del Ser con la Naturaleza </h3>'
      };
      transporter.sendMail(mailOptions, function(err){
        done(err);
      });
    }
  ], (err) => {
    if (err) { return next(err); }
  });

}