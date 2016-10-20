var Contacto = require('../dbconection/contactoconection');
var express = require('express');
var router = express.Router();

router.route('/contacto').get(function(req, res) {
  Contacto.find(function(err, contacto) {
    if (err) {
      return res.send(err);
    }

    res.json(contacto);
  });
});

router.route('/contacto').post(function(req, res) {
  var contacto = new Contacto(req.body);

  contacto.save(function(err) {
    if (err) {
      return res.send(err);
    }
    res.send({ message: 'Usuario Added' });
  });
});

router.route('/contacto')
  .get(function(req, res) {
    Contacto.find(function(err, contacto) {
      if (err) {
        return res.send(err);
      }
      res.json(contacto);
    });
  })

  .post(function(req, res) {
    var contacto = new contacto(req.body);

    contacto.save(function(err) {
      if (err) {
        return res.send(err);
      }
      res.send({ message: 'Usuario Added' });
    });
  });

router.route('/contacto/:id').put(function(req,res){
  Contacto.findOne({ _id: req.params.id }, function(err, contacto) {
    if (err) {
      return res.send(err);
    }

    for (prop in req.body) {
      contacto[prop] = req.body[prop];
    }
    // save the movie
    contacto.save(function(err) {
      if (err) {
        return res.send(err);
      }
      res.json({ message: 'Contacto updated!' });
    });
  });
});

router.route('/contacto/:id').get(function(req, res) {
  Contacto.findOne({ _id: req.params.id}, function(err, contacto) {
    if (err) {
      return res.send(err);
    }
    res.json(contacto);
  });
});

router.route('/contacto/:id').delete(function(req, res) {
  Contacto.remove({
    _id: req.params.id
  }, function(err, contacto) {
    if (err) {
      return res.send(err);
    }
    res.json({ message: 'Successfully deleted' });
  });
});

module.exports = router;