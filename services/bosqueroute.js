var Bosque = require('../dbconection/bosquesconection');
var express = require('express');
var router = express.Router();

router.route('/bosques').get(function(req, res) {
  Bosque.find(function(err, bosques) {
    if (err) {
      return res.send(err);
    }

    res.json(bosques);
  });
});

router.route('/bosques').post(function(req, res) {
  var bosque = new Bosque(req.body);

  bosque.save(function(err) {
    if (err) {
      return res.send(err);
    }
    res.send({ message: 'Usuario Added' });
  });
});

router.route('/bosques')
  .get(function(req, res) {
    Bosque.find(function(err, bosque) {
      if (err) {
        return res.send(err);
      }
      res.json(bosque);
    });
  })

  .post(function(req, res) {
    var bosque = new Bosque(req.body);

    bosque.save(function(err) {
      if (err) {
        return res.send(err);
      }
      res.send({ message: 'Usuario Added' });
    });
  });

router.route('/bosques/:id').put(function(req,res){
  Bosque.findOne({ _id: req.params.id }, function(err, bosque) {
    if (err) {
      return res.send(err);
    }

    for (prop in req.body) {
      bosque[prop] = req.body[prop];
    }
    // save the movie
    bosque.save(function(err) {
      if (err) {
        return res.send(err);
      }
      res.json({ message: 'Bosque updated!' });
    });
  });
});

router.route('/bosques/:id').get(function(req, res) {
  Bosque.findOne({ _id: req.params.id}, function(err, bosque) {
    if (err) {
      return res.send(err);
    }
    res.json(bosque);
  });
});

router.route('/bosques/:id').delete(function(req, res) {
  Bosque.remove({
    _id: req.params.id
  }, function(err, bosque) {
    if (err) {
      return res.send(err);
    }
    res.json({ message: 'Successfully deleted' });
  });
});

module.exports = router;