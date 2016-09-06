var Donacion = require('../dbconection/donacionconection');
var express = require('express');
var router = express.Router();

router.route('/donaciones').get(function(req, res) {
  Donacion.find(function(err, donaciones) {
    if (err) {
      return res.send(err);
    }

    res.json(donaciones);
  });
});

router.route('/donaciones').post(function(req, res) {
  var donacion = new Donacion(req.body);

  donacion.save(function(err) {
    if (err) {
      return res.send(err);
    }
    res.send({ message: 'donacion Added' });
  });
});

router.route('/donaciones')
  .get(function(req, res) {
    Donacion.find(function(err, donaciones) {
      if (err) {
        return res.send(err);
      }
      res.json(donacion);
    });
  })

  .post(function(req, res) {
    var bosque = new Donacion(req.body);

    donacion.save(function(err) {
      if (err) {
        return res.send(err);
      }
      res.send({ message: 'Usuario Added' });
    });
  });

router.route('/donaciones/:id').put(function(req,res){
  Donacion.findOne({ _id: req.params.id }, function(err, donacion) {
    if (err) {
      return res.send(err);
    }

    for (prop in req.body) {
      donacion[prop] = req.body[prop];
    }
    // save the movie
    donacion.save(function(err) {
      if (err) {
        return res.send(err);
      }
      res.json({ message: 'Bosque updated!' });
    });
  });
});

router.route('/donaciones/:id').get(function(req, res) {
  Donacion.findOne({ _id: req.params.id}, function(err, donacion) {
    if (err) {
      return res.send(err);
    }
    res.json(bosque);
  });
});

router.route('/donaciones/:id').delete(function(req, res) {
  Donacion.remove({
    _id: req.params.id
  }, function(err, donacion) {
    if (err) {
      return res.send(err);
    }
    res.json({ message: 'Successfully deleted' });
  });
});


module.exports = router;