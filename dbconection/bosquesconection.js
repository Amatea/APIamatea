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
  timestamp: { type: Date, default: Date.now },
  evento: { type: String, default: 'bosques volar enero'}
});

module.exports = mongoose.model('Bosque', bosqueSchema);