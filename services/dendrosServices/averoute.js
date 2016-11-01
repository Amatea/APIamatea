var express = require('express');
var Ave = require('../../dbconection/apidendrosDB/avesconection.js');

var averouter = express.Router();

averouter.use(function(req,res,next){
    console.log('something is happening');
    next();
});

averouter.route('/aves')
  .get(function(req, res) {
    Ave.find(function(err, ave) {
      if (err) {
        return res.send(err);
      }
        res.json(ave);
    });
});

averouter.route('/aves')
  .post(function(req, res) {
  var ave = new Ave(req.body);

  ave.save(function(err) {
    if (err) {
      return res.send(err);
    }
    res.send({ message: 'ave Added' });
  });
});

averouter.route('/aves')
  .get(function(req, res) {
    Ave.find(function(err, ave) {
      if (err) {
        return res.send(err);
      }
      res.json(ave);
    });
  })

  .post(function(req, res) {
    var ave = new Ave(req.body);

    ave.save(function(err) {
      if (err) {
        return res.send(err);
      }
      res.send({ message: 'Ave Added' });
    });
  });

averouter.route('/aves/:id')
  .put(function(req,res){
     Ave.findOne({ _id: req.params.id }, function(err, ave) {
        if (err) {
          return res.send(err);
        }

        for (prop in req.body) {
          ave[prop] = req.body[prop];
        }
    // save the movie
        ave.save(function(err) {
          if (err) {
            return res.send(err);
          }
        res.json({ message: 'Ave updated!' });
    });
  });
});

averouter.route('/aves/:id')
    .get(function(req, res) {
      Ave.findOne({ _id: req.params.id}, function(err, ave) {
        if (err) {
          return res.send(err);
        }
        res.json(ave);
  });
});

averouter.route('/aves/:id')
    .delete(function(req, res) {
      Ave.remove({
        _id: req.params.id
      }, function(err, ave) {
       if (err) {
         return res.send(err);
      }
    res.json({ message: 'Satisfactoriamente deleted' });
  });
});


module.exports = averouter;