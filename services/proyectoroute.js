var Proyecto = require('../dbconection/proyectosconection');
var express = require('express');
var router = express.Router();

router.route('/proyectos').get(function(req, res) {
  Proyecto.find(function(err, proyectos) {
    if (err) {
      return res.send(err);
    }

    res.json(proyectos);
  });
});

router.route('/proyectos').post(function(req, res) {
  var proyecto = new Proyecto(req.body);

  proyecto.save(function(err) {
    if (err) {
      return res.send(err);
    }
    res.send({ message: 'Proyecto Added' });
  });
});

router.route('/proyectos')
  .get(function(req, res) {
    Proyecto.find(function(err, proyecto) {
      if (err) {
        return res.send(err);
      }
      res.json(proyecto);
    });
  })

  .post(function(req, res) {
    var proyecto = new Proyecto(req.body);

    proyecto.save(function(err) {
      if (err) {
        return res.send(err);
      }
      res.send({ message: 'Proyecto Added' });
    });
  });

router.route('/proyectos/:id').put(function(req,res){
  Proyecto.findOne({ _id: req.params.id }, function(err, proyecto) {
    if (err) {
      return res.send(err);
    }

    for (prop in req.body) {
      proyecto[prop] = req.body[prop];
    }
    // save the movie
    proyecto.save(function(err) {
      if (err) {
        return res.send(err);
      }
      res.json({ message: 'Proyecto updated!' });
    });
  });
});

router.route('/proyectos/:id').get(function(req, res) {
  Proyecto.findOne({ _id: req.params.id}, function(err, proyecto) {
    if (err) {
      return res.send(err);
    }
    res.json(proyecto);
  });
});

router.route('/proyectos/:id').delete(function(req, res) {
  Proyecto.remove({
    _id: req.params.id
  }, function(err, proyecto) {
    if (err) {
      return res.send(err);
    }
    res.json({ message: 'Successfully deleted' });
  });
});

module.exports = router;