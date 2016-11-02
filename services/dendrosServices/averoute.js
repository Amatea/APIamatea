var express = require('express');
var Ave = require('../../dbconection/apidendrosDB/avesconection.js');

var averouter = express.Router();


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
    .get(function(req, res) {
      Ave.findOne({ _id: req.params.id}, function(err, ave) {
        if (err) {
          return res.send(err);
        }
        res.json(ave);
  });
});

module.exports = averouter;