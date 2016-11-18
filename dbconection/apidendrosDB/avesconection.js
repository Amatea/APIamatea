var mongoose =require('mongoose');
var Schema = mongoose.Schema;
var config = require('../../config.js')
var conn1 = mongoose.createConnection(config.db.conndendros); 


var AveSchema = {
    
  aveId: Number,
  nombre_cientifico: String,
  nombre_ingles: String,
  nombre_comun: String,
  familia: String,
  rango_altura: String,
  habitat: String,
  descripcion_ave: String,
  estado_conservacion: String,
  actividad_ave: String,
  coordenada: String,
  canto: String,
  thumbUrl: String,
  foto_macho: String,
  foto_hembra: String,
  foto1: String,
  foto2: String,
  fotografo: String,
  fecha: { type: Date, default: Date.now }

};

module.exports = conn1.model('Ave', mongoose.Schema(AveSchema));