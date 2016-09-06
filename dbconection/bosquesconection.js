var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var bosqueSchema = new Schema({
  nombre: String,
  apellido: String,
  correo: String,
  celular: String,
  acompanante: String,
  transporte: String,
  transporte_compartir: String,
  timestamp: Date,
});

module.exports = mongoose.model('Bosque', bosqueSchema);