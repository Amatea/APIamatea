var Noticia = require('../dbconection/noticiaconection');
var express = require('express');
var router = express.Router();

router.route('/noticia').get(function(req, res) {
  Noticia.find(function(err, noticias) {
    if (err) {
      return res.send(err);
    }

    res.json(noticias);
  });
});

router.route('/noticias').post(function(req, res) {
  var noticia = new Noticia(req.body);

  noticia.save(function(err) {
    if (err) {
      return res.send(err);
    }
    res.send({ message: 'Noticia Added' });
  });
});

router.route('/noticias')
  .get(function(req, res) {
    Noticia.find(function(err, noticia) {
      if (err) {
        return res.send(err);
      }
      res.json(noticia);
    });
  })

  .post(function(req, res) {
    var noticia = new noticia(req.body);

    noticia.save(function(err) {
      if (err) {
        return res.send(err);
      }
      res.send({ message: 'Noticia Added' });
    });
  });

router.route('/noticias/:id').put(function(req,res){
  Noticia.findOne({ _id: req.params.id }, function(err, noticia) {
    if (err) {
      return res.send(err);
    }

    for (prop in req.body) {
      noticia[prop] = req.body[prop];
    }
    // save the movie
    noticia.save(function(err) {
      if (err) {
        return res.send(err);
      }
      res.json({ message: 'Noticia updated!' });
    });
  });
});

router.route('/noticias/:id').get(function(req, res) {
  Noticia.findOne({ _id: req.params.id}, function(err, noticia) {
    if (err) {
      return res.send(err);
    }
    res.json(noticia);
  });
});

router.route('/noticias/:id').delete(function(req, res) {
  Noticia.remove({
    _id: req.params.id
  }, function(err, noticia) {
    if (err) {
      return res.send(err);
    }
    res.json({ message: 'Successfully deleted' });
  });
});

module.exports = router;