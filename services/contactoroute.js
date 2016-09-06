var express = require('express');
var contacto = require('../dbconection/contactoconection.js');

var contactorouter = express.Router();

contactorouter.use(function(req,res,next){
    console.log('something is happening');
    next();
});

contactorouter.post('/display',function(req,res){
    contacto.display(req,function(result){
        console.log(result);
        res.send(result);
   });
});

contactorouter.put('/agregar',function(req,res){
    contacto.agregar(req,function(result){
        console.log(result);
        res.send(result);
   });
});


module.exports = contactorouter;